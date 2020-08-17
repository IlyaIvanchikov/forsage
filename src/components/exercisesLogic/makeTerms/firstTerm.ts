import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

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

export default makeFirstTerm;
