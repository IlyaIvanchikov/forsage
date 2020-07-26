import { makeExercises } from './makeExercises';

export const generateNumber = (
  exercises: any,
  numOfRounds: number,
  digits: any,
  terms: any,
  orders: any
) => {
  for (let i = 0; i < numOfRounds; i++) {
    exercises.push(makeExercises(digits, terms, orders));
  }
};
