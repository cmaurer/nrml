

module.exports = (a, v) => {
  if(Array.isArray(a)) {
    return a.map((d) => {
      return  d - v
    })
  }
  throw new Error('parameter is not an Array')
}
