const utils = require('../helpers/response')

function errorHandler(err, _, res, next) {
  switch (err.name) {
    case 'CustomValidation':
      return utils.response(res, next, err.code, err.message, err.data)
    default:
      return utils.response(res, next, 500, "Internal Server Error", null)
  }
}

module.exports = errorHandler