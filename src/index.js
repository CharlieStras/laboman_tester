const prompts = require('prompts');

const { writeRetFile } = require('./instruments/CDF_LIS/index');
const { sendOrderQuery } = require('./instruments/CT_90/index');
const {
  sendOrderQuery: xnSendOrderQuery,
  sendResult: xnSendResult,
} = require('./instruments/XN/index');

const CDF_LIS_WRITE_RET_ORDER = 'cdf_lis_ret_order';
const CT_90_SI_ORDER_QUERY = 'ct_90_si_order_query';
const CT_90_SO_ORDER_QUERY = 'ct_90_so_order_query';
const CT_90_C_ORDER_QUERY = 'ct_90_c_order_query';
const XN_FIRST_ORDER_QUERY = 'xn_first_order_query';
const XN_SECOND_ORDER_QUERY = 'xn_second_order_query';
const XN_RESULT = 'xn_result';
const QUIT = 'quit';

async function prompt() {
  console.log('');
  console.log('', '='.repeat(80));
  const question = {
    type: 'autocomplete',
    name: 'action',
    message: 'Action',
    choices: [
      { title: 'CDF_LIS: Write ret.txt', value: CDF_LIS_WRITE_RET_ORDER },
      {
        title: 'CT-90(with TS-10): Send SI order query',
        value: CT_90_SI_ORDER_QUERY,
      },
      {
        title: 'CT-90(with TS-10): Send SO order query',
        value: CT_90_SO_ORDER_QUERY,
      },
      {
        title: 'CT-90(with TS-10): Send C order query',
        value: CT_90_C_ORDER_QUERY,
      },
      {
        title: 'XN: Send first order query',
        value: XN_FIRST_ORDER_QUERY,
      },
      {
        title: 'XN: Send second order query',
        value: XN_SECOND_ORDER_QUERY,
      },
      {
        title: 'XN: Send result',
        value: XN_RESULT,
      },
      {
        title: 'QUIT',
        value: QUIT,
      },
    ],
  };

  const response = await prompts(question);

  switch (response.action) {
    case CDF_LIS_WRITE_RET_ORDER:
      await writeRetFile();
      break;
    case CT_90_SI_ORDER_QUERY:
      await sendOrderQuery('SI', '1^1');
      break;
    case CT_90_SO_ORDER_QUERY:
      await sendOrderQuery('SO', '1^1');
      break;
    case CT_90_C_ORDER_QUERY:
      await sendOrderQuery('C', '1^1');
      break;
    case XN_FIRST_ORDER_QUERY:
      await xnSendOrderQuery('1');
      break;
    case XN_SECOND_ORDER_QUERY:
      await xnSendOrderQuery('2');
      break;
    case XN_RESULT:
      await xnSendResult();
      break;
    case QUIT:
      return;
    default:
      break;
  }

  await prompt();
}

prompt();
