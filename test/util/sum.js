const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const sum = nrml.sum

describe('sum', () => {

  describe('happy path', () => {

    it('should sum array of numbers', () => {
      let _sum = sum([1,2,3,4,5])
      _sum.should.exist
      _sum.should.be.a.Number
      _sum.should.eql(15)
    })

    it('should sum array of numbers with at least one non numeric element', () => {
      let _sum = sum([1,2,3,'a',4,5])
      _sum.should.exist
      _sum.should.be.a.Number
      _sum.should.eql(15)
    })

  })

  describe('sad path', () => {

    it('should throw error for non array', () => {
      (() => {
        sum()
      }).should.throw('parameter is not an Array')
    })

  })

})
