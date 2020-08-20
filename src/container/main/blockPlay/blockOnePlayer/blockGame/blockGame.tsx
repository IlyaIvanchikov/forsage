import React from 'react';
import { useState, useEffect, useRef } from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import BlockAnswerIndicate from './blockAnswerIndicate';
import classes from './blockgame.module.scss';
import { Row } from 'react-bootstrap';
import BlockTerm from './blockTerm';
import CoinsIcon from '../../../../../resources/images/Coins.png';
import ArrowIcon from '../../../../../resources/images/Arrow.png';
import getRandomIntInclusive from '../../../../../components/exercisesLogic/extraFunctions/getRandomIntInclusive';
import { makeFirstTerm } from '../../../../../components/exercisesLogic/makeTerms/firstTerm';
import { voiceActing } from '../../../../../components/voiceActing/voiceActing';

type blockGameOpt = {
  setNewExercises: any;
  results: any;
  setResults: any;
  round: number;
  setRound: any;
  numOfPlayer: number;
  exercises: any;
  digits: number;
  timing: number;
  showScore: any;
  numOfRounds: any;
  additional: {
    soundPlay: boolean;
    turboPlay: boolean;
    superTurboPlay: boolean;
  };
};

const BlockGame = ({
  numOfPlayer,
  setNewExercises,
  numOfRounds,
  exercises,
  timing,
  showScore,
  additional,
  digits,
  round,
  setRound,
  results,
  setResults,
}: blockGameOpt) => {
  const answerRef = useRef<HTMLInputElement | null>(null);
  const superTyrboPlay = additional.superTurboPlay;
  const [isRealNumber, setIsRealNumber] = useState(true);
  const [randomNumber, setRandomNumber] = useState(getRandomIntInclusive(0, 1));
  const delayTermApear = 200;
  const [resultOfExercise, setResultOfExercise] = useState({
    isRightAnswer: true,
    isRoundComplete: false,
    isShow: false,
  });
  const [disableInput, setDisableInput] = useState(true);
  const [answerText, setAnswerText] = useState('');
  const [term, setTerm] = useState([0, exercises[round - 1][0]]);
  const [currentNumber, setCurrentNumber] = useState(-1);
  const numOfTerms = exercises[0].length;
  let rez: any;
  // if (
  //   term[0] !== 100 &&
  //   term[0] !== numOfTerms - 1 &&
  //   !resultOfExercise.isShow &&
  //   additional.soundPlay
  // ) {
  //   console.log(term[1]);
  //   // voiceActing(5);
  // }
  // voiceActing(5);
  const handleTextField = (event: any) => {
    setAnswerText(event.target.value);
  };

  useEffect(() => {
    if (numOfPlayer === 1) {
      answerRef.current?.focus();
    }
  });

  useEffect(() => {
    if (
      term[0] !== numOfTerms - 1 &&
      !resultOfExercise.isShow &&
      additional.soundPlay
    ) {
      voiceActing(term[1]);
    }
  }, [resultOfExercise, term]);

  useEffect(() => {
    if (resultOfExercise.isShow && !results.gameOver) {
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
    if (term[0] < numOfTerms - 1 && randomNumber === 1 && superTyrboPlay) {
      setTimeout(() => {
        setRandomNumber(getRandomIntInclusive(0, 1));
        setTerm(
          term.map((item, index: number) =>
            index === 1 ? makeFirstTerm(digits) : item
          )
        );
      }, timing + delayTermApear);
    } else if (
      (term[0] < numOfTerms - 1 && randomNumber === 0 && superTyrboPlay) ||
      (term[0] < numOfTerms - 1 && !superTyrboPlay)
    ) {
      setRandomNumber(getRandomIntInclusive(0, 1));
      setTimeout(() => {
        setTerm([term[0] + 1, exercises[round - 1][term[0] + 1]]);
      }, timing + delayTermApear - 50);
    } else if (term[0] !== 100) {
      setTerm([100, '???']);
      setDisableInput(false);
    }

    if (currentNumber !== term[0]) {
      setCurrentNumber(term[0]);
      setIsRealNumber(true);
    } else if (currentNumber === term[0]) {
      setIsRealNumber(false);
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
      setTimeout(() => {
        setRound(round + 1);
        setTerm([0, exercises[round][0]]);
        setCurrentNumber(-1);
        setIsRealNumber(true);
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
        setCurrentNumber={setCurrentNumber}
        setIsRealNumber={setIsRealNumber}
        setNewExercises={setNewExercises}
      />
      <Row className={classes.gamefieldDisplayNumbers}>
        <BlockAnswerIndicate resultOfExercise={resultOfExercise} />
        <BlockTerm
          timing={timing}
          numOfTerms={numOfTerms - 1}
          term={term}
          additional={additional}
          randomNumber={isRealNumber === true ? 0 : 1}
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
            ref={answerRef}
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
