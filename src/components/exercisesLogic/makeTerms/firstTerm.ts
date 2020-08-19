import getRandomIntInclusive from '../extraFunctions/getRandomIntInclusive';

const minMax = (num: number) => ({
  max: Math.pow(10, num) - 1,
  min: Math.pow(10, num - 1),
});

export const makeFirstTerm = (digits: number, orders: any = {}) => {
  const { min, max } = minMax(digits);
  let firstTerm = getRandomIntInclusive(min, max);
  return firstTerm;
};

export default makeFirstTerm;
