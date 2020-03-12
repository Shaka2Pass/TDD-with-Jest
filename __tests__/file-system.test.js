const fs = require ('fs').promises;

const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON
} = require('../Lab-TDD-With-Jest/starter-code/file-system');

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(()=>Promise.resolve()),
    readFile: jest.fn(()=>Promise.resolve('{"name":"bob"}')),
    readdir: jest.fn(()=>Promise.resolve(['test.json', 'test2.json'])),
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

it('writes an object to a file', () => {
  const dog = {
    name: 'bob',
    age: 5, 
    weight: '20 lbs'
  };
  //
  return writeJSON('./test.json', dog)
    .then(() => {
      expect(fs.writeFile)
        .toHaveBeenCalledWith('./test.json', JSON.stringify(dog));
    });
});

it('reads an object of json', () => {
  return readJSON('./test.json')
    .then(data => {
      expect(fs.readFile)
        .toHaveBeenCalledWith('./test.json');
      expect(data).toEqual({
        name: 'bob'
      });
    });
});

it('reads a directory of json', () => {
  return readDirectoryJSON('./data')
    .then(data => {
      expect(fs.readdir)
        .toHaveBeenLastCalledWith('./data');
      expect(fs.readFile)
        .toHaveBeenCalledWith('./data/test.json');
      expect(fs.readFile)
        .toHaveBeenCalledWith('./data/test2.json');
      expect(data).toEqual([
        { name: 'bob' },
        { name: 'bob' }
      ]);
    });
});






//instead of grabbing require('fs').promises grab the jest mock fs. All promises will be done in one block. WE are faking making the directory. So we will want to make sure that we called the fs.mkdir function with the correct path
//i.e. './my/cool/directory/path' and { recursinve: true}

// we call our mkdir function 


