import { ordersArray } from '../dataBaseExercises/orders';
import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

export const makeIn10Orders = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  orders = orders.map((el: string) =>
    el[0] !== '-' ? '+' + el.slice(0, 1) : el.slice(0, 2)
  );
  const order = randomFromArray(orders);
  const orders10 = ordersArray.ten;
  let firstTerm = randomFromArray(orders10[order]);
  if (order[0] === '-') firstTerm += 10;
  const arrOfTerms = [firstTerm, Number(order)];
  let sum = arrOfTerms[0] + arrOfTerms[1];
  if (terms > 2) {
    let term;
    for (let i = 2; i < terms; i++) {
      const sum1 = sum > 9 ? sum - 10 : sum;
      let matchedOrders = findMatchedOrers(orders, orders10, sum1);
      matchedOrders =
        sum > 9
          ? matchedOrders.filter((el) => el[0] === '-')
          : matchedOrders.filter((el) => el[0] === '+');
      console.log(matchedOrders);
      if (matchedOrders.length) {
        const order = randomFromArray(matchedOrders);
        term = Number(order);
        console.log('ordered', term, order, matchedOrders);
      } else {
        // sum = arrOfTerms.reduce((a, b) => a + b, 0)
        term = getRandomIntInclusive(1, 9);
        if (sum > 9) term *= -1;
        console.log('random', term);
      }

      sum += term;
      arrOfTerms.push(term);
    }
  }
  return arrOfTerms;
};

const randomFromArray = (arr: any[]) =>
  arr[getRandomIntInclusive(0, arr.length - 1)];

const findMatchedOrers = (
  orders: any[],
  exampleOrders: any,
  thingToFind: any
) => {
  return orders.filter(
    // eslint-disable-next-line no-loop-func
    (el) => exampleOrders[el].includes(thingToFind)
  );
};
