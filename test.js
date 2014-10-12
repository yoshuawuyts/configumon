/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var configumon = require('./index');

/**
 * Test
 */

describe('var locals = configumon()', function() {
  it('should assert input types', function() {
    configumon.bind(configumon, 123)
      .should.throw('configumon: config should be an object');
  })

  it('should return accessors', function() {
    var x = configumon({

      baseUrl: 'baba',

      get hello() {
        return this.baseUrl + ' baz'
      }
    })();

    x.hello.should.be.ok;
  });
});

describe('locals()', function() {
  var locals = configumon({foo: 'bar', bin: 'baz'});

  it('should assert input types', function() {
    locals.bind(locals, 123)
      .should.throw('configumon: overrides should be an object')
  });

  it('should override defaults', function() {
    locals({foo: 'bin'}).foo.should.eql('bin');
  })
})
