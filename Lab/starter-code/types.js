//Is Functions
const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isArray = val => Array.isArray(val);
const isObject = val => Object.isObject(val);

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

const castToString = val => {
  if(isString(val)) return val;
  const string = String(val);
  if((!string)) throw new CastError(String, val);
  return string;
};

const castToBoolean = val => {
  if(isBoolean(val)) return val;
  const boolean = Boolean(val);
  if((!boolean)) throw new CastError(Number, val);
  return boolean;
};

const castToArray = val => {
  if(isArray(val)) return val;
  const array = Array(val);
  if((!array)) throw new CastError(Array, val);
  return array;
};

const castToObject = val => {
  if(isObject(val)) return val;
  const array = Array(val);
  if((!array)) throw new CastError(Array, val);
  return array;
};



class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString,
  Boolean: castToBoolean,
  Array: castToArray,
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean,
};
