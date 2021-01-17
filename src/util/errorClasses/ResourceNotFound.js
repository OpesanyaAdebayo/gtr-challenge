const { RESOURCE_NOT_FOUND } = require('../constants/responses').RESPONSES;

class ResourceNotFoundError {
  constructor() {
    this.msg = RESOURCE_NOT_FOUND.MSG;
    this.code = RESOURCE_NOT_FOUND.CODE;
    this.statusCode = RESOURCE_NOT_FOUND.STATUS_CODE;
  }
}

module.exports = {
  ResourceNotFoundError,
};
