const mean = require('./mean')
const sd = require('./sd')
const numberFilter = require('./filters').numberFilter

module.exports = (a) => {
  if(Array.isArray(a)){
    let _mean = mean(a)
    let _sd = sd(a)
    return a.map((x) => {
      if (typeof x === 'number') {
        return Number(((x - _mean) / _sd).toFixed(4))
      }
    })
    .filter(numberFilter)
  }
  throw new Error('parameter is not an Array')
}
