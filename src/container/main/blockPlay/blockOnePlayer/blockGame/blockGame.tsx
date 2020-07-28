import React from 'react';
import { useState, useEffect } from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import BlockAnswerIndicate from './blockAnswerIndicate';
// import { makeExercises } from '../../../../../components/exerciseLogic/makeExercises';
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
  numOfRounds: any;
  additional: {
    soundPlay: boolean;
    turboPlay: boolean;
    superTurboPlay: boolean;
  };
};

const BlockGame = ({
  numOfPlayer,
  numOfRounds,
  exercises,
  timing,
  showScore,
  setResults,
  results,
  additional,
}: blockGameOpt) => {
  const delayTermApear = 200;
  const [round, setRound] = useState(1);
  const [resultOfExercise, setResultOfExercise] = useState({
    isRightAnswer: true,
    isRoundComplete: false,
    isShow: false,
  });
  const [disableInput, setDisableInput] = useState(true);
  const [answerText, setAnswerText] = useState('');
  const [term, setTerm] = useState([0, exercises[0][0]]);
  const numOfTerms = exercises[0].length;
  let rez: any;
  if (results.gameOver && !resultOfExercise.isRoundComplete) {
    setResults({ numOfRounds, rightAnswers: 0, roundsScore: [] });
  }

  const handleTextField = (event: any) => {
    setAnswerText(event.target.value);
  };

  useEffect(() => {
    if (resultOfExercise.isShow) {
      setTimeout(() => {
        setResultOfExercise({
          isRightAnswer: true,
          isRoundComplete: false,
          isShow: false,
        });
      }, 3000);
    }
  }, [resultOfExercise]);

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
    rez = results;
    event.preventDefault();
    let isRightAnswer;
    if (+answerText === +exercises[round - 1][numOfTerms - 1]) {
      isRightAnswer = true;
      rez.rightAnswers++;
    } else {
      isRightAnswer = false;
    }
    if (!rez.roundsScore[round - 1])
      rez.roundsScore.push({ exercise: exercises[round - 1], answer: 0 });
    if (round < numOfRounds) {
      rez.roundsScore[round - 1].answer = +answerText;
      setResultOfExercise({
        isRightAnswer,
        isRoundComplete: false,
        isShow: true,
      });
      // indacateResult(isRightAnswer, false);
      setTimeout(() => {
        setRound(round + 1);
        setTerm([0, exercises[round][0]]);
      }, 3000);
    } else {
      rez.roundsScore[round - 1].answer = +answerText;
      setResultOfExercise({
        isRightAnswer,
        isRoundComplete: true,
        isShow: true,
      });
      rez.gameOver = 1;
      setTimeout(() => {
        setResults(rez);
        showScore(true);
      }, 2000);
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
        setResults={setResults}
        setRound={setRound}
        setResultOfExercise={setResultOfExercise}
        setTerm={setTerm}
        exercises={exercises}
      />
      <Row className={classes.gamefieldDisplayNumbers}>
        <BlockAnswerIndicate resultOfExercise={resultOfExercise} />
        <BlockTerm
          timing={timing}
          numOfTerms={numOfTerms - 1}
          term={term}
          additional={additional}
        />
      </Row>
      <Row className={classes.gameCounter}>{`${round}/${numOfRounds}`}</Row>
      <Row className={classes.blockAnswer}>
        <form id="answerForm" onSubmit={handleSendAnswer}>
          <input
            onChange={handleTextField}
            style={disableInput ? { backgroundColor: 'lightgrey' } : {}}
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
        <span>{results.rightAnswers}</span>
        <img src={CoinsIcon} alt="coins" />
      </Row>
    </>
  );
};

export default BlockGame;
