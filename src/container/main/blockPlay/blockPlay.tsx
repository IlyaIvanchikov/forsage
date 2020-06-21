import React from 'react';
import classes from './blockplay.module.scss';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';

const BlockPlay: React.FC = () => {

  return (
    <>
      <Row className={classes.gameField}>
        <BlockOnePlayer />
        <BlockOnePlayer />
        <BlockOnePlayer />
        <BlockOnePlayer />
      </Row>
    </>
  );
};

export default BlockPlay;
