import makeFirstTerm from './makeTerms/firstTerm';
import makeNextTerm from './makeTerms/nextTerms';

export const makeExercises = (digits: number, terms: number, orders: any) => {
  console.log('makeExercises');
  const arrOfTerms: number[] = [];
  // let prevResult: number = 0;
  // Первое слагаемое
  arrOfTerms.push(makeFirstTerm(digits, orders));
  // Генерируем и пушим в массив последующие слагаемые
  let sum = arrOfTerms[0];
  for (let i = 1; i < terms; i++) {
    const term = makeNextTerm(sum, digits, orders);
    arrOfTerms.push(term);
    sum += term;
  }
  // считаем сумму и пушим в массив
  arrOfTerms.push(arrOfTerms.reduce((a, b) => a + b, 0));

  return arrOfTerms;
};
