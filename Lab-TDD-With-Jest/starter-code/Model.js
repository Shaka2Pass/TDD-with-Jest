const path = require('path');
const uuid = require('uuid/v4');
const {
  mkdirp,
  writeJSON,
  readDirectoryJSON,
  readJSON,
  updateJSON,
  deleteFile
} = require('./file-system');

//our 
module.exports = class Model {
  constructor(modelName, schema) {
    this.modelName = modelName;
    this.schema = schema;
    mkdirp(this.modelName);
  }

  create(obj) {
    const _id = uuid();
    const validated = this.schema.validate(obj);
    return writeJSON(`${this.modelName}/${_id}`, { ...validated, _id });
  }

  findByIdAndUpdate(id, patchObj) {
    return updateJSON(`${this.modelName}/${id}`, patchObj);
  }
  //findById is what we are test. 
  findById(id) {
    return readJSON(`${this.modelName}/${id}`);
  }
  //findByIDAndDelete is what we are testing.
  findByIdAndDelete(id) {
    return deleteFile(`${this.modelName}/${id}`);
  }






};
