import makeNextTerm from '../makeTerms/nextTerms';
import { ordersArray } from '../dataBaseExercises/orders';
import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';
import { doubleCrossExercises } from './doubleCross10n5';

export const makeIn10Orders = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  // const ordersBack = orders;
  let arrOfTerms,
    isThereCross = false;
  orders.forEach((order) => {
    if (order.length > 12) isThereCross = true;
  });
  if (isThereCross) isThereCross = true;
  if (false) {
    // двойной переход на10 и на 5
    arrOfTerms = doubleCrossExercises(orders, terms, digits);
  } else {
    orders = orders.map((el: string) =>
      el.length > 12 ? el.slice(0, 2) + 'd' : el.slice(0, 2)
    );
    const order = randomFromArray(orders);
    console.log(order, 'order');
    const orders10 = ordersArray.ten;
    let firstTerm = randomFromArray(orders10[order]);
    if (order[0] === '-') firstTerm += getRandomIntInclusive(1, 7) * 10;
    arrOfTerms = [firstTerm, Number(order.slice(0, 2))];
    let sum = arrOfTerms[0] + arrOfTerms[1];
    if (terms > 2) {
      // если больше двух слагаемых
      if (firstTerm < 10 && firstTerm > 1) {
        if (getRandomIntInclusive(0, 1)) {
          const term1 = getRandomIntInclusive(1, firstTerm - 1);
          console.log(term1);
          arrOfTerms = [term1, firstTerm - term1, Number(order.slice(0, 2))];
          sum = arrOfTerms.reduce((a, b) => a + b, 0);
        }
        otherItems(sum, terms - arrOfTerms.length, arrOfTerms);
      } else {
        otherItems(sum, terms - arrOfTerms.length, arrOfTerms);
      }
    }
    if (digits > 1) {
      arrOfTerms = moreDigits10OrderedExercises(arrOfTerms, digits, orders);
    }
  }
  arrOfTerms.forEach((el, idx) => {
    if (el === 0 && digits === 2) {
      arrOfTerms[idx] = 10;
      // console.dir(arrOfTerms);
      // makeIn10Orders(ordersBack, terms, digits);
    }
  });
  return arrOfTerms;
};

const randomFromArray = (arr: any[]) =>
  arr[getRandomIntInclusive(0, arr.length - 1)];

const otherItems = (sum: number, numOfT: number, arrOfTerms: number[]) => {
  for (let i = 0; i < numOfT; i++) {
    const sum1 = sum > 9 ? sum % 10 : sum;
    const term = makeNextTerm(sum1, 1, { ten: [], five: ['Любой'] });

    sum += term;
    arrOfTerms.push(term);
  }
};

const moreDigits10OrderedExercises = (
  arr: number[],
  digits: number,
  orders: string[]
) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] > 9) arr[i] += 20;
    arr[i] = addDigitInTerm(arr[i], sum);
    sum += arr[i];
  }
  return arr;
};

const addDigitInTerm = (item: number, prevTerm: number) => {
  const plus = item > 0 ? 1 : -1;
  let rezItem;
  if (Math.abs(item) < 10) {
    let counter = 0;
    do {
      rezItem = (Math.abs(item) + getRandomIntInclusive(1, 7) * 10) * plus;
      counter++;
      if (counter > 15) {
        rezItem = 0;
      }
    } while (rezItem + prevTerm > 99 || rezItem + prevTerm < 10);
  } else {
    rezItem = item;
  }
  return rezItem;
};
