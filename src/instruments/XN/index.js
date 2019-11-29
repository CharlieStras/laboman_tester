const net = require('net');
const signale = require('signale');

const { host, xnPort: port } = require('../../config');
const {
  STX,
  ETX,
  CR,
  LF,
  convertString,
  formatDate,
  writAndLogMessage,
} = require('../../utils');
const {
  sampleID,
  rackID,
  positionNO,
  analyserNumber,
  result,
} = require('./data');

const paddedSampleID = sampleID.padStart(22, ' ');
const paddedRackID = rackID.padStart(6, '0');
const paddedPositionNO = positionNO.padStart(2, '0');

module.exports = { sendOrderQuery, sendResult };

function sendOrderQuery(inquiryTimingDistinctionCode) {
  const sendBuffer = [
    `${STX}R1000${paddedSampleID}00${paddedRackID}${paddedPositionNO}${inquiryTimingDistinctionCode}00000000000000000000000${ETX}`,
  ];

  connectAndSendData(sendBuffer);
}

function sendResult() {
  const date = formatDate(new Date());
  const {
    D1U,
    D2U,
    DBU,
    D3U,
    D4U,
    D1G,
    D2G,
    D3G,
    D4G,
    D7G,
    D5U,
    D6U,
    D7U,
    D5G,
    D6G,
    DSU,
  } = result;

  const sendBuffer = [
    `${STX}DI01021.00     XN-20^AE797961^${analyserNumber}0000000001${date}${paddedRackID}${paddedPositionNO}${paddedSampleID}${CR}${LF}`,
    `D1U0001950${D1U.map((x) => x.value).join('')}${CR}${LF}`,
    `D2U0001950${D2U.map((x) => x.value).join('')}${CR}${LF}`,
    `DBU0000960${DBU.map((x) => x.value).join('')}${CR}${LF}`,
    `D3U SERBC DISCRI${D3U.map((x) =>
      Array.isArray(x.value) ? x.value.join('') : x.value
    ).join('')}${CR}${LF}`,
    `D4U SEPLT DISCRI${D4U.map((x) =>
      Array.isArray(x.value) ? x.value.join('') : x.value
    ).join('')}${CR}${LF}`,
    `D1G SEWDF SCAT  ${D1G.map((x) => x.value).join('')}${CR}${LF}`,
    `D2G SEWNR SCAT  ${D2G.map((x) => x.value).join('')}${CR}${LF}`,
    `D3G SEWPC SCAT  ${D3G.map((x) => x.value).join('')}${CR}${LF}`,
    `D4G SERET SCAT  ${D4G.map((x) => x.value).join('')}${CR}${LF}`,
    `D7G SEPLT-F SCAT${D7G.map((x) => x.value).join('')}${ETX}`,
    `${STX}DR02021.00     XN-20^AE797961^${analyserNumber}0000000001${date}${paddedRackID}${paddedPositionNO}${paddedSampleID}${CR}${LF}`,
    `D5U0009950${D5U.map((x) => x.value).join('')}${CR}${LF}`,
    `D6U SERBCYDISCRI${D6U.map((x) =>
      Array.isArray(x.value) ? x.value.join('') : x.value
    ).join('')}${CR}${LF}`,
    `D7U SEWDFYDISCRI${D7U.map((x) =>
      Array.isArray(x.value) ? x.value.join('') : x.value
    ).join('')}${CR}${LF}`,
    `D5G SEPLT-O SCAT${D5G.map((x) => x.value).join('')}${CR}${LF}`,
    `D6G SERET-E SCAT${D6G.map((x) => x.value).join('')}${CR}${LF}`,
    `DSU0005970${DSU.map((x) => x.value).join('')}${ETX}`,
  ];

  connectAndSendData(sendBuffer);
}

function connectAndSendData(sendBuffer) {
  const client = net.connect({ port, host }, () => {
    signale.success(`Connected. Host: ${host}, Port: ${port}`);
    if (sendBuffer.length > 1) {
      while (sendBuffer.length) {
        writAndLogMessage(client, sendBuffer.shift());
      }
      client.end('', () => signale.success('Completed!'));
    } else {
      writAndLogMessage(client, sendBuffer.shift());
    }
  });

  client.on('data', (data) => {
    const dataStr = data.toString();
    signale.pending(`<-: ${convertString(dataStr)}`);

    if (dataStr.includes(`${STX}S2`)) {
      client.end('', () => signale.success('Completed!'));
    }
  });
}
