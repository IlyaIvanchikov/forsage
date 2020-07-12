import React from 'react';
import classes from './blockplay.module.scss';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';

type blockPlayOpt = {
  countPlayers: number;
};

const BlockPlay = ({ countPlayers }: blockPlayOpt) => {
  const players = [];
  for (let i = 0; i < countPlayers; i++) {
    players.push(i + 1);
  }
  return (
    <>
      <Row className={classes.gameField}>
        {players.map((el) => (
          <BlockOnePlayer numOfPlayer={el} />
        ))}
      </Row>
    </>
  );
};

export default BlockPlay;
