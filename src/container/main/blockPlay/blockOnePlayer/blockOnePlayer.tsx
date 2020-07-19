import React from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';
import { makeExercises } from '../../../../ts/exerciseLogic/makeExercises';
// import { testOrders } from '../../../../ts/exerciseLogic/testOptions';

type blockPlayOpt = {
  numOfPlayer: number;
  numOfRounds: number;
  speed: number;
  terms: number;
  digits: number;
  orders: any;
};

const BlockOnePlayer = ({
  numOfPlayer,
  numOfRounds,
  digits,
  speed,
  terms,
  orders,
}: blockPlayOpt) => {

  const exercises: any[] = [];

  for (let i = 0; i < numOfRounds; i++) {
    exercises.push(makeExercises(digits, terms, orders));
  }

  console.log(exercises);
  return (
    <Col className={classes.onePlayerField}>
      <BlockGame
        exercises={exercises}
        numOfPlayer={numOfPlayer}
        timing={speed * 1000}
      />
    </Col>
  );
};

export default BlockOnePlayer;
