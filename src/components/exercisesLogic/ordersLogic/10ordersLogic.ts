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
  const order = orders[getRandomIntInclusive(0, orders.length - 1)];
  const orders10 = ordersArray.ten;
  let firstTerm =
    orders10[order][getRandomIntInclusive(0, orders10[order].length - 1)];
  if (order[0] === '-') firstTerm += 10;
  const arrOfTerms = [firstTerm, Number(order)];
  console.log(order);
  return arrOfTerms;
};
