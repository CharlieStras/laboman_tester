const signale = require('signale');

const { host, ct90Port: port } = require('../../config');
const {
  ENQ,
  STX,
  ETX,
  CR,
  EOT,
  ACK,
  convertString,
  addChecksum,
  formatDate,
  writeAndLogMessage,
  customSignale,
  netConnectPromise,
} = require('../../utils');
const { sampleID, rackID, positionNO } = require('./data');

const paddedSampleID = sampleID.padStart(22, ' ');
const paddedRackID = rackID.padStart(6, '0');
const paddedPositionNO = positionNO.padStart(2, '0');

module.exports = {
  sendOrderQuery,
};

async function sendOrderQuery(inqueryType, userFieldNO2) {
  const date = formatDate(new Date());
  const sendBuffer = addChecksum([
    `${ENQ}`,
    `${STX}1H|\\^&|||CT-90^00-01^11001^^^^12345678||||||||E1394-97|${date}${CR}${ETX}`,
    `${STX}2Q|1|${paddedRackID}^${paddedPositionNO}^${paddedSampleID}^B||||${date}||||${inqueryType}|${userFieldNO2}|${CR}${ETX}`,
    `${STX}3L|1|N${CR}${ETX}`,
    `${EOT}`,
  ]);

  await connectAndSendData(sendBuffer);
}

async function connectAndSendData(sendBuffer) {
  return netConnectPromise({ port, host })
    .then((client) => {
      signale.success(`Connected. Host: ${host}, Port: ${port}`);
      return client;
    })
    .then((client) => {
      writeAndLogMessage(client, sendBuffer.shift());
      return onEventPromise(client, 'data');
    })
    .catch((err) => {
      if (err.errno == 'ENOTFOUND') {
        signale.fatal(
          `Please make sure the host IP address is ${err.hostname}`
        );
      } else if (err.message == 'connect timeout') {
        signale.fatal(
          `Connection timed out! Please make sure receiver is running and listening to port ${port}`
        );
      } else {
        console.dir(err);
      }
    });

  function onEventPromise(client, event) {
    return new Promise((resolve) =>
      client.on(event, (data) => {
        const dataStr = data.toString();
        customSignale.receive(`${convertString(dataStr)}`);

        if (dataStr == ACK) {
          if (sendBuffer.length) {
            writeAndLogMessage(client, sendBuffer.shift());
          }
        } else if (dataStr != EOT) {
          writeAndLogMessage(client, ACK);
        } else {
          client.end('', () => {
            signale.success('Completed!');
            resolve();
          });
        }
      })
    );
  }
}
