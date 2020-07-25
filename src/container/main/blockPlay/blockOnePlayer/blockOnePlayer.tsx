import React, { useState } from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';
import BlockResults from './blockResults/blockResults';
// import { makeExercises } from '../../../../components/exerciseLogic/makeExercises';
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
  const [viewScore, setViewScore] = useState(false);
  const [results, setResults] = useState({
    numOfRounds,
    rightAnswers: 0,
    roundsScore: [],
  });

//  let test: any = [];
//   // let test: any = [];
//   for (let i = 0; i < numOfRounds; i++) {
//     test.push(makeExercises(digits, terms, orders));
//   };

//   const [exercises, setExercise] = useState(test);
//   console.log(exercises);
//   useEffect(() => {
//     setExercise(test);
//     setResults({
//       numOfRounds,
//       rightAnswers: 0,
//       roundsScore: [],
//     });
//   }, [digits, terms, orders, speed, numOfRounds]);

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
          // exercises={exercises}
          numOfRounds={numOfRounds}
          numOfPlayer={numOfPlayer}
          timing={speed * 1000}
          showScore={setViewScore}
          setResults={setResults}
          results={results}
          digits={digits}
          terms={terms}
          orders={orders}
        />
      )}
    </Col>
  );
};

export default BlockOnePlayer;
