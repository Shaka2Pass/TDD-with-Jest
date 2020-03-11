const Validator = require('../starter-code/Validator.js');
//object will grab some entries (keys and value tuples) and make an array.
//we will then map through that array, 
module.exports = class Schema {
  constructor(schema) {
    this.schema = schema;
    this.validators = Object.entries(schema).map(([field, configuration]) => new Validator(field, configuration));

  }
  
  validate(obj) {
    //new Validator ('name, { type: string, required: true})
    const validated = {};
    this.validators.forEach(validator => {
      console.log('hey', validator);
      validated[validator.field] = validator.validate(obj);
    });
    return validated; 
  }

};



// const schema = {
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//   },
//   weight: {
//     type: String
//   }
// };



