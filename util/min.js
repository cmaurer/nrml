const minimumValue = require('./reducers').minimumValue


module.exports = (x) => {
  if(Array.isArray(x)) {
    return x.reduce(minimumValue)
  }
  throw new Error("parameter is not an Array")
}
