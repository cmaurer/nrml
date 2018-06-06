'use strict'

const max = require('./util/max')
const min = require('./util/min')
const mean = require('./util/mean')
const sum = require('./util/sum')
const variance = require('./util/variance')
const sd = require('./util/sd')
const diff = require('./util/diff')
const zscore = require('./util/zscore')

const minmax = require('./scaling/min.max')
const standard = require('./scaling/standard')
const binary = require('./scaling/binary')
const decimal = require('./scaling/decimal')

module.exports = {
  max: max,
  min: min,
  mean: mean,
  sum: sum,
  variance: variance,
  sd: sd,
  diff: diff,
  zscore: zscore,
  minmax: minmax,
  standard: standard,
  binary: binary,
  decimal: decimal
}
