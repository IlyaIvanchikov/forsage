import { makeExercises } from './makeExercises';
import { testOrders } from './testOptions';

export function viewOrders() {
  const digits = 1,
    terms = 5;
  const { max, min } = minMax(digits);
  const ex = makeExercises(digits, terms, testOrders.any);
  console.log(ex);
  let sum = 0;
  for (let index = 0; index < ex.length - 1; index++) {
    checkOrders(sum, ex[index]);
    sum += ex[index];
    if (sum > max || sum < min) {
      console.log('выход за границу');
      return;
    }
  }
}

const checkOrders = (firstTerm: number, secondTerm: number) => {
  console.log('Проверяем', firstTerm, secondTerm);
  const first = firstTerm.toString();
  let second = secondTerm.toString();
  let plus = 1;
  if (second[0] === '-') {
    second = second.slice(1);
    plus = -1;
  }
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
    if (sum >= 0 && two < 5 && ((one < 5 && sum >= 5) || (one >= 5 && sum < 5)))
      console.log('Закон на 5', one, two);
  }
};

const minMax = (num: number) => ({
  max: Math.pow(10, num) - 1,
  min: Math.pow(10, num - 1),
});
