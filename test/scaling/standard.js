const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const standard = nrml.standard

describe('standard', function() {

  describe('happy path', () => {

    it('should return standard normalization for the given array', () => {
      let standardArr = standard([35,36,46,68,70])
      standardArr.should.exist
      standardArr.should.be.an.Array
      standardArr.should.eql([
        -0.9411764705882353,
        -0.8823529411764706,
        -0.29411764705882354,
        1,
        1.1176470588235294
      ])

    })

  })


  describe('sad path', () => {

    it('should throw an error for non array', () => {
      (() => {
        standard()
      }).should.throw('parameter a is not an Array')
    })

  })

})
