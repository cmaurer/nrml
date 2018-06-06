const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const diff = nrml.diff

describe('diff', () => {

  describe('happy path', () => {

    it('should diff array', () => {
      let _diff = diff([2, 4, 6, 8, 10], 2)
      _diff.should.exist
      _diff.should.be.an.Array
      _diff.should.eql([0, 2, 4, 6, 8])
    })

  })

  describe('sad path', () => {

    it('should throw error for non array', () => {
      (() => {
        diff()
      }).should.throw('parameter is not an Array')
    })

  })

})
