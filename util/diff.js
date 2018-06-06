

module.exports = (a, v) => {
  if(Array.isArray(a)) {
    return a.map((d) => {
      return  Number((d - v).toFixed(4))
    })
  }
  throw new Error('parameter is not an Array')
}
