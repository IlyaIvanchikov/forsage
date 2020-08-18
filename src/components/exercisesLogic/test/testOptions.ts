export const testOrders = {
  any: {
    five: ['Любой'],
    ten: ['Любой'],
  },
  without10: {
    five: ['Любой'],
    ten: [],
  },
  without5: {
    five: [],
    ten: ['Любой'],
  },
  without5n10: {
    five: [],
    ten: [],
  },
  withOrders: {
    five: ['+3', '-2', '-3'],
    ten: [],
  },
};
