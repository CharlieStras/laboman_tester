const fsPromises = require('fs').promises;
const path = require('path');
const signale = require('signale');

const { sampleID, order } = require('./data');
const { rootPath } = require('../../config');

function writeRetFile() {
  const orderContent = `${sampleID},${order}|`;
  const retPath = path.resolve(rootPath, 'ret.txt');

  return fsPromises
    .writeFile(retPath, orderContent)
    .then(() => signale.success(orderContent))
    .catch((err) => signale.fatal(err));
}

module.exports = { writeRetFile };
