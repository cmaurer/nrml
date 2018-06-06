const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const max = nrml.max

describe('max', () => {

  describe('happy path', () => {

    it('should find min for a simple array', () => {
      let arr = [1,2,3,4,5,6,7]
      let maxValue = max(arr)
      maxValue.should.be.a.Number
      maxValue.should.eql(7)
    })

    it('should find min for a simple array with at least one non numeric value', () => {
      let arr = [1,2,3,4,5,'a',6,7]
      let maxValue = max(arr)
      maxValue.should.be.a.Number
      maxValue.should.eql(7)
    })

    it('should find min for a simple array with at least one undefined value', () => {
      let arr = [1,2,3,4,undefined,5,6,7]
      let maxValue = max(arr)
      maxValue.should.be.a.Number
      maxValue.should.eql(7)
    })

  })

  describe('sad path', () => {

    it('should throw error for undefined', () => {
      (() => {
        max(undefined)
      }).should.throw('parameter is not an Array')
    })

    it('should throw error for number', () => {
      (() => {
        max(1)
      }).should.throw('parameter is not an Array')
    })

    it('should throw error for array of non numbers', () => {
      let maxValue = max(['a','b','c','d','e'])
      should.not.exist(maxValue)
    })

  })

})
