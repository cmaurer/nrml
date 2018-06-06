
const reducer = (accumulator, currentValue) => {
  if(typeof currentValue === 'number') {
    return accumulator + currentValue
  }
  return accumulator
}

module.exports = (a) => {
  if (Array.isArray(a)) {
    return a.reduce(reducer, 0)
  }
  throw new Error("parameter is not an Array")
}
