import React, { useContext } from 'react';
import classes from './blockplay.module.scss';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';
import { ParametersContext, UsuallyContext } from '../main-context';

const BlockPlay = () => {
  const { state } = useContext(ParametersContext);
  const { countPlayers } = useContext(UsuallyContext);
  const { signs, speed, rounds, digits, laws } = state.playerParameters[0];
  const players = [];
  for (let i = 1; i <= countPlayers.countPlayers; i++) {
    players.push(i);
  }
  return (
    <>
      <Row className={classes.gameField}>
        {players.map((el: any) => (
          <BlockOnePlayer
            key={el}
            digits={digits}
            speed={speed}
            terms={signs}
            numOfRounds={rounds}
            numOfPlayer={el}
            orders={laws}
          />
        ))}
      </Row>
    </>
  );
};

export default BlockPlay;
