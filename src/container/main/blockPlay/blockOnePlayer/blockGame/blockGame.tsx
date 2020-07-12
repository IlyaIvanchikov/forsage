import React from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import classes from './blockgame.module.scss';
import { Row } from 'react-bootstrap';
import CoinsIcon from '../../../../../resources/images/Coins.png';
import ArrowIcon from '../../../../../resources/images/Arrow.png';

type blockGameOpt = {
  numOfPlayer: number;
};

const BlockGame = ({ numOfPlayer }: blockGameOpt) => {
  return (
    <>
      <BlockPlayerHeader numOfPlayer={numOfPlayer} />
      <Row className={classes.gamefieldDisplayNumbers}>
        <p>-70000</p>
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
