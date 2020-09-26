import { ordersArray } from '../dataBaseExercises/orders';
import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

const makeOneDigitInTerm = (
  orders: any[],
  terms: number,
  signs: string[] = []
) => {
  const ordersWith5 = ordersArray.five.orders;
  let order: string;
  do {
    order = orders[getRandomIntInclusive(0, orders.length - 1)];
  } while (signs.length && order[0] !== signs[1][0]);
  const firstTerm =
    ordersWith5[order][getRandomIntInclusive(0, ordersWith5[order].length - 1)];
  let termDigits = [firstTerm, Number(order)];
  let sum = termDigits.reduce((a, b) => a + b, 0);
  if (terms > 2) {
    // если слагаемых больше 2х
    for (let i = 2; i < terms; i++) {
      let matchedOrders = orders.filter(
        // eslint-disable-next-line no-loop-func
        (order) => ordersWith5[order].includes(sum)
      );
      if (signs.length)
        matchedOrders = matchedOrders.filter(
          (order) => order[0] === signs[i][0]
        );
      const matchedOrder = matchedOrders.length
        ? matchedOrders[getRandomIntInclusive(0, matchedOrders.length - 1)]
        : 0;
      let t;
      if (matchedOrders.length) {
        t = matchedOrder;
      } else {
        t = ordersArray.five.withoutOrders[sum][getRandomIntInclusive(1, 5)];
      }
      termDigits.push(t);
      sum += +t;
    }
  }
  termDigits = termDigits.map((el) => el.toString());
  return termDigits;
};
export default makeOneDigitInTerm;
