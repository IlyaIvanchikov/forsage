import { makeFirstTerm, makeNextTerm } from './generateTerms';

export function makeExercises(dig: number, terms: number, orders: any): any {
  const makeInCircle: any = (makeFunction: any) => {
    for (let i = 1; i < terms; i++) {
      prevResult += arrOfTerms[i - 1];
      arrOfTerms.push(makeFunction(prevResult, dig));
    }
  };
  const arrOfTerms: number[] = [];
  arrOfTerms.push(makeFirstTerm(dig));
  let prevResult: number = 0;
  if (orders.five[0] === 'Любой' && orders.ten[0] === 'Любой') {
    // если не выбраны законы
    console.log('not specified');
    makeInCircle(makeNextTerm);
  } else {
    // если выбраны законы
    if (orders.ten.length === 0 && orders.five[0] === 'Любой') {
      // makeInCircle(makeNextTermWithout10orders);
      console.log('without10');
    } else {
      console.log('with orders');
      // makeInCircle(makeNextTermWithOrders);
    }
  }
  return arrOfTerms;
}
