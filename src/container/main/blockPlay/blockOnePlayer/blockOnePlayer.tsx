import React, { useState } from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';
import BlockResults from './blockResults/blockResults';
// import { makeExercises } from '../../../../components/exerciseLogic/makeExercises';
import { generateNumber } from '../../../../components/exerciseLogic/generateNumber';
// import { testOrders } from '../../../../ts/exerciseLogic/testOptions';

type blockPlayOpt = {
  numOfPlayer: number;
  numOfRounds: number;
  speed: number;
  terms: number;
  digits: number;
  orders: any;
  additional: {
    soundPlay: boolean;
    turboPlay: boolean;
    superTurboPlay: boolean;
  };
};

const BlockOnePlayer = ({
  numOfPlayer,
  numOfRounds,
  digits,
  speed,
  terms,
  orders,
  additional,
}: blockPlayOpt) => {
  const [viewScore, setViewScore] = useState(false);

  const [results, setResults] = useState({
    numOfRounds,
    rightAnswers: 0,
    roundsScore: [],
  });

  const exercises: any = [];
  generateNumber(exercises, numOfRounds, digits, terms, orders);

  return (
    <Col className={classes.onePlayerField}>
      {viewScore ? (
        <BlockResults
          results={results}
          setResults={setResults}
          showScore={setViewScore}
        />
      ) : (
        <BlockGame
          exercises={exercises}
          numOfRounds={numOfRounds}
          numOfPlayer={numOfPlayer}
          timing={speed * 1000}
          showScore={setViewScore}
          setResults={setResults}
          results={results}
          additional={additional}
        digits={digits}
        />
      )}
    </Col>
  );
};

export default BlockOnePlayer;
