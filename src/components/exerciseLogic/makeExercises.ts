import {
  makeFirstTerm,
  makeNextTerm,
  // makeNextTermWithout10orders,
  answer,
} from './generateTerms';

export function makeExercises(dig: number, terms: number, orders: any): any {
  const arrOfTerms: number[] = [];
  let prevResult: number = 0;
  const makeInCircle: any = (makeFunction: any) => {
    for (let i = 1; i < terms; i++) {
      prevResult += arrOfTerms[i - 1];
      arrOfTerms.push(makeFunction(prevResult, dig, orders));
    }
    arrOfTerms.push(answer(arrOfTerms[arrOfTerms.length - 1], prevResult));
  };
  arrOfTerms.push(makeFirstTerm(dig, orders));
  makeInCircle(makeNextTerm);
  return arrOfTerms;
}
