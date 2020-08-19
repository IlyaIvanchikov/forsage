import { makeExercises } from '../makeExercises';
import { testOrders } from './testOptions';
import { ordersArray } from '../dataBaseExercises/orders';

export const testOrdersFunc = () => {
  // Data
  const d = 1; // digits
  const t = 7; // terms
  //Data
  const ex = makeExercises(d, t, testOrders.withOrders);
  console.log('Exercises test', ex);
  let sum = ex[0];
  for (let i = 1; i < ex.length - 1; i++) {
    checkOrders(sum, ex[i]);
    sum += ex[i];
  }
};

const checkOrders = (firstTerm: number, secondTerm: number) => {
  console.log('Проверяем', firstTerm, secondTerm);
  const first = firstTerm.toString();
  let second = secondTerm.toString();
  let plus = 1;
  if (second[0] === '-') {
    second = second.slice(1);
    plus = -1;
  }
  if (first.length - second.length === 1) second = '0' + second;
  for (let i = first.length - 1; i >= 0; i--) {
    const one = Number(first[i]);
    const two = Number(second[i]) * plus;
    let sum = one + two;
    if (sum < 0) {
      sum = Number('1' + first[i]) + two;
      console.log('Закон на 10 минус', one, two);
    } else {
      if (sum > 9) console.log('Закон на 10 плюс', one, two);
    }
    console.log('one:', one)
    if (!ordersArray.five.withoutOrders[one].includes(two) && Math.abs(two) < 5)
      console.log('Закон на 5', one, two);
  }
};
