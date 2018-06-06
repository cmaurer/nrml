const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const variance = nrml.variance

describe('variance', () => {

  describe('happy path', () => {

    it('should return standard deviation for an array of numbers', () => {
      let _variance = variance([7, 8, 8, 7.5, 9])
      _variance.should.exist
      _variance.should.be.a.Number
      _variance.should.eql(0.55)
    })

  })

  describe('sad path', () => {

    it('should throw error for non array', () => {
      (() => {
        variance()
      }).should.throw('parameter is not an Array')
    })

  })

})
