export const testOrders = {
  any: {
    five: ['Любой'],
    ten: ['Любой'],
  },
  without10: {
    five: ['Любой'],
    ten: [],
  },
  with10: {
    five: ['Любой'],
    ten: ['7', '6', '-6'],
  },
  without5: {
    five: [],
    ten: ['Любой'],
  },
  with10without5: {
    five: [],
    ten: ['7', '6', '-6'],
  },
  withoutAnyOrders: {
    five: [],
    ten: [],
  },
  with5: {
    five: ['2', '-2'],
    ten: ['Любой'],
  },
  with5without10: {
    five: ['2', '-2'],
    ten: [],
  },
  with10and5: {
    five: ['2', '-2'],
    ten: ['5', '7', '-7'],
  },
};
