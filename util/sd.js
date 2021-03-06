let mean = require('./mean')
let diff = require('./diff')
let sum = require('./sum')

module.exports = (a) => {
  if(Array.isArray(a)){
    let _mean = mean(a)
    let _diff_array = diff(a, _mean)
    let _sqaured_diff_arr = _diff_array.map((d) => Math.pow(d, 2))
    let _sum_sqaured_diff = sum(_sqaured_diff_arr)
    let N = a.length
    return Number((Math.sqrt((_sum_sqaured_diff/(N - 1)))).toFixed(4))
  } else if (typeof a === 'number') {
    return Number((Math.sqrt(a).toFixed(4)))
  }
  throw new Error('parameter is not an Array')
}
