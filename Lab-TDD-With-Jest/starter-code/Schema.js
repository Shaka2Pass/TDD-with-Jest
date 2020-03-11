const Validator = require('../starter-code/Validator.js');

const schema = {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
};


const validators = Object.entries(schema)
  .map(([field, configuration]) => new Validator(field, configuration));

const dog = {
  name: 1234,
  age: 5,
  weight: '20 lbs'
};

const validated = {};
validators.forEach(validator => {
  validated[validator.field] = validator.validate(dog);
});
console.log(validated);

  
 
// const validated = {};
// validators!forEach(validator => {
//     validator.validate(dog));
// })
