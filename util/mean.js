let sum = require('./sum')

module.exports = (a) => {
  if(Array.isArray(a)) {
    return Number((sum(a) / a.length).toFixed(4))
  }
  throw new Error('parameter is not an Array')
}
