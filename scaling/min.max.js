const min = require('../util/min')
const max = require('../util/max')
const numberFilter = require('../util/filters').numberFilter

/**

http://sebastianraschka.com/Articles/2014_about_feature_scaling.html#about-min-max-scaling

An alternative approach to Z-score normalization (or standardization) is the so-called Min-Max scaling (often also simply called “normalization” - a common cause for ambiguities).
In this approach, the data is scaled to a fixed range - usually 0 to 1.
The cost of having this bounded range - in contrast to standardization - is that we will end up with smaller standard deviations, which can suppress the effect of outliers.

A Min-Max scaling is typically done via the following equation:

Xnorm = X−Xmin / Xmax−Xmin

*/


module.exports = (a) => {
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
