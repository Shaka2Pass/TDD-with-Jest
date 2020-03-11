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

});




 
