import React from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';

type blockPlayOpt = {
  numOfPlayer: number;
};

const BlockOnePlayer = ({ numOfPlayer }: blockPlayOpt) => {
  console.log('from blockPlayerOne', numOfPlayer);

  return (
    <Col className={classes.onePlayerField}>
      <BlockGame numOfPlayer={numOfPlayer} />
    </Col>
  );
};

export default BlockOnePlayer;
