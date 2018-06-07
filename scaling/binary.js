const numberFilter = require('../util/filters').numberFilter

/*
  Values greater than the threshold map to 1,
  while values less than or equal to the threshold map to 0.
  With the default threshold of 0, only positive values map to 1.
*/
module.exports = (a, threshold = 0) => {
  if (Array.isArray(a)) {
    return a.map((x) => {
      if (typeof x === 'number') {
        if (x > threshold) {
          return 1
        } else {
          return 0
        }
      }
    })
    .filter(numberFilter)
  }
  throw new Error('parameter a is not an Array')
}
