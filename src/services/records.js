const Record = require('../models/records');

/**
 * @description Returns aggregated records based on supplied arguments.
 * @param {Date} startDate Earliest date for createdAt'
 * @param {Date} endDate Latest date for 'createdAt'
 * @param {number} minCount Minimum value for sum of 'counts' field
 * @param {number} maxCount Maximum value for sum of 'counts' field
 */
const fetchAggregatedRecords = async ({
  startDate, endDate, minCount, maxCount,
}) => Record.aggregate([
  {
    $match: {
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    },
  },
  {
    $project: {
      _id: 0,
      key: 1,
      createdAt: 1,
      totalCount: {
        $sum: '$counts',
      },
    },
  },
  {
    $match: {
      totalCount: {
        $gte: minCount,
        $lte: maxCount,
      },
    },
  },
]);

module.exports = { fetchAggregatedRecords };
