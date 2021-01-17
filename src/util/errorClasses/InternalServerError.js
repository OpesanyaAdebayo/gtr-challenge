const { INTERNAL_SERVER_ERROR } = require('../constants/responses').RESPONSES;

class InternalServerError {
  constructor() {
    this.msg = INTERNAL_SERVER_ERROR.MSG;
    this.code = INTERNAL_SERVER_ERROR.CODE;
    this.statusCode = INTERNAL_SERVER_ERROR.STATUS_CODE;
  }
}

module.exports = {
  InternalServerError,
};
