import { ordersArray } from './orders';
import { getRandomIntInclusive } from './getRandomIntInclusive';

export const makeInOrderEx = (
  orders: any,
  terms: number,
  digits: number = 1
) => {
  // console.log(orders.five);

  const exercise = makeOneDigitInTerm(orders.five, terms);
  const signs: any[] = [];
  exercise.forEach((el) => signs.push(el[0] === '-' ? '-' : ''));
  // console.log(signs);
  for (let i = 1; i < digits; i++) {
    // const ex = makeOneDigitInTerm(orders.five, terms, signs)
  }
  return exercise.map((el) => +el);
};

const makeOneDigitInTerm = (
  orders: any[],
  terms: number,
  signs: string[] = []
) => {
  const order = orders[getRandomIntInclusive(0, orders.length - 1)];
  const ordersWith5 = ordersArray.five.orders[order];
  const firstTerm =
    ordersWith5[getRandomIntInclusive(0, ordersWith5.length - 1)];
  let termDigits = [firstTerm, Number(order)];
  let sum = termDigits.reduce((a, b) => a + b, 0);
  if (terms > 1) {
    for (let i = 2; i < terms - 1; i++) {
      // eslint-disable-next-line no-loop-func
      const matchedOrders = orders.filter((order) =>
        ordersArray.five.orders[order].includes(sum)
      );
      let t; // Цифра в разряде числа
      if (!matchedOrders) {
        // если к предыдущему результату нет подходящего закона
        t =
          ordersArray.five.withoutOrders[sum][
            getRandomIntInclusive(
              1,
              ordersArray.five.withoutOrders[sum].length - 2
            )
          ];
        termDigits.push(t);
      } else {
        do {
          t = Number(orders[getRandomIntInclusive(0, orders.length - 1)]);
          console.log(sum, t);
        } while (sum + t > 9);
        termDigits.push(t);
      }
      sum += t;
    }
  }
  termDigits = termDigits.map((el) => el.toString());
  termDigits.push(sum.toString());
  // console.log(termDigits);

  return termDigits;
};
