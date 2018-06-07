const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const binary = nrml.binary


describe('binary', function() {

  describe('happy path', () => {

    it('should compute a binary array based on the supplied threshold', () => {
      let bin = binary([1, 2, 3, 4, 5, 6], 3)
      bin.should.exist
      bin.should.be.an.Array
      bin.should.eql([ 0, 0, 0, 1, 1, 1 ])
    })

  })

  describe('sad path', () => {

    it('should throw an error for non array', () => {
      (() => {
        binary()
      }).should.throw('parameter a is not an Array')
    })

  })

})
