const dotenv = require('dotenv');
const logger = require('../util/logger');

dotenv.config({ path: '.env' });

const { PORT = 4000, MONGODB_URI } = process.env;
const ENVIRONMENT = process.env.NODE_ENV || 'development';

if (!MONGODB_URI) {
  logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
  process.exit(1);
}

if (!PORT) {
  logger.error('No app port. Set APP_PORT environment variable.');
  process.exit(1);
}

module.exports = { PORT, MONGODB_URI, ENVIRONMENT };
