import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';
import sliceTerm from '../extraFunctions/sliceTerm';
import { ordersArray } from '../dataBaseExercises/orders';

const plus2 = (counter: number) => {
  let sum = 0;
  for (let i = 0; i < counter; i++) {
    sum += 2;
  }
  return sum;
};

const without5Orders = (digits: number, terms: number) => {
  const termsArray = [];
  const exampleDigits = ordersArray.five.exercises[0][0].toString().length;
  if (digits > exampleDigits) digits = exampleDigits;
  if (terms > 10) terms = 10;
  const line =
    ordersArray.five.exercises[
      getRandomIntInclusive(0, ordersArray.five.exercises.length - 1)
    ];
  let startPos = terms === 10 ? 0 : plus2(getRandomIntInclusive(0, 10 - terms));

  termsArray.push(sliceTerm(line[startPos], digits));
  for (let i = 0; i < terms - 1; i++) {
    termsArray.push(sliceTerm(line[startPos + 1 + i * 2], digits));
  }
  return termsArray;
};

export default without5Orders;
