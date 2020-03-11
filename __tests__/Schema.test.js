const schema = require ('../Lab-TDD-With-Jest/starter-code/Schema.js');

describe('Schema', () => {
  it('can validate an object', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    expect(schema.validated(dog)).toEqual((dog));
  });
});
