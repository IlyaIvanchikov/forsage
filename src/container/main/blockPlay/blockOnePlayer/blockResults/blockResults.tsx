import React from 'react';
import classes from './blockresults.module.scss';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TableOfPlayerResults from './tableOfPlayerResults/tableOfPlayerResults'
import CloseIcon from '../../../../../resources/images/Close.png';

const gameData = {
  numOfRounds: 10,
  rightAnswers: 4,
  playerName: 'Дима',
  roundsScore: [
    {
      exercise: '7 + 9 - 2 + 4',
      answer: 10,
      righrAnswer: 18,
    },
    {
      exercise: '7 + 9 - 2 + 4',
      answer: 10,
      righrAnswer: 16,
    },
    {
      exercise: '7 + 9 - 2 + 4',
      answer: 10,
      righrAnswer: 11,
    },
    {
      exercise: '7 + 9 - 2 + 4',
      answer: 10,
      righrAnswer: 18,
    },
    {
      exercise: '7 + 9 - 2 + 4',
      answer: 10,
      righrAnswer: 19,
    },
  ],
};

const BlockResults: React.FC = () => {
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
          <button title="Закрыть" onClick={() => alert('Close')}>
            <img
              className={classes.resultsIcon}
              alt="Закрыть"
              src={CloseIcon}
            />
          </button>
        </Col>
      </Row>
      <Row className={classes.resultsSubTitle}>
        <h6>{gameData.playerName}</h6>
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
