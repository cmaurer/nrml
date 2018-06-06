
/*

  Computes an array that is the result of subtracting each element in the array (a)
  by the supplied value (v)

*/
module.exports = (a, v) => {
  if(Array.isArray(a)) {
    return a.map((d) => {
      return  Number((d - v).toFixed(4))
    })
  }
  throw new Error('parameter is not an Array')
}
