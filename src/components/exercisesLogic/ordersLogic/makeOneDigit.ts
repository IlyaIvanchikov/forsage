import { ordersArray } from '../dataBaseExercises/orders';
import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

const makeOneDigitInTerm = (
    orders: any[],
    terms: number,
    signs: string[] = []
  ) => {
    let order;
    do {
      order = orders[getRandomIntInclusive(0, orders.length - 1)];
    } while (signs.length && order[0] !== signs[1][0]);
    const ordersWith5 = ordersArray.five.orders[order];
    const firstTerm =
      ordersWith5[getRandomIntInclusive(0, ordersWith5.length - 1)];
    let termDigits = [firstTerm, Number(order)];
    let sum = termDigits.reduce((a, b) => a + b, 0);
    if (terms > 2) {
      // если слагаемых больше 2х
      for (let i = 2; i < terms; i++) {
        const matchedOrders = orders.filter(
          // eslint-disable-next-line no-loop-func
          (order) => ordersArray.five.orders[order].includes(sum)
        );
        const matchedOrder =
          matchedOrders[getRandomIntInclusive(0, matchedOrders.length - 1)];
        const t =
          ordersArray.five.orders[matchedOrder][
            getRandomIntInclusive(
              0,
              ordersArray.five.orders[matchedOrder].length - 1
            )
          ];
        termDigits.push(t);
      }
    }
    termDigits = termDigits.map((el) => el.toString());
    // termDigits.push(sum.toString());
  
    return termDigits;
  };
export default makeOneDigitInTerm;