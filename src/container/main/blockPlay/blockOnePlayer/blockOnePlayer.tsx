import React from 'react';
import classes from './blockoneplayer.module.scss';
import BlockResults from './blockResults/blockResults';
import { Col } from 'react-bootstrap';
import BlockGame from './blockGame/blockGame';

const block = 'rez';

const BlockOnePlayer: React.FC = () => {
  return (
    <Col className={classes.onePlayerField}>
      {block === 'rez' ? <BlockResults /> : <BlockGame />}
    </Col>
  );
};

export default BlockOnePlayer;
