const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const decimal = nrml.decimal

describe('decimal', function() {

  describe('happy path', () => {

    it('should return decimal normalization for the given array, 2 places', () => {
      let decimalArr = decimal([35,36,46,68,70])
      decimalArr.should.exist
      decimalArr.should.be.an.Array
      decimalArr.should.eql([
        .35,
        .36,
        .46,
        .68,
        .70
      ])
    })

    it('should return decimal normalization for the given array, 3 places', () => {
      let decimalArr = decimal([135,36,446,568,70])
      decimalArr.should.exist
      decimalArr.should.be.an.Array
      decimalArr.should.eql([
        .135,
        .036,
        .446,
        .568,
        .07
      ])
    })

    it('should return decimal normalization for the given array, 3 places, with undefined in the array', () => {
      let decimalArr = decimal([135,36,446,undefined,568,70])
      decimalArr.should.exist
      decimalArr.should.be.an.Array
      decimalArr.should.eql([
        .135,
        .036,
        .446,
        .568,
        .07
      ])
    })

    it('should return decimal normalization for the given array, 3 places, with char in the array', () => {
      let decimalArr = decimal([135,36,446,'e',568,70])
      decimalArr.should.exist
      decimalArr.should.be.an.Array
      decimalArr.should.eql([
        .135,
        .036,
        .446,
        .568,
        .07
      ])
    })

  })


  describe('sad path', () => {

    it('should throw an error for non array', () => {
      (() => {
        decimal()
      }).should.throw('parameter a is not an Array')
    })

  })

})
