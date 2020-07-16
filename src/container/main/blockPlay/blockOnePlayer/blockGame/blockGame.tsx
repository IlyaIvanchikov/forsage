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
  timing: number;
};

const BlockGame = ({ numOfPlayer, exercises, timing }: blockGameOpt) => {
  timing += 200;
  const [round, setRound] = useState(1);
  const [answerText, setAnswerText] = useState('');
  const [term, setTerm] = useState([0, exercises[0][0]]);
  const numOfRounds = exercises.length;
  const numOfTerms = exercises[0].length;

  const handleTextField = (event: any) => {
    setAnswerText(event.target.value);
  };

  useEffect(() => {
    if (term[0] < numOfTerms - 1) {
      setTimeout(() => {
        setTerm([term[0] + 1, exercises[round - 1][term[0] + 1]]);
      }, timing);
    } else if (term[0] !== 100) {
      setTerm([100, 'Ваш ответ']);
    }
  }, [exercises, round, term, timing, numOfTerms]);

  const handleSendAnswer = (event: any) => {
    event.preventDefault();
    let resultText = '';
    +answerText === +exercises[round - 1][numOfTerms - 1]
      ? (resultText = 'Верно!')
      : (resultText = 'Ошибка!');
    if (round < numOfRounds) {
      alert(resultText + ' Начинаем следующий раунд');
      setRound(round + 1);
      setTerm([0, exercises[round][0]]);
    } else {
      alert(resultText + ' Игра окончена. Ваши результаты');
    }
    setAnswerText('');
  };

  return (
    <>
      <BlockPlayerHeader numOfPlayer={numOfPlayer} />
      <Row className={classes.gamefieldDisplayNumbers}>
        <BlockTerm timing={timing} numOfTerms={numOfTerms - 1} term={term} />
      </Row>
      <Row className={classes.gameCounter}>{`${round}/${numOfRounds}`}</Row>
      <Row className={classes.blockAnswer}>
        <form id="answerForm" onSubmit={handleSendAnswer}>
          <input
            onChange={handleTextField}
            required={true}
            value={answerText}
            placeholder="Ответ:"
            type="number"
          />
          <button type="submit">
            <img src={ArrowIcon} alt="arrow" />
          </button>
        </form>
      </Row>
      <Row className={classes.coins}>
        <span>5</span>
        <img src={CoinsIcon} alt="coins" />
      </Row>
    </>
  );
};

export default BlockGame;
