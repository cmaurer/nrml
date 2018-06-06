const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const mean = nrml.mean

describe('mean', () => {

  describe('happy path', () => {

    it('should find mean for array of numbers', () => {
      let _mean = mean([2,4,6,8,10])
      _mean.should.exist
      _mean.should.be.a.Number
      _mean.should.eql(6)
    })

  })

  describe('sad path', () => {

    it('should throw error for non array', () => {
      (() => {
        mean()
      }).should.throw('parameter is not an Array')
    })

  })

})
