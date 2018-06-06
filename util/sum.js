const sum = require('./reducers').sum

module.exports = (a) => {
  if (Array.isArray(a)) {
    return a.reduce(sum, 0)
  }
  throw new Error("parameter is not an Array")
}
