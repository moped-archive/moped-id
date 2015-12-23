# moped-id

ID generation and comparison for moped.  MopedIds are also MongoDB ids, so you can also use this module as a convenient method for handling/generating MongoDB ids on the client (using browserify).

[![Build Status](https://img.shields.io/travis/mopedjs/moped-id/master.svg)](https://travis-ci.org/mopedjs/moped-id)
[![Dependency Status](https://img.shields.io/david/mopedjs/moped-id.svg)](https://david-dm.org/mopedjs/moped-id)
[![NPM version](https://img.shields.io/npm/v/moped-id.svg)](https://www.npmjs.org/package/moped-id)

## Installation

    npm install moped-id

## Usage

```js
var MopedId = require('moped-id');

// generate a new random moped-id
var id = new MopedId();

// construct a moped-id from a string
var idFromString = new MopedId('ffffffffff00000000000000');

// construct a moped-id from json object
var idFromObject = new MopedId({$oid: 'ffffffffff00000000000000'});

assert(MopedId.isMopedId(id) === true);
assert(MopedId.isMopedId(idFromString) === true);
assert(MopedId.isMopedId(idFromObject) === true);

assert(MopedId.isObjectId(id) === true);
assert(MopedId.isObjectId(idFromString) === true);
assert(MopedId.isObjectId(idFromObject) === true);

assert(MopedId.equal(idFromString, idFromObject) === true);
assert(MopedId.equal(id, idFromString) === false);
assert(MopedId.equal(id, 'foobar') === false);
assert(MopedId.equal('foobar', 'foobar') === true);
```

## License

  MIT
