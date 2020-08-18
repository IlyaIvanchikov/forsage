import { ordersArray } from '../dataBaseExercises/orders';
import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

export const makeIn10Orders = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  orders = orders.map((el: string) => el.slice(0, 2));
  return [5, 2, -3];
};

export const makeInOrderEx = (
  orders: any,
  terms: number,
  digits: number = 1
) => {
  // console.log(orders.five);
  orders.five = orders.five.map((el: string) => el.slice(0, 2));
  orders.ten = orders.ten.map((el: string) => el.slice(0, 2));
  const signs: any[] = [];
  let exercise = makeOneDigitInTerm(orders.five, terms);
  exercise.forEach((el) => signs.push(el[0] === '-' ? '-' : '+'));
  if (digits > 1) {
    for (let i = 1; i < digits; i++) {
      const ex = makeOneDigitInTerm(orders.five, terms, signs);
      console.log(ex);

      exercise = exercise.map(
        (el, idx) => el + (ex[idx][0] === '-' ? ex[idx].slice(1) : ex[idx])
      );
    }
  }
  return exercise.map((el) => +el);
};

const makeOneDigitInTerm = (
  orders: any[],
  terms: number,
  signs: string[] = []
) => {
  let order;
  do {
    order = orders[getRandomIntInclusive(0, orders.length - 1)];
    console.log('wi', order, signs);
  } while (signs.length && order[0] !== signs[1][0]);
  const ordersWith5 = ordersArray.five.orders[order];
  const firstTerm =
    ordersWith5[getRandomIntInclusive(0, ordersWith5.length - 1)];
  let termDigits = [firstTerm, Number(order)];
  let sum = termDigits.reduce((a, b) => a + b, 0);
  if (terms > 1) {
    for (let i = 2; i < terms - 1; i++) {
      const matchedOrders = orders.filter(
        // eslint-disable-next-line no-loop-func
        (order) =>
          ordersArray.five.orders[order].includes(sum) &&
          signs[i][0] === order[0]
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
        termDigits.push(+t);
      } else {
        do {
          t = Number(orders[getRandomIntInclusive(0, orders.length - 1)]);
          console.log(sum, t);
        } while (sum + t > 9);
        termDigits.push(t);
      }
      sum += t;
      console.log(sum, t);
    }
  }
  termDigits = termDigits.map((el) => el.toString());
  termDigits.push(sum.toString());

  return termDigits;
};
