export const doubleCrossExercises = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  let order;
  orders.forEach((el) => {
    if (el.length > 12) order = el;
  });
  console.log(order);
  return [12, 7];
};
