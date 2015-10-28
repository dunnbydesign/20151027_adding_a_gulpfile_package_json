/* globals describe, it */

var expect = require('chai').expect
var greet = require('../greet').greet

describe('the greet method', function () {
  it('should return a personalized greeting', function (done) {
    expect(greet('jeff')).to.equal('hello jeff')
    done()
  })
})
