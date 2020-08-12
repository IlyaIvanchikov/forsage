// import { makeExercises } from './makeExercises';
// import { testOrders } from './testOptions';
// import { ordersArray } from './orders';

export function viewOrders() {
  // const digits = 3,
  //   terms = 5;
  // const ex = makeExercises(digits, terms, testOrders.without5);
  // // let ex = ordersArray.five.exercises;
  // for (let ico = 0; ico < ex.length; ico++) {
  //   // console.log('=========', ico, '=======');
  //   // let exx = ex[ico];
  //   // exx = exx.filter((idx) => idx % 2 !== 0 || idx === 0);
  //   // let sum = exx[0];
  //   // for (let index = 1; index < exx.length; index++) {
  //   //   checkOrders(sum, exx[index]);
  //   //   sum += exx[index];
  //   // }
  // }
}

// const checkOrders = (firstTerm: number, secondTerm: number) => {
//   console.log('Проверяем', firstTerm, secondTerm);
//   const first = firstTerm.toString();
//   let second = secondTerm.toString();
//   let plus = 1;
//   if (second[0] === '-') {
//     second = second.slice(1);
//     plus = -1;
//   }
//   for (let i = first.length - 1; i >= 0; i--) {
//     const one = Number(first[i]);
//     const two = Number(second[i]) * plus;
//     let sum = one + two;
//     if (sum < 0) {
//       sum = Number('1' + first[i]) + two;
//       console.log('Закон на 10 минус', one, two);
//     } else {
//       if (sum > 9) console.log('Закон на 10 плюс', one, two);
//     }
//     if (!ordersArray.five.withoutOrders[one].includes(two) && Math.abs(two) < 5)
//       console.log('Закон на 5', one, two);
//   }
// };
