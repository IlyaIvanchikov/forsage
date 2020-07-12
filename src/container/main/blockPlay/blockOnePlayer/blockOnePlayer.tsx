import React from 'react';
import { useState } from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';
import { makeExercises } from '../../../../ts/exerciseLogic/makeExercises';

type blockPlayOpt = {
  numOfPlayer: number,
  numOfRounds: number
};

const BlockOnePlayer = ({ numOfPlayer, numOfRounds }: blockPlayOpt) => {
  const exercises: any[] = [];

  const [round, setRound] = useState(1);

  for (let i = 0; i < numOfRounds; i++) {
    exercises.push(
      makeExercises(2, 5, {
        five: ['Любой'],
        ten: ['Любой'],
      })
    );
  }

  return (
    <Col className={classes.onePlayerField}>
      <BlockGame exercises={exercises[round]} setRound={setRound} round={round} numOfPlayer={numOfPlayer} />
    </Col>
  );
};

export default BlockOnePlayer;
