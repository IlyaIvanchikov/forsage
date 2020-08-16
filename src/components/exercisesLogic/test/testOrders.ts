import { makeExercises } from '../makeExercises';
import { testOrders } from './testOptions';

export const testOrdersFunc = () => {
  // Data
  const d = 2; // digits
  const t = 2; // terms
  //Data
  console.log('Exercises test', makeExercises(d, t, testOrders.any));
};
