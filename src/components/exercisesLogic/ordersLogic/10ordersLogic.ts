import makeNextTerm from '../makeTerms/nextTerms';
import { ordersArray } from '../dataBaseExercises/orders';
import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

export const makeIn10Orders = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  console.log('БОЛЬШЕ');
  orders = orders.map((el: string) => el.slice(0, 2));
  const order = randomFromArray(orders);
  const orders10 = ordersArray.ten;
  let firstTerm = randomFromArray(orders10[order]);
  if (order[0] === '-') firstTerm += 10;
  let arrOfTerms = [firstTerm, Number(order)];
  let sum = arrOfTerms[0] + arrOfTerms[1];
  if (terms > 2) {
    // если больше двух слагаемых
    if (firstTerm < 10 && firstTerm > 1) {
      if (getRandomIntInclusive(0, 1)) {
        const term1 = getRandomIntInclusive(1, firstTerm - 1);
        arrOfTerms = [term1, firstTerm - term1, Number(order)];
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
  return arrOfTerms;
};

const randomFromArray = (arr: any[]) =>
  arr[getRandomIntInclusive(0, arr.length - 1)];

// const findMatchedOrers = (
//   orders: any[],
//   exampleOrders: any,
//   thingToFind: any
// ) => {
//   return orders.filter(
//     // eslint-disable-next-line no-loop-func
//     (el) => exampleOrders[el].includes(thingToFind)
//   );
// };

const otherItems = (sum: number, numOfT: number, arrOfTerms: number[]) => {
  for (let i = 0; i < numOfT; i++) {
    const sum1 = sum > 9 ? sum - 10 : sum;
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
  console.log('more digits');
  return arr;
};

const addDigitInTerm = (item: number, prevTerm: number) => {
  const plus = item > 0 ? 1 : -1;
  let rezItem;
  if (Math.abs(item) < 10) {
    console.log(item, 'одноразрядное слагаемое. начинаем пересчет');
    let counter = 0;
    do {
      rezItem = (Math.abs(item) + getRandomIntInclusive(1, 7) * 10) * plus;
      counter++;
      if (counter > 15) {
        console.log(item, rezItem, prevTerm);
        console.log('counter');
        rezItem = 0;
      }
    } while (rezItem + prevTerm > 99 || rezItem + prevTerm < 10);
  } else {
    rezItem = item;
  }
  return rezItem;
};
