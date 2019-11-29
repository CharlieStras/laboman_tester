const net = require('net');
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
  writAndLogMessage,
} = require('../../utils');
const { sampleID, rackID, positionNO } = require('./data');

const paddedSampleID = sampleID.padStart(22, ' ');
const paddedRackID = rackID.padStart(6, '0');
const paddedPositionNO = positionNO.padStart(2, '0');

module.exports = {
  sendOrderQuery,
};

function sendOrderQuery(inqueryType, userFieldNO2) {
  const date = formatDate(new Date());
  const sendBuffer = addChecksum([
    `${ENQ}`,
    `${STX}1H|\\^&|||CT-90^00-01^11001^^^^12345678||||||||E1394-97|${date}${CR}${ETX}`,
    `${STX}2Q|1|${paddedRackID}^${paddedPositionNO}^${paddedSampleID}^B||||${date}||||${inqueryType}|${userFieldNO2}|${CR}${ETX}`,
    `${STX}3L|1|N${CR}${ETX}`,
    `${EOT}`,
  ]);

  connectAndSendData(sendBuffer);
}

function connectAndSendData(sendBuffer) {
  const client = net.connect({ port, host }, () => {
    signale.success(`Connected. Host: ${host}, Port: ${port}`);
    writAndLogMessage(client, sendBuffer.shift());
  });

  client.on('data', (data) => {
    const dataStr = data.toString();
    signale.pending(`<-: ${convertString(dataStr)}`);

    if (dataStr == ACK) {
      if (sendBuffer.length) {
        writAndLogMessage(client, sendBuffer.shift());
      }
    } else if (dataStr != EOT) {
      writAndLogMessage(client, ACK);
    } else {
      client.end();
      signale.success('Completed!');
    }
  });
}
