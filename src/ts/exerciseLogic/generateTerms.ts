import {getRandomIntInclusive} from '../getRandomIntInclusive';

export const makeFirstTerm = (digits: number) => {
    const max = Math.pow(10, digits) - 1;
    const min = Math.pow(10, (digits - 1));
    const firstTerm = getRandomIntInclusive(min, max);

    return firstTerm
}