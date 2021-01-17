const mongoose = require('mongoose');
const { MONGODB_URI } = require('./secrets');
const logger = require('../util/logger');

const connect = async () => {
  const connection = await mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  logger.info('Connected to database successfully.');
  return connection;
};

module.exports = { connect };
