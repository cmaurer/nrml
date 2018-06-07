const assert = require('assert')
const should = require('should')
const reducers = require('../../util/reducers')

describe('reducers', () => {

  describe('maximumValue', () => {

    it('should return the maximumValue', () => {
      let arr = [1,2,-30,4,5,6,7]
      let mav = arr.reduce(reducers.maximumValue)
      mav.should.exist
      mav.should.be.a.Number
      mav.should.eql(7)
    })

  })

  describe('maximumAbsoluteValue', () => {

    it('should return the maximumAbsoluteValue', () => {
      let arr = [1,2,-30,4,5,6,7]
      let mav = arr.reduce(reducers.maximumAbsoluteValue)
      mav.should.exist
      mav.should.be.a.Number
      mav.should.eql(30)
    })

  })

  describe('minimumValue', () => {

    it('should return the minimumValue', () => {
      let arr = [1,2,-30,4,5,6,7]
      let mav = arr.reduce(reducers.minimumValue)
      mav.should.exist
      mav.should.be.a.Number
      mav.should.eql(-30)
    })

  })

  describe('sum', () => {

    it('should return the summed value for all numbers in an array', () => {
      let arr = [1,2,3,4,5,6,7]
      let mav = arr.reduce(reducers.sum)
      mav.should.exist
      mav.should.be.a.Number
      mav.should.eql(28)
    })

  })

})
