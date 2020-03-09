const { 
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  castToNumber,
  castToString,
  castToBoolean,
} = require('./types.js');

console.log(isNumber('3'));
console.log(isString('Will'));
console.log(isBoolean('True'));
cosnsole.log(isArray)([]);
console.log(castToBoolean('True'));
