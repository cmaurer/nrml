let sum = require('./sum')

module.exports = (a) => {
  if(Array.isArray(a)) {
    return (sum(a) / a.length)
  }
  throw new Error('parameter is not an Array')
}
