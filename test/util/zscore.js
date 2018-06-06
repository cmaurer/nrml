const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const zscore = nrml.zscore

describe('zscore', () => {

  describe('happy path', () => {

    it('should return an array of zscores', () => {
      let _zscores = zscore([7, 8, 8, 7.5, 9])
      _zscores.should.exist
      _zscores.should.be.an.Array
      _zscores.should.eql([-1.2136, 0.1348, 0.1348, -0.5394, 1.4833])
    })

  })

  describe('sad path', () => {

    it('should throw error for non array', () => {
      (() => {
        zscore()
      }).should.throw('parameter is not an Array')
    })

  })

})
