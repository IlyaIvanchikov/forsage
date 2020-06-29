import React from 'react';
import classes from './tableofplayerresults.module.scss';
import { Table, Row } from 'react-bootstrap';

const exercises = [
  {
    exercise: [7, -6, 9, -2],
    answer: 15,
    rightAnswer: 10,
    isRight: false,
  },
  {
    exercise: [7, 5, 1, 9],
    answer: 14,
    rightAnswer: 9,
    isRight: false,
  },
  {
    exercise: [6, -11, 5, -4],
    answer: 7,
    rightAnswer: 7,
    isRight: false,
  },
  {
    exercise: [6, 7, -5, -4],
    answer: 11,
    rightAnswer: 11,
    isRight: true,
  },
];

const exerciseString: any = (arrOfNumbers: any) => {
  let string = arrOfNumbers[0];
  for (let i = 1; i < arrOfNumbers.length; i++) {
    arrOfNumbers[i] >= 0
      ? (string += ' ✚ ' + arrOfNumbers[i])
      : (string += ' - ' + arrOfNumbers[i] * -1);
  }

  return string;
};

const OneRowOfTable = (props: any) => {
  const { exercises, number } = props;
  const { exercise, answer, rightAnswer } = exercises;
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

const TableOfPlayerResults: React.FC = () => {
  return (
    <Row className={classes.table}>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Пример</th>
            <th>Ваш ответ</th>
            <th>Правильный</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((item, index) => (
            <OneRowOfTable
              exercises={item}
              number={index + 1}
              key={item.exercise.toString() + index}
            />
          ))}
        </tbody>
      </Table>
    </Row>
  );
};

export default TableOfPlayerResults;
