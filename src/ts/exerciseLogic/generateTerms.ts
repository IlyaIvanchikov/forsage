import { getRandomIntInclusive } from '../getRandomIntInclusive';

const minMax = (num: number) => ({
  max: Math.pow(10, num) - 1,
  min: Math.pow(10, num - 1),
});

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
