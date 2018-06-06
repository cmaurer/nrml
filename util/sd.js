let mean = require('./mean')
let diff = require('./diff')
let sum = require('./sum')

/**

  {\displaystyle s = {\sqrt {\frac {\sum _{i=1}^{N}(x_{i}-{\overline {x}})^{2}}{N-1}}}.}

*/
module.exports = (a) => {
  if(Array.isArray(a)){
    let _mean = mean(a)
    let _diff_array = diff(a, _mean)
    let _sqaured_diff_arr = _diff_array.map((d) => Math.pow(d, 2))
    let _sum_sqaured_diff = sum(_sqaured_diff_arr)
    let N = a.length
    return Math.sqrt((_sum_sqaured_diff/(N - 1)))
  }
  throw new Error('parameter is not an Array')
}
