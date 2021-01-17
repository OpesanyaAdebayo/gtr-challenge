const { fetchRecordsSchema } = require('../validators/fetchRecords');
const { fetchAggregatedRecords } = require('../services/records');
const { BadRequestError } = require('../util/errorClasses/BadRequest');
const { SUCCESS } = require('../util/constants/responses').RESPONSES;

const fetchRecords = async ({
  startDate, endDate, minCount, maxCount,
}) => {
  const validation = fetchRecordsSchema.validate({
    startDate, endDate, minCount, maxCount,
  });
  if (validation.error) {
    throw new BadRequestError(validation.error.details[0].message);
  }
  const records = await fetchAggregatedRecords({
    startDate, endDate, minCount, maxCount,
  });
  return { code: SUCCESS.CODE, msg: SUCCESS.MSG, records };
};

module.exports = { fetchRecords };
