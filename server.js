const express = require('express');
const { APP_PORT, ENVIRONMENT } = require('./src/config/secrets');
const logger = require('./src/util/logger');
const dbClient = require('./src/config/db');

const recordRequestHandlers = require('./src/requestHandlers/record');
const { InternalServerError } = require('./src/util/errorClasses/InternalServerError');
const { ResourceNotFoundError } = require('./src/util/errorClasses/ResourceNotFound');

if (ENVIRONMENT !== 'test') {
  dbClient.connect();
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/records', recordRequestHandlers);

app.use((req, res, _next) => {
  const error = new ResourceNotFoundError();
  return res.status(error.statusCode).json({
    code: error.code,
    msg: error.msg,
  });
});

app.use((err, req, res, _next) => {
  let error = err;
  if (!err.msg) {
    error = new InternalServerError();
  }
  return res.status(error.statusCode).json({
    code: error.code,
    msg: error.msg,
  });
});

const server = app.listen(APP_PORT || 3000, () => {
  logger.info(`App started on port ${APP_PORT}`);
});

module.exports = { app, server };
