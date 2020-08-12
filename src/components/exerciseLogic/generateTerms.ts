import { getRandomIntInclusive } from './getRandomIntInclusive';

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
    let plus = plusMinus(prevResult, max, min);
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
        term = +term * plus;
        console.log('without 10', term);
      } while (checkRez(prevResult, term, min, max));
    }
  }
  return term;
};

// выбор + или -
const plusMinus = (prevRez: number, ma: number, mi: number) => {
  // проверка на возможность сложения с числом той же разрядности.
  let plus = 1;
  if (prevRez > ma - mi) {
    plus = -1;
  } else {
    if (getRandomIntInclusive(0, 1) && Number(prevRez.toString()[0]) > 1)
      plus = -1;
  }
  return plus;
};
