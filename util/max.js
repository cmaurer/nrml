const maximumValue = require('./reducers').maximumValue

/*
  Finds the minimum number in an Array.
  Different from the Math.max:
    - accepts arrays of mixed types, will only operate on numeric values
    - type checking
*/

module.exports = (x) => {
  if(Array.isArray(x)){
    return x.reduce(maximumValue)
  }
  throw new Error("parameter is not an Array")
}
