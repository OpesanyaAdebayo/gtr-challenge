const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({ level: process.env.NODE_ENV === 'production' ? 'error' : 'debug' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}
module.exports = logger;
