import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

export const doubleCrossExercises = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  orders = orders.filter((el: string) => el.length > 12);
  const order = orders[getRandomIntInclusive(0, orders.length)];
  console.log(orders, order);
  return [12, 7];
};
