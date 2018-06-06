
const mean = require('../util/mean')
const sd = require('../util/sd')
const diff = require('../util/diff')

/**
  http://sebastianraschka.com/Articles/2014_about_feature_scaling.html#about-min-max-scaling
  The result of standardization (or Z-score normalization) is that the features will be
  rescaled so that they’ll have the properties of a standard normal distribution with

  μ=0 and σ=1

  where μ is the mean (average) and σ is the standard deviation from the mean;
  standard scores (also called z scores) of the samples are calculated as follows:

  z = x − μσ

*/

const numberFilter = (x) => {
  return typeof x === 'number'
}

module.exports = (a) => {

  if(Array.isArray(a)) {
    let _mean = mean(a)
    let _sd = sd(a)
    return a.map((x) => {
      if (typeof x === 'number') {
        return (x - _mean) / _sd
      }
    })
    .filter(numberFilter)

  }
  throw new Error('parameter a is not an Array')

}
