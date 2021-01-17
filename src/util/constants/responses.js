module.exports = {
  RESPONSES: {
    INTERNAL_SERVER_ERROR: {
      CODE: '-1',
      MSG: 'Internal server error',
      STATUS_CODE: 500,
    },
    RESOURCE_NOT_FOUND: {
      CODE: '-2',
      MSG: 'Resource not found',
      STATUS_CODE: 404,
    },
    BAD_REQUEST: {
      CODE: '1',
      STATUS_CODE: 400,
    },
    SUCCESS: {
      CODE: '0',
      MSG: 'Records retrieved successfully',
    },
  },
};
