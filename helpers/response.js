
const response = (res, next, code, message, data) => {
  const result = {
    code: code,
    message: message,
    data: data
  }

  res.json(result)
  return next()
}

module.exports = {
  response: response
}