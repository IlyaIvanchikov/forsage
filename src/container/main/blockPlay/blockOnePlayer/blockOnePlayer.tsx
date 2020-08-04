import React, { useState } from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';
import BlockResults from './blockResults/blockResults';
import { generateNumber } from '../../../../components/exerciseLogic/generateNumber';

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
  const [round, setRound] = useState(1);
  const [results, setResults] = useState<any>({
    numOfRounds,
    rightAnswers: 0,
    roundsScore: [],
  });

  const exercises: any = [];
  generateNumber(exercises, numOfRounds, digits, terms, orders);

  const [newExercises, setNewExercises] = useState(exercises);
  console.log(newExercises);

  return (
    <Col className={classes.onePlayerField}>
      {viewScore ? (
        <BlockResults
          results={results}
          setResults={setResults}
          showScore={setViewScore}
          setExercises={setNewExercises}
          setRound={setRound}
          round={round}
          exercises={exercises}
        />
      ) : (
        <BlockGame
          exercises={newExercises}
          numOfRounds={numOfRounds}
          numOfPlayer={numOfPlayer}
          timing={speed * 1000}
          showScore={setViewScore}
          setResults={setResults}
          results={results}
          additional={additional}
          digits={digits}
          round={round}
          setRound={setRound}
        />
      )}
    </Col>
  );
};

export default BlockOnePlayer;
