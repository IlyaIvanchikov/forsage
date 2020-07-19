import React from 'react';
import classes from './blockresults.module.scss';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TableOfPlayerResults from './tableOfPlayerResults/tableOfPlayerResults';
import CloseIcon from '../../../../../resources/images/Close.png';

const gameData = {
  numOfRounds: 10,
  rightAnswers: 4,
  playerName: 'Дима',
  roundsScore: [
    {
      exercise: [7, -6, 9, -2],
      answer: 15,
      rightAnswer: 10,
      isRight: false,
    },
    {
      exercise: [7, 5, 1, 9],
      answer: 14,
      rightAnswer: 9,
      isRight: false,
    },
    {
      exercise: [6, -11, 5, -4],
      answer: 7,
      rightAnswer: 7,
      isRight: false,
    },
    {
      exercise: [6, 7, -5, -4],
      answer: 11,
      rightAnswer: 11,
      isRight: true,
    },
  ],
};

type BlockResProps = {
  showScore: any;
};

const BlockResults = ({ showScore }: BlockResProps) => {
  function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  gameData.rightAnswers = getRandomIntInclusive(1, 10);

  const gameScorePercent = (gameData.rightAnswers / gameData.numOfRounds) * 100;

  return (
    <Col className={classes.resultsBlock}>
      <Row className={classes.resultsHeader}>
        <Col className={classes.left}></Col>
        <Col className={classes.resultsTitle}>
          <h5>Результаты</h5>
        </Col>
        <Col className={classes.right}>
          <button title="Закрыть" onClick={() => showScore(false)}>
            <img
              className={classes.resultsIcon}
              alt="Закрыть"
              src={CloseIcon}
            />
          </button>
        </Col>
      </Row>
      <Row className={classes.resultsSubTitle}>
        <h6>Игрок 1</h6>
      </Row>
      <Row className={classes.visualResults}>
        <span>Правильно:</span>
        <Col className={classes.visualResultsPogress}>
          <p className={classes.relResult}>
            {`${gameData.rightAnswers} из ${gameData.numOfRounds} `}
          </p>
          <ProgressBar now={gameScorePercent} />
        </Col>
      </Row>
      <Row>
        <Col className={classes.tableOfResults}>
          <TableOfPlayerResults />
        </Col>
      </Row>
    </Col>
  );
};

export default BlockResults;
