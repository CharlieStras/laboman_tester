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

(async () => {
  const question = {
    type: 'autocomplete',
    name: 'action',
    message: 'Choose your action',
    choices: [
      { title: 'CDF_LIS: Write ret.txt', value: CDF_LIS_WRITE_RET_ORDER },
      {
        title: 'CT_90: Send SI order query',
        value: CT_90_SI_ORDER_QUERY,
      },
      {
        title: 'CT_90: Send SO order query',
        value: CT_90_SO_ORDER_QUERY,
      },
      {
        title: 'CT_90: Send C order query',
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
    ],
  };

  const response = await prompts(question);

  switch (response.action) {
    case CDF_LIS_WRITE_RET_ORDER:
      writeRetFile();
      break;
    case CT_90_SI_ORDER_QUERY:
      sendOrderQuery('SI', '1^1');
      break;
    case CT_90_SO_ORDER_QUERY:
      sendOrderQuery('SO', '1^1');
      break;
    case CT_90_C_ORDER_QUERY:
      sendOrderQuery('C', '1^1');
      break;
    case XN_FIRST_ORDER_QUERY:
      xnSendOrderQuery('1');
      break;
    case XN_SECOND_ORDER_QUERY:
      xnSendOrderQuery('2');
      break;
    case XN_RESULT:
      xnSendResult();
      break;
    default:
      break;
  }
})();
