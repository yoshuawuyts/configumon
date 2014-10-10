/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Expose `Config()`.
 */

module.exports = locals;

/**
 * Create local config.
 *
 * @api public
 */

function locals(config) {
  assert.equal(typeof config, 'object', 'configumon: config should be an object');

  return function(overrides) {
    overrides = overrides || {};

    assert('object' == typeof overrides, 'configumon: overrides should be an object');

    Object.keys(overrides).forEach(function(key) {
      assert(config[key], 'configumon: configuration doesn\'t have property ' + key);
      config[key] = overrides[key];
    });

    return Object.create(config);
  }
}
