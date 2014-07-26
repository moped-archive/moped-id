'use strict';

var assert = require('assert');
var MopedId = require('../');

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

console.log('tests passed');
