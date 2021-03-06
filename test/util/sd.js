const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const sd = nrml.sd

describe('sd', () => {

  describe('happy path', () => {

    it('should return standard deviation for an array of numbers', () => {
      let _sd = sd([85,76,73,80,72,84,79])
      _sd.should.exist
      _sd.should.be.a.Number
      _sd.should.eql(5.0615)
    })

    it('should return standard deviation for a variance number', () => {
      let _sd = sd(0.55)
      _sd.should.exist
      _sd.should.be.a.Number
      _sd.should.eql(0.7416)
    })

  })

  describe('sad path', () => {

    it('should throw error for non array', () => {
      (() => {
        sd()
      }).should.throw('parameter is not an Array')
    })

  })

})
