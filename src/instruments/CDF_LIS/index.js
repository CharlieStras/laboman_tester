const fsPromises = require('fs').promises;
const path = require('path');
const signale = require('signale');

const { sampleID, order, path: rootPath } = require('./data');

function writeRetFile() {
  const orderContent = `${sampleID},${order}|`;
  const retPath = path.resolve(rootPath, 'ret.txt');

  fsPromises
    .writeFile(retPath, orderContent)
    .then(() => signale.success(`Write ret.txt. Content: {${orderContent}}`))
    .catch((err) => signale.fatal(err));
}

module.exports = { writeRetFile };
