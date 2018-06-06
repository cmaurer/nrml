const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const min = nrml.min

describe('min', () => {

  describe('happy path', () => {

    it('should find min for a simple array', () => {
      let arr = [1,2,3,4,5,6,7]
      let minValue = min(arr)
      minValue.should.be.a.Number
      minValue.should.eql(1)
    })

    it('should find min for a simple array with at least one non numeric value', () => {
      let arr = [1,2,3,4,5,'a',6,7]
      let maxValue = min(arr)
      maxValue.should.be.a.Number
      maxValue.should.eql(1)
    })

    it('should find min for a simple array with at least one undefined value', () => {
      let arr = [1,2,3,undefined,4,5,6,7]
      let maxValue = min(arr)
      maxValue.should.be.a.Number
      maxValue.should.eql(1)
    })

  })

  describe('sad path', () => {

    it('should throw error for undefined', () => {
      (() => {
        min(undefined)
      }).should.throw('parameter is not an Array')
    })

    it('should throw error for number', () => {
      (() => {
        min(1)
      }).should.throw('parameter is not an Array')
    })

  })

})
