import makeFirstTerm from './makeTerms/firstTerm';
import makeNextTerm from './makeTerms/nextTerms';
import { makeIn5Orders } from './ordersLogic/5ordersLogic';
import { makeIn10Orders } from './ordersLogic/10ordersLogic';

// arrOfTerms = makeIn5Orders(orders.five, terms, digits);
// } else if (
//   // законы на 10
//   orders.ten.length > 0 &&
//   orders.ten[0] !== 'Любой'
// ) {
//   arrOfTerms = makeIn10Orders(orders.ten, terms, digits);

export const caseAnyOrWithout10 = (
  digits: number,
  terms: number,
  orders: any,
  arrOfTerms: number[]
) => {
  orders.ten[0] === undefined
    ? console.log('case without10')
    : console.log('case any');
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
  console.log('case With10');
  const arr = makeIn10Orders(orders.ten, terms, digits);
  arr.forEach((el) => arrOfTerms.push(el));
};

export const caseWith5 = (
  digits: number,
  terms: number,
  orders: any,
  arrOfTerms: number[]
) => {
  orders.ten[0] === undefined || orders.ten[0] === 'Любой'
    ? console.log('case with5')
    : console.log('case with10and5');
  const arr = makeIn5Orders(orders.five, terms, digits);
  arr.forEach((el) => arrOfTerms.push(el));
};
