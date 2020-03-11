//very general should test for anything
const { getCaster } = require('./types');

//Validators take two properties.
//field which is the field we are going to validate within the object.
//And the configuration which is the object we are validating. 
module.exports = class Validator {
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  } 

  validate(obj) {
    if(this.configuration.required && !(this.field in obj)) {
      throw new Error(`Missing required field >>${this.field}<<`);
    }
    //configuration is not required and no field throw error.
    if(!this.configuration.required && !(this.field in obj)){
      return null;
    }
    //this.field is what we are trying to cast in toEqual in our VTest.js
    const variable = getCaster(this.configuration.type);
    return variable(obj[this.field]);
  }
};
