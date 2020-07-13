import React from 'react';
import { useState, useEffect } from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import classes from './blockgame.module.scss';
import { Row } from 'react-bootstrap';
import BlockTerm from './blockTerm';
import CoinsIcon from '../../../../../resources/images/Coins.png';
import ArrowIcon from '../../../../../resources/images/Arrow.png';

type blockGameOpt = {
  numOfPlayer: number;
  exercises: any;
  round: number;
  timing: number;
  setRound: any;
  numOfRounds: number;
};

const BlockGame = ({
  numOfPlayer,
  exercises,
  round,
  timing,
  setRound,
  numOfRounds,
}: blockGameOpt) => {
  const [term, setTerm] = useState(exercises[0]);

  useEffect(() => {
    const index = exercises.indexOf(term);
    console.log(index);
    if (index < exercises.length - 1 && index !== -1) {
      setTimeout(() => {
        setTerm(exercises[index + 1]);
      }, timing);
    } else {
      setTimeout(() => {
        setTerm('Ваш ответ');
      }, timing);
    }
  }, [exercises, term, timing]);

  return (
    <>
      <BlockPlayerHeader numOfPlayer={numOfPlayer} />
      <Row className={classes.gamefieldDisplayNumbers}>
        <BlockTerm term={term} />
      </Row>
      <Row className={classes.gameCounter}>{`${round}/${numOfRounds}`}</Row>
      <Row className={classes.blockAnswer}>
        <input placeholder="Ответ:" type="number" />
        <button onClick={() => setRound(round + 1)}>
          <img src={ArrowIcon} alt="arrow" />
        </button>
      </Row>
      <Row className={classes.coins}>
        <span>5</span>
        <img src={CoinsIcon} alt="coins" />
      </Row>
    </>
  );
};

export default BlockGame;
