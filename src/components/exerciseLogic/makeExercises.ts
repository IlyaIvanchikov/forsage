import {
  makeFirstTerm,
  makeNextTerm,
  // makeNextTermWithout10orders,
  answer,
} from './generateTerms';
import { ordersArray } from './orders';
import { getRandomIntInclusive } from './getRandomIntInclusive';

export function makeExercises(dig: number, terms: number, orders: any): any {
  console.log('Пять: ', orders.five, 'Десять: ', orders.ten);
  let arrOfTerms: any[] = [];
  let prevResult: number = 0;
  const makeInCircle: any = (makeFunction: any) => {
    for (let i = 1; i < terms; i++) {
      prevResult += arrOfTerms[i - 1];
      arrOfTerms.push(makeFunction(prevResult, dig, orders));
    }
    arrOfTerms.push(answer(arrOfTerms[arrOfTerms.length - 1], prevResult));
  };
  if (orders.five.length === 0 || orders.five[0] !== 'Любой') {
    console.log('ex 5');
    arrOfTerms = gen5Exercise(dig, terms);
  } else {
    arrOfTerms.push(makeFirstTerm(dig, orders));
    makeInCircle(makeNextTerm);
  }
  return arrOfTerms;
}

export const gen5Exercise = (digits: number, terms: number) => {
  let termsArr = [];
  const exampleDigits = ordersArray.five.exercises[0][0].toString().length;
  if (digits > exampleDigits) digits = exampleDigits;
  if (terms > 10) terms = 10;
  const line =
    ordersArray.five.exercises[
      getRandomIntInclusive(0, ordersArray.five.exercises.length - 1)
    ];
  let startPos = terms === 10 ? 0 : plus2(getRandomIntInclusive(0, 10 - terms));

  termsArr.push(sliceTerm(line[startPos], digits));
  for (let i = 0; i < terms - 1; i++) {
    termsArr.push(sliceTerm(line[startPos + 1 + i * 2], digits));
  }
  termsArr.push(termsArr.reduce((a, b) => a + b, 0));
  console.log(termsArr);

  return termsArr;
};

const sliceTerm = (term: number, digits: number) => {
  let rezTerm = term.toString(),
    plus = 1;
  if (term < 0) {
    rezTerm = rezTerm.slice(1);
    plus = -1;
  }
  rezTerm = rezTerm.slice(0, digits);
  return +rezTerm * plus;
};

const plus2 = (counter: number) => {
  let sum = 0;
  for (let i = 0; i < counter; i++) {
    sum += 2;
  }
  return sum;
};
