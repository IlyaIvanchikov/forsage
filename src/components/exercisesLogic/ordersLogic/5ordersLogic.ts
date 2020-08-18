import without5Orders from './without5Orders';
import makeOneDigitInTerm from './makeOneDigit';

export const makeIn5Orders = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  let termsArr = [];
  orders = orders.map((el: string) => el.slice(0, 2));
  if (orders.length === 0) {
    // без законов на 5
    termsArr = without5Orders(digits, terms);
  } else {
    // с законами на 5
    termsArr = makeWith5Orders(orders, terms, digits);
  }

  return termsArr;
};

const makeWith5Orders = (
  orders: string[],
  terms: number,
  digits: number = 1
) => {
  const signs: any[] = [];
  let exercise = makeOneDigitInTerm(orders, terms);
  exercise.forEach((el) => signs.push(el[0] === '-' ? '-' : '+'));
  if (digits > 1) {
    for (let i = 1; i < digits; i++) {
      const ex = makeOneDigitInTerm(orders, terms, signs);
      exercise = exercise.map(
        (el, idx) =>
          el +
          (ex[idx][0] === '-' || ex[idx][0] === '+'
            ? ex[idx].slice(1)
            : ex[idx])
      );
    }
  }
  return exercise.map((el) => +el);
};
