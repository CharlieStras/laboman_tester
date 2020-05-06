const { Signale } = require('signale');

const options = {
  disabled: false,
  interactive: false,
  logLevel: 'info',
  secrets: [],
  stream: process.stdout,
  types: {
    send: {
      badge: '▶️',
      color: 'blue',
      label: 'send',
      logLevel: 'info',
    },
    receive: {
      badge: '◀️',
      color: 'cyan',
      label: 'receive',
      logLevel: 'info',
    },
  },
};

const customSignale = new Signale(options);

const ENQ = '\x05';
const STX = '\x02';
const ETX = '\x03';
const CR = '\x0D';
const LF = '\x0A';
const EOT = '\x04';
const ACK = '\x06';

module.exports = {
  ENQ,
  STX,
  ETX,
  CR,
  LF,
  EOT,
  ACK,
  convertString,
  addChecksum,
  formatDate,
  writAndLogMessage,
  customSignale,
};

function convertString(str) {
  var result = '';

  for (let c of str) {
    switch (c) {
      case ACK:
        c = '<ACK>';
        break;
      case ENQ:
        c = '<ENQ>';
        break;
      case STX:
        c = '<STX>';
        break;
      case ETX:
        c = '<ETX>';
        break;
      case EOT:
        c = '<EOT>';
        break;
      case CR:
        c = '<CR>';
        break;
      case LF:
        c = '<LF>';
        break;
      default:
        break;
    }
    result += c;
  }

  return result;
}

function calculateChecksum(source = '') {
  const charArray = source.split('');
  const charCodeSum = charArray.reduce((a, b) => a + b.charCodeAt(0), 0);
  const checkSum = charCodeSum
    .toString(16)
    .slice(-2)
    .toUpperCase()
    .padStart(2, '0');

  return checkSum;
}

function addChecksum(buffer) {
  return buffer.map((message) => {
    if (!message.includes(STX)) {
      return message;
    }

    const checksum = calculateChecksum(message.slice(1));
    return `${message}${checksum}${CR}${LF}`;
  });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = ('' + (date.getMonth() + 1)).padStart(2, '0');
  const day = ('' + date.getDate()).padStart(2, '0');
  const hour = ('' + date.getHours()).padStart(2, '0');
  const minute = ('' + date.getMinutes()).padStart(2, '0');
  const second = ('' + date.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}${hour}${minute}${second}`;
}

function writAndLogMessage(client, message) {
  client.write(Buffer.from(message), () => {
    customSignale.send(`${convertString(message)}`);
  });
}
