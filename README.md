# configumon
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Composable configuration files with optional environment-specific overrides,
not a Digimon.
## Installation
```bash
npm install configumon
```

## Usage
```js
var locals = require('configumon');

var config = {
  urlBase: 'http://mysite.com',

  get urlApi() {
    this.urlBase + '/api/v2/'
  }
};

var overrides = 'development' == process.env.NODE_ENV
  ? {urlBase: 'localhost:3000'}
  : null;

module.exports = configumon(config)(overrides);
```

## API
```js

```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/configumon.svg?style=flat-square
[npm-url]: https://npmjs.org/package/configumon
[travis-image]: https://img.shields.io/travis/yoshuawuyts/configumon.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/configumon
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/configumon.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/configumon?branch=master
[downloads-image]: http://img.shields.io/npm/dm/configumon.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/configumon
