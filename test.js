/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var configumon = require('./index');

/**
 * Test
 */

describe('var locals = configumon()', function() {
  it('should return accessors', function() {
    var x = configumon({

      baseUrl: 'baba',

      get hello() {
        return this.baseUrl + ' baz'
      },

      get bar() {
        return 'foo'
      }
    })();

    x.hello.should.be.ok;
  });
});

describe('locals()', function() {
  it('should assert input types')
})
