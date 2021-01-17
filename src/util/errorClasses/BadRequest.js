const { RESPONSES } = require('../constants/responses');

class BadRequestError {
  constructor(message) {
    this.msg = message;
    this.code = RESPONSES.BAD_REQUEST.CODE;
    this.statusCode = RESPONSES.BAD_REQUEST.STATUS_CODE;
  }
}

module.exports = {
  BadRequestError,
};
