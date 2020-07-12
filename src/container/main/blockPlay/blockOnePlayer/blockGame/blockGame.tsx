import React from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import classes from './blockgame.module.scss';
import { Row } from 'react-bootstrap';
import CoinsIcon from '../../../../../resources/images/Coins.png';
import ArrowIcon from '../../../../../resources/images/Arrow.png';
import { makeExercises } from '../../../../../ts/exerciseLogic/makeExercises';

type blockGameOpt = {
  numOfPlayer: number;
};

const BlockGame = ({ numOfPlayer }: blockGameOpt) => {
  const exercises: any = makeExercises(3, 3, {
    five: ['Любой'],
    ten: ['Любой'],
  });
  return (
    <>
      <BlockPlayerHeader numOfPlayer={numOfPlayer} />
      <Row className={classes.gamefieldDisplayNumbers}>
        <p>{exercises.map((el: any) => el)}</p>
      </Row>
      <Row className={classes.gameCounter}>2/10</Row>
      <Row className={classes.blockAnswer}>
        <input placeholder="Ответ:" type="number" />
        <button onClick={() => alert('Ваш ответ')}>
          <img src={ArrowIcon} alt="" />
        </button>
      </Row>
      <Row className={classes.coins}>
        <span>5</span>
        <img src={CoinsIcon} alt="" />
      </Row>
    </>
  );
};

export default BlockGame;
