import React from 'react';
import classes from './blockoneplayer.module.scss';
import BlockResults from './blockResults/blockResults';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';


const BlockOnePlayer: React.FC = () => {
  function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  
  const block = getRandomIntInclusive(0, 2);
  
  return (
    <Col className={classes.onePlayerField}>
      {block < 1 ? <BlockResults /> : <BlockGame />}
    </Col>
  );
};

export default BlockOnePlayer;
