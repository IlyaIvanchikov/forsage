import makeFirstTerm from './makeTerms/firstTerm';
import makeNextTerm from './makeTerms/nextTerms';
import { makeIn5Orders } from './ordersLogic/5ordersLogic';
import { makeIn10Orders } from './ordersLogic/10ordersLogic';

export const caseAnyOrWithout10 = (
  digits: number,
  terms: number,
  orders: any,
  arrOfTerms: number[]
) => {
  arrOfTerms.push(makeFirstTerm(digits, orders));
  // Генерируем и пушим в массив последующие слагаемые
  let sum = arrOfTerms[0];
  for (let i = 1; i < terms; i++) {
    const term = makeNextTerm(sum, digits, orders);
    arrOfTerms.push(term);
    sum += term;
  }
};

export const caseWith10 = (
  digits: number,
  terms: number,
  orders: any,
  arrOfTerms: number[]
) => {
  const arr = makeIn10Orders(orders.ten, terms, digits);
  arr.forEach((el) => arrOfTerms.push(el));
};

export const caseWith5 = (
  digits: number,
  terms: number,
  orders: any,
  arrOfTerms: number[]
) => {
  const arr = makeIn5Orders(orders.five, terms, digits);
  arr.forEach((el) => arrOfTerms.push(el));
};
