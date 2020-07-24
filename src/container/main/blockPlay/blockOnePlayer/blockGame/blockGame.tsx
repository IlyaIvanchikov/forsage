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
  showScore: any;
  setResults: any;
  results: any;
};

const BlockGame = ({
  numOfPlayer,
  exercises,
  timing,
  showScore,
  setResults,
  results,
}: blockGameOpt) => {
  const delayTermApear = 200;
  const [round, setRound] = useState(1);
  const [disableInput, setDisableInput] = useState(true);
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
      }, timing + delayTermApear);
    } else if (term[0] !== 100) {
      setTerm([100, '???']);
      setDisableInput(false);
    }
  }, [exercises, round, term, timing, numOfTerms]);

  const handleSendAnswer = (event: any) => {
    const rez = results;
    event.preventDefault();
    let resultText = '';
    +answerText === +exercises[round - 1][numOfTerms - 1]
      ? (resultText = 'Верно!')
      : (resultText = 'Ошибка!');
    if (!rez.roundsScore[round - 1])
      rez.roundsScore.push({ exercise: exercises[round - 1], answer: 0 });
    if (round < numOfRounds) {
      rez.roundsScore[round - 1].answer = +answerText;
      alert(resultText + ' Начинаем следующий раунд');
      setRound(round + 1);
      setTerm([0, exercises[round][0]]);
    } else {
      rez.roundsScore[round - 1].answer = +answerText;
      alert(resultText + ' Игра окончена. Ваши результаты');
      setResults(rez);
      showScore(true);
    }
    setAnswerText('');
    setDisableInput(true);
  };

  return (
    <>
      <BlockPlayerHeader
        showScore={showScore}
        numOfPlayer={numOfPlayer}
        disableInput={disableInput}
      />
      <Row className={classes.gamefieldDisplayNumbers}>
        <BlockTerm timing={timing} numOfTerms={numOfTerms - 1} term={term} />
      </Row>
      <Row className={classes.gameCounter}>{`${round}/${numOfRounds}`}</Row>
      <Row className={classes.blockAnswer}>
        <form id="answerForm" onSubmit={handleSendAnswer}>
          <input
            onChange={handleTextField}
            disabled={disableInput}
            required={true}
            value={answerText}
            placeholder="Ответ:"
            type="number"
          />
          <button type="submit" disabled={disableInput}>
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
