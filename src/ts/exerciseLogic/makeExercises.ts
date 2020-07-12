import { makeFirstTerm } from './generateTerms';

export function makeExercises(dig: number, terms: number, orders: any): any {
  //   const makeInCircle: any = (makeFunction: any) => {
  //     for (let i = 1; i < terms; i++) {
  //       prevResult += arrOfTerms[i - 1];
  //       arrOfTerms.push(makeFunction(prevResult, dig));
  //     }
  //   };

  const arrOfTerms: number[] = [];
  arrOfTerms.push(makeFirstTerm(dig));
  //   let prevResult: number = 0;

  console.log(arrOfTerms);
  return arrOfTerms;
}
