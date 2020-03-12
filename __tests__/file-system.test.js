const fs = require ('fs').promises;

const {
  mkdirp,
} = require('../Lab-TDD-With-Jest/starter-code/file-system');

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
  }
}));

describe('ensure file system works', () => {
  it('makes directory and all parent directories', () => {
    return mkdirp('./will/home/file/notes')
      .then(() => {
        expect(fs.mkdir)
          .toHaveBeenCalledWith('./will/home/file/notes', { recursive: true });
      });
  });
});

// it('writes an object to a file', () => {
//   const dog = {
//     name: 'spot',
//     age: 5, 
//     weight: '20 lbs'
//   };
// });




//instead of grabbing require('fs').promises grab the jest mock fs. All promises will be done in one block. WE are faking making the directory. So we will want to make sure that we called the fs.mkdir function with the correct path
//i.e. './my/cool/directory/path' and { recursinve: true}

// we call our mkdir function 


