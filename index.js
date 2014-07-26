'use strict'

var machine = Math.floor(Math.random() * (16777216));
var pid = Math.floor(Math.random() * (32767));
var increment = 0;

module.exports = MopedId;
function MopedId(oid) {
  if (!(this instanceof MopedId)) return new MopedId(oid);
  var timestamp = Math.floor(new Date().valueOf() / 1000);
  if (typeof oid === 'string') {
    this.$oid = oid.toLowerCase();
  } else if (isMopedId(oid)) {
    this.$oid = oid.$oid.toLowerCase();
  } else {
    this.$oid = toString(timestamp.toString(16),
                         machine.toString(16),
                         pid.toString(16),
                         (increment++).toString(16));
  }

  if (typeof this.$oid !== 'string' || !/^[a-f0-9]{24}$/.test(this.$oid)) {
    throw new TypeError('If you provide a value for oid, it must be a string of 24 hex characters');
  }
}

MopedId.prototype.toString = function () {
  return this.$oid;
};

MopedId.isMopedId = isMopedId;
MopedId.isObjectId = isMopedId;
function isMopedId(obj) {
  return obj && typeof obj === 'object' &&
    typeof obj.$oid === 'string' && /^[A-Fa-f0-9]{24}$/.test(obj.$oid);
};

MopedId.equal = function (left, right) {
  if (typeof left === 'string' && typeof right === 'string') return left === right;
  if (isMopedId(left) && isMopedId(right)) {
    return left.$oid.toLowerCase() === right.$oid.toLowerCase();
  }
  if ((typeof left === 'string' || isMopedId(left)) && (typeof right === 'string' || isMopedId(right))) {
    return false;
  }
  throw new TypeError('MopedIds must be either objects of the form `{$obj: "string"}` or `"string"`.');
};

function toString(timestamp, machine, pid, increment) {
    return '00000000'.substr(0, 8 - timestamp.length) + timestamp +
           '000000'.substr(0, 6 - machine.length) + machine +
           '0000'.substr(0, 4 - pid.length) + pid +
           '000000'.substr(0, 6 - increment.length) + increment;
};

