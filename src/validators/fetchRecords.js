const joiDate = require('@hapi/joi-date');
const Joi = require('@hapi/joi').extend(joiDate);

const fetchRecordsSchema = Joi.object({
  startDate: Joi.date()
    .format('YYYY-MM-DD').utc()
    .max(Joi.ref('endDate'))
    .required(),
  endDate: Joi.date()
    .format('YYYY-MM-DD').utc()
    .required(),
  minCount: Joi.number()
    .integer()
    .max(Joi.ref('maxCount'))
    .required(),
  maxCount: Joi.number()
    .integer()
    .required(),
});

module.exports = { fetchRecordsSchema };
