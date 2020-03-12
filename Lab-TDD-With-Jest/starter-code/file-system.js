//promises means we will not have to use call backs and can use .then
const fs = require ('fs').promises;

fs.mkdir('./will/home/file/notes', { recursive: true });

const mkdirp = path => {
  return fs.mkdir(path, './will/home/file/notes', { recursive: true });
};

const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj));
};

module.exports = {
  mkdirp,
  writeJSON
};

