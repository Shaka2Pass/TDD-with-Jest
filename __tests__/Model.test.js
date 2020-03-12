
// * `create`
// * `findById`
// * `find`
// * `findByIdAndUpdate`
// * `findByIdAndDelete`

const Schema = require('../Lab-TDD-With-Jest/starter-code/Schema');
const Model = require('../Lab-TDD-With-Jest/starter-code/Model');

//A model needs a schema to check against. The Schema defines the patter we expect. I.e. A name will be required and the input type will be a string. 
describe('Model class', () => {
  it('creates a new document', () => {
    const schema = new Schema({
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
    });
    //The Model will take a created dog and a schema. 
    const Dog = new Model('Dog', schema);
    //create a dog with .create 
    return Dog
      .create({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      })
      .then(dog => {
        expect(dog).toEqual({
          _id: expect.any(String),
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });

  it('finds by id and updates', () => {
    const schema = new Schema({
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
    });

    const Dog = new Model('Dog', schema);

    return Dog
      .create({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      })
      .then(dog => {
        return Dog
          .findByIdAndUpdate(dog._id, { name: 'rover' });
      })
      .then(updatedDog => {
        expect(updatedDog).toEqual({
          _id: expect.any(String),
          name: 'rover',
          age: 5,
          weight: '20 lbs'
        });
      });
  });

  it('finds by id', () => {
    const schema = new Schema({
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
    });

    const Dog = new Model('Dog', schema);

    return Dog
      .create({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      })
      .then(dog => {
        return Dog
          .findById(dog._id);
      })
      .then(foundDog => {
        expect(foundDog).toEqual({
          _id: expect.any(String),
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
  
  it('deletes dog', () => {
    const schema = new Schema({
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
    });

    const Dog = new Model('Dog', schema);
    //delete will expect to see the dog i.e. point to the dog that you created. 
    return Dog
      .create({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      })
      .then(dog => {
        return Dog
          .findByIdAndDelete(dog._id);
      })
      .then(foundDog => {
        expect(foundDog).toEqual({
          _id: expect.any(String),
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
});


