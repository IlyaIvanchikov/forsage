import makeFirstTerm from './makeTerms/firstTerm';
import makeNextTerm from './makeTerms/nextTerms';
import { makeIn5Orders } from './ordersLogic/5ordersLogic';
import { makeIn10Orders } from './ordersLogic/10ordersLogic';

export const makeExercises = (digits: number, terms: number, orders: any) => {
  let arrOfTerms: number[] = [];
  if (
    // законы на 5
    (orders.five.length > 0 && orders.five[0] !== 'Любой') ||
    orders.five.length === 0
  ) {
    arrOfTerms = makeIn5Orders(orders.five, terms, digits);
  } else if (
    // законы на 10
    (orders.ten.length > 0 && orders.ten[0] !== 'Любой')
  ) {
    arrOfTerms = makeIn10Orders(orders.ten, terms, digits);
  } else {
    // С любым законом или без законов на 10
    arrOfTerms.push(makeFirstTerm(digits, orders));
    // Генерируем и пушим в массив последующие слагаемые
    let sum = arrOfTerms[0];
    for (let i = 1; i < terms; i++) {
      const term = makeNextTerm(sum, digits, orders);
      arrOfTerms.push(term);
      sum += term;
    }
  }
  // считаем сумму и пушим в массив
  arrOfTerms.push(arrOfTerms.reduce((a, b) => a + b, 0));

  return arrOfTerms;
};
