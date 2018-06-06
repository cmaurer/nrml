const assert = require('assert')
const should = require('should')
const filters = require('../../util/filters')

describe('filters', () => {

  describe('numericFilter', () => {

    it('should return an array of numbers with char in array', () => {
      let arr = [1,2,3,4,'c',5,6,7]
      let filteredArray = arr.filter(filters.numberFilter)
      filteredArray.should.be.an.Array
      filteredArray.should.eql([1,2,3,4,5,6,7])
    })

    it('should return an array of numbers with undefined in array', () => {
      let arr = [1,2,undefined,3,4,5,6,7]
      let filteredArray = arr.filter(filters.numberFilter)
      filteredArray.should.be.an.Array
      filteredArray.should.eql([1,2,3,4,5,6,7])
    })

  })

})
