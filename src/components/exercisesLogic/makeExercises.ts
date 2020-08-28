import {
  caseAnyOrWithout10,
  caseWith10,
  caseWith5,
} from './orderedMakeFuctions';

export const makeExercises = (digits: number, terms: number, orders: any) => {
  let arrOfTerms: number[] = [];

  const n = orders.ten[0];
  if (orders.five.length > 0) {
    // законы на 5 (любой или особые)
    if (orders.five[0] === 'Любой') {
      // выбран любой закон на 5
      n === 'Любой' || n === undefined
        ? caseAnyOrWithout10(digits, terms, orders, arrOfTerms)
        : caseWith10(digits, terms, orders, arrOfTerms);
    } else {
      // особые законы на 5
      n === 'Любой' || n === undefined
        ? caseWith5(digits, terms, orders, arrOfTerms)
        : caseWith10(digits, terms, orders, arrOfTerms);
    }
  } else {
    // без законов на 5
    caseWith5(digits, terms, orders, arrOfTerms);

    switch (n) {
      case 'Любой':
        // orderSrt = 'without5';
        break;
      case undefined:
        // orderSrt = 'withoutAnyOrders';
        break;

      default:
        // orderSrt = 'with10without5';
        break;
    }
  }
  // считаем сумму и пушим в массив
  arrOfTerms.push(arrOfTerms.reduce((a, b) => a + b, 0));

  return arrOfTerms;
};
