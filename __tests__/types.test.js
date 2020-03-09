const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  castToNumber,
  getCaster,
} = require('../Lab/starter-code/types.js');

// Run is Test
describe('basic validation', () => {
  it('properly tells if a value is a numbers', () => {
    expect(isNumber(3)).toBeTruthy();
    expect(isNumber('will')).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
    expect(isNumber(() => {})).toBeFalsy();
    expect(isNumber(true)).toBeFalsy();
  });
});

describe('string validation', () => {
  it('properly tells if a value is a string', () => {
    expect(isString('WILL')).toBeTruthy();
    expect(isString(7)).toBeFalsy();
  });
});

describe('boolean validation', () => {
  it('properly tells if a value is a boolean', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(6)).toBeFalsy();
  });
}); 

describe('array validation', () => {
  it('properly tells if a value is a array', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray('Will')).toBeFalsy();
    expect(isArray(6)).toBeFalsy();
    expect(isArray({})).toBeFalsy();
  });
}); 

describe('object validation', () => {
  it('properly tells if a values is an object', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray('Will')).toBeFalsy();
    expect(isArray(6)).toBeFalsy();
    expect(isArray({})).toBeFalsy();
  });
}); 
  
describe('casters', () => {
  it('can cast values to a number', () => {
    expect(castToNumber(3)).toEqual(3);
    expect(castToNumber('3')).toEqual(3);
    expect(castToNumber(true)).toEqual(1);
    expect(castToNumber(false)).toEqual(0);
  });
  
  it('throws if value is not castable to number', () => {
    expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
    expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
  });
    
  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});