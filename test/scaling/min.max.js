const assert = require('assert')
const should = require('should')
const nrml = require('../../index')
const minmax = nrml.minmax


describe('minmax', function() {

  describe('happy path', () => {

    it('should find min and max for array with numbers example 1', () => {
      let minMax = minmax([1, 2, 3, 4, 5, 6])
      minMax.should.exist
      minMax.should.be.an.Array
      minMax.should.eql([ 0, 0.2, 0.4, 0.6, 0.8, 1 ])
    })


    it('should find min and max for array with numbers example 2', () => {
      let minMax = minmax([10, 9, 8, 7, 6, 5])
      minMax.should.exist
      minMax.should.be.an.Array
      minMax.should.eql([ 1, 0.8, 0.6, 0.4, 0.2, 0 ])
    })

    it('should find min and max for array with at least one element non numeric', () => {
      let minMax = minmax([10, 9, 8, 7, 'a', 6, 5])
      minMax.should.exist
      minMax.should.be.an.Array
      minMax.should.eql([ 1, 0.8, 0.6, 0.4, 0.2, 0 ])
    })

    it('should return min and max with supplied range', () => {
      let minMax = minmax([-4, 0, 5, 6, 9], [0, 100])
      minMax.should.exist
      minMax.should.be.an.Array
      minMax.should.eql([0, 30.7692, 69.2308, 76.9231, 100])
    })

    it('should return min and max with supplied reversed range', () => {
      let minMax = minmax([-4, 0, 5, 6, 9], [100, 0])
      minMax.should.exist
      minMax.should.be.an.Array
      minMax.should.eql([0, 30.7692, 69.2308, 76.9231, 100])
    })

  })

  describe('sad path', () => {

    it('should throw an error for non array', () => {
      (() => {
        minmax()
      }).should.throw('parameter a is not an Array')
    })

  })

})
