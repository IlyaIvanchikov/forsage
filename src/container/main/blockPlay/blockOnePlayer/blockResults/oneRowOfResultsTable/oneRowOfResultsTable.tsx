import React from 'react';
import classes from './onerow.module.scss';

const exerciseString: any = (arrOfNumbers: any) => {
  let string = arrOfNumbers[0];
  for (let i = 1; i < arrOfNumbers.length - 1; i++) {
    arrOfNumbers[i] >= 0
      ? (string += ' ✚ ' + arrOfNumbers[i])
      : (string += ' - ' + arrOfNumbers[i] * -1);
  }

  return string;
};

const OneRowOfTable = (props: any) => {
  const { exercises, number } = props;
  const { exercise, answer } = exercises;
  const rightAnswer = exercise[exercise.length - 1];
  const isRightAnswer = () => (answer === rightAnswer ? true : false);

  return (
    <tr>
      <td>{number}</td>
      <td>{exerciseString(exercise)}</td>
      <td>
        {isRightAnswer() ? (
          <span className={classes.rightAnswer}>&#10004; {answer}</span>
        ) : (
          <span>&#10008; {answer}</span>
        )}
      </td>
      <td>{rightAnswer}</td>
    </tr>
  );
};

export default OneRowOfTable;
