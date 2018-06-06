const min = require('../util/min')
const max = require('../util/max')
const numberFilter = require('../util/filters').numberFilter

const verifyRange = (range) => {
  //range should be [min, max]
  if (range[0] > range[1]) {
    return range.reverse()
  }
  return range
}

const minMaxWithRange = (a, range) => {
  if (Array.isArray(a) && Array.isArray(range)) {
    range = verifyRange(range)
    let _min = min(a)
    let _max = max(a)
    let maxmin = ((_max - _min) + range[0])
    return a.map((x) => {
      if (typeof x === 'number') {
        return Number((((range[1] - range[0])*(x - _min)) / maxmin).toFixed(4))
      }
    })
    .filter(numberFilter)
  }
  throw new Error('parameters are not an Arrays')
}

const minMaxWithoutRange = (a) => {
  if (Array.isArray(a)) {
    let _min = min(a)
    let _max = max(a)
    let maxmin = (_max - _min)
    return a.map((x) => {
      if (typeof x === 'number') {
        return Number(((x - _min) / maxmin).toFixed(4))
      }
    })
    .filter(numberFilter)
  }
  throw new Error('parameter a is not an Array')
}


module.exports = (a, range) => {
  if (range === undefined) {
    return minMaxWithoutRange(a)
  } else {
    return minMaxWithRange(a, range)
  }
}
