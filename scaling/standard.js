
const mean = require('../util/mean')
const sd = require('../util/sd')
const diff = require('../util/diff')
const numberFilter = require('../util/filters').numberFilter

/**
  http://sebastianraschka.com/Articles/2014_about_feature_scaling.html#about-min-max-scaling
  The result of standardization (or Z-score normalization) is that the features will be
  rescaled so that they’ll have the properties of a standard normal distribution with

  μ=0 and σ=1

  where μ is the mean (average) and σ is the standard deviation from the mean;
  standard scores (also called z scores) of the samples are calculated as follows:

  z = x − μσ

*/

module.exports = (a) => {
  if(Array.isArray(a)) {
    let _mean = mean(a)
    let _sd = sd(a)
    return a.map((x) => {
      if (typeof x === 'number') {
        return Number(((x - _mean) / _sd).toFixed(4))
      }
    })
    .filter(numberFilter)

  }
  throw new Error('parameter a is not an Array')
}
