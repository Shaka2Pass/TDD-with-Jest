const { 
  isNumber,
  isString,
  isBoolean,
  isArray,
  // isFunction,
  // isObject,
  // castToNumber,
  // castToString,
  castToBoolean,
} = require('./types.js');

console.log(isNumber('3'));
console.log(isString('Will'));
console.log(isBoolean('True'));
console.log(isArray([]));
console.log(castToBoolean(true));
