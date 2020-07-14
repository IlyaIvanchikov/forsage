import { getRandomIntInclusive } from '../getRandomIntInclusive';

const minMax = (num: number) => ({
  max: Math.pow(10, num) - 1,
  min: Math.pow(10, num - 1),
});

export const answer = (prevSum: number, lastTerm: number) => prevSum + lastTerm

export const makeFirstTerm = (digits: number) => {
  const { min, max } = minMax(digits);
  const firstTerm = getRandomIntInclusive(min, max);

  return firstTerm;
};

export const makeNextTerm = (prevResult: number, digits: number) => {
  let term;
  const { min, max } = minMax(digits);
  do {
    term = getRandomIntInclusive(min, max);
    if (getRandomIntInclusive(0, 1)) term *= -1;
  } while (prevResult + term < min || prevResult + term > max);

  return term;
};

// Последующие слагаемые без законов на 10
export const makeNextTermWithout10orders = (
  prevResult: [number, string],
  digits: number
) => {
  const termString = [];
  const max = Math.pow(10, digits) - 1;
  const min = Math.pow(10, digits - 1);
  let plus = 1;
  const firstTerm = prevResult.toString();
  // проверка на возможность сложения с числом той же разрядности.
  if (+prevResult > max - min) {
    plus = -1;
  } else {
    if (getRandomIntInclusive(0, 1) && prevResult[0] > 1) plus = -1;
  }
  let term: any = '';
  do {
    let max1, min1;
    for (let i = 0; i < firstTerm.length; i++) {
      i === 0 ? (min1 = 1) : (min1 = 0);
      if (plus > 0) {
        max1 = 9 - +firstTerm[i];
      } else {
        max1 = +firstTerm[i] - 1;
      }
      const element = getRandomIntInclusive(min1, max1);
      termString.push(element);
    }
    // eslint-disable-next-line no-loop-func
    termString.forEach((el) => (term += el.toString()));
    term = +term * plus;
  } while (prevResult + term < min || prevResult + term > max);

  return term;
};

// export const makeNextTermWithOrders = (prevResult, digits) => {
//     const termString = [];
//     const max = Math.pow(10, digits) - 1;
//     const min = Math.pow(10, (digits - 1));
//     let plus = 1;
//     const firstTerm = prevResult.toString();
//     // проверка на возможность сложения с числом той же разрядности.
//     if (+prevResult > max - min) {
//         plus = -1
//     } else {
//         if (getRandomIntInclusive(0, 1) && prevResult[0] > 1) plus = -1;
//     }
//     let term = "";
//     do {
//         let max1,
//             min1;
//         for (let i = 0; i < firstTerm.length; i++) {
//             i === 0 ? min1 = 1 : min1 = 0;
//             if (plus > 0) {
//                 max1 = 9 - +firstTerm[i];
//             } else {
//                 max1 = +firstTerm[i] - 1;
//             }
//             const element = getRandomIntInclusive(min1, max1);
//             termString.push(element);
//         }
//         termString.forEach(el => term += el.toString());
//         term = +term * plus;
//     } while ( (prevResult + term) < min || (prevResult + term) > max)

//     return term;
// }
