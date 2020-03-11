const Validator = require('../Lab-TDD-With-Jest/starter-code/Validator');

describe('Validator', () => {
  let nameValidator;

  beforeEach(() => {
    nameValidator = new Validator('name', {
      type: String,
      required: true
    });
  });

  it('has a field and configuration property', () => {
    expect(nameValidator.field).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
  });

  it('can validate an object with the proper type', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    expect(nameValidator.validate(dog)).toEqual('spot');
  });

  it('can validate an object missing field', () => {
    const dog = {
      age: 5,
      weight: '20 lbs'
    };

    expect(() => nameValidator.validate(dog)).toThrowError();
  });

  it('can validate an object, field there, wrong type', () => {
    const dog = {
      name: ({}),
      age: 5,
      weight: '20 lbs'
    };

    expect(() => nameValidator.validate(dog)).toThrowError();
  });

  it('not required and field missing', () => {
    const dog = {
      age: 5,
      weight: '20 lbs',
      height: 15
    };

    expect(() => nameValidator.validate(dog)).toThrowError();
  });

  it('not required and field missing', () => {
    const dog = {
      name: ({}),
      age: 5,
      weight: '20 lbs',
      height: '15 ft',
    };

    expect(() => nameValidator.validate(dog)).toThrowError();
  });

});




 
