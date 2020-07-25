import React, { useContext } from 'react';
import classes from './blockplay.module.scss';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';
import { ParametersContext } from '../main-context';
import { StateTypeItem } from '../state/reducer';

const BlockPlay = () => {
  const { state } = useContext(ParametersContext);
  return (
    <>
      <Row className={classes.gameField}>
        {state.playerParameters.map((item: StateTypeItem, index: number) => (
          <BlockOnePlayer
            key={index + 1}
            digits={item.signs}
            speed={item.speed}
            terms={item.digits}
            numOfRounds={item.rounds}
            numOfPlayer={index + 1}
            orders={item.laws}
          />
        ))}
      </Row>
    </>
  );
};

export default BlockPlay;
