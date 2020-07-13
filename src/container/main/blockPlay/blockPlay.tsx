import React from 'react';
import classes from './blockplay.module.scss';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';

type blockPlayOpt = {
  countPlayers: number;
  rounds: number;
  terms: number;
  speed: number;
  digits: number;
  orders: any;
};

const BlockPlay = ({
  countPlayers,
  rounds,
  terms,
  speed,
  digits,
  orders,
}: blockPlayOpt) => {
  const players = [];
  for (let i = 1; i <= countPlayers; i++) {
    players.push(i);
  }
  return (
    <>
      <Row className={classes.gameField}>
        {players.map((el) => (
          <BlockOnePlayer
            key={el}
            digits={digits}
            speed={speed}
            terms={terms}
            numOfRounds={rounds}
            numOfPlayer={el}
            orders={orders}
          />
        ))}
      </Row>
    </>
  );
};

export default BlockPlay;
