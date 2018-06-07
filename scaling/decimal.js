const maximumAbsoluteValue = require('../util/reducers').maximumAbsoluteValue
const numberFilter = require('../util/filters').numberFilter

/*

Normalization by decimal scaling normalizes by moving the decimal point of values
of attribute A. The number of decimal points moved depends on the maximum absolute
value of A.
Data mining : concepts and techniques / Jiawei Han, Micheline Kamber, Jian Pei. – 3rd ed.

*/
module.exports = (a) => {

  if(Array.isArray(a)) {
    let mav = a.reduce(maximumAbsoluteValue)
    let numberOfDecimals = mav.toString().length
    return a.map((x) => {
      if (typeof x === 'number') {
        return Number((x / Math.pow(10, numberOfDecimals)).toFixed(numberOfDecimals))
      }
    })
    .filter(numberFilter)
  }
  throw new Error('parameter a is not an Array')

}
