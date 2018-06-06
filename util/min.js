/*
  Finds the minimum number in an Array.
  Different from the Math.min:
    - accepts arrays of mixed types, will only operate on numeric values
    - type checking

*/
const reducer = (accumulator, currentValue) => {
  if ((typeof currentValue === 'number') && (currentValue < accumulator)) {
      return currentValue
  } else if ((typeof currentValue !== 'number') && (typeof accumulator !== 'number')) {
      return undefined
  }
  return accumulator
}

module.exports = (x) => {
  if(Array.isArray(x)) {
    return x.reduce(reducer)
  }
  throw new Error("parameter is not an Array")
}
