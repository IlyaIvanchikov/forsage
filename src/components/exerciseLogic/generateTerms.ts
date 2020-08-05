import { getRandomIntInclusive } from './getRandomIntInclusive';
import { ordersArray } from './orders';

export const answer = (prevSum: number, lastTerm: number) => prevSum + lastTerm;

const minMax = (num: number) => ({
  max: Math.pow(10, num) - 1,
  min: Math.pow(10, num - 1),
});

export const makeFirstTerm = (digits: number, orders: any = {}) => {
  const { min, max } = minMax(digits);
  let firstTerm = getRandomIntInclusive(min, max);
  if (digits === 1 && orders.ten.length !== 0 && orders.ten[0] !== 'Любой') {
    firstTerm += 9;
  }
  return firstTerm;
};

export const makeNextTerm = (
  prevResult: number,
  digits: number,
  orders: any
) => {
  let term: any;
  const { min, max } = minMax(digits);

  const checkRez = (p: number, t: number, mi: number, ma: number) =>
    p + t < mi || p + t > ma;

  // для любых законов
  if (orders.five[0] === 'Любой' && orders.ten[0] === 'Любой') {
    do {
      term = getRandomIntInclusive(min, max);
      if (getRandomIntInclusive(0, 1)) term *= -1;
    } while (checkRez(prevResult, term, min, max));
  } else {
    const prevRezString = prevResult.toString();
    term = '';
    let max1, min1;
    const plus = plusMinus(prevResult, max, min);
    // без законов на 10
    if (orders.ten.length === 0 && orders.five[0] === 'Любой') {
      do {
        for (let i = 0; i < prevRezString.length; i++) {
          i === 0 ? (min1 = 1) : (min1 = 0);
          if (plus > 0) {
            max1 = 9 - +prevRezString[i];
          } else {
            max1 = +prevRezString[i] - 1;
          }
          const element = getRandomIntInclusive(min1, max1);
          term += element;
        }
        // eslint-disable-next-line no-loop-func
        term = +term * plus;
        console.log('without 10', term);
      } while (checkRez(prevResult, term, min, max));
    }

    // Последующие слагаемые без законов на 5
    if (orders.five.length === 0) {
      do {
        for (let index = 0; index < prevRezString.length; index++) {
          let element;
          do {
            element =
              ordersArray.five.withoutOrders[prevRezString[index]][
                getRandomIntInclusive(1, 4)
              ];
            console.log(
              'el/pl',
              element,
              '/',
              plus,
              element >= 0 && plus > 0,
              element <= 0 && plus < 0
            );
          } while (element >= 0 && plus > 0);
          // termArrOfStr.push(element);
        }
        // eslint-disable-next-line no-loop-func
        // termArrOfStr.forEach((el) => (term += el.toString()));
        term = +term * plus;
      } while (checkRez(prevResult, term, min, max));
      console.log('without 5');
    }
  }

  // console.log('next', term);
  return term;
};

export const makeNextTermWithout5orders = (
  prevResult: [number, string],
  digits: number
) => {
  const termArrOfStr = [];
  const max = Math.pow(10, digits) - 1;
  const min = Math.pow(10, digits - 1);
  let plus = 1;
  const firstTerm = prevResult.toString();
  // проверка на возможность сложения с числом той же разрядности.
  if (+prevResult > max - min && +prevResult[0] === 4) {
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
      termArrOfStr.push(element);
    }
    // eslint-disable-next-line no-loop-func
    termArrOfStr.forEach((el) => (term += el.toString()));
    term = +term * plus;
  } while (prevResult + term < min || prevResult + term > max);

  return term;
};

// выбор + или -
const plusMinus = (prevRez: number, ma: number, mi: number) => {
  // проверка на возможность сложения с числом той же разрядности.
  let plus = 1;
  if (prevRez > ma - mi) {
    plus = -1;
  } else {
    if (getRandomIntInclusive(0, 1) && Number(prevRez.toString()[0]) > 1) plus = -1;
  }
  return plus;
};
