import React from 'react';
import classes from './blockresults.module.scss';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TableOfPlayerResults from './tableOfPlayerResults/tableOfPlayerResults';
import CloseIcon from '../../../../../resources/images/Close.png';
import ReturnIcon from '../../../../../resources/images/return.svg';

type BlockResProps = {
  showScore: any;
  results: any;
  setResults: any;
  round: any;
  setRound: any;
  setExercises: any;
  exercises: any;
};

const BlockResults = ({
  showScore,
  setResults,
  results,
  round,
  setRound,
  setExercises,
  exercises,
}: BlockResProps) => {
  const gameScorePercent = (results.rightAnswers / results.numOfRounds) * 100;
  return (
    <Col className={classes.resultsBlock}>
      <Row className={classes.resultsHeader}>
        <Col className={classes.left} />
        <Col className={classes.resultsTitle}>
          <h5>Результаты</h5>
        </Col>
        <Col className={classes.right}>
          <a href="/">
            <button>
              <img
                className={classes.resultsIcon}
                alt="В главное меню"
                src={ReturnIcon}
              />
            </button>
          </a>
          <button
            title="Закрыть"
            onClick={() => {
              if (results.gameOver) {
                setResults({
                  numOfRounds: results.numOfRounds,
                  rightAnswers: 0,
                  roundsScore: [],
                });
                setRound(1);
                setExercises(exercises);
              } else {
                setRound(round);
                // setExercises(exercises);
              }
              // setRound(round);
              showScore(false);
            }}
          >
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
            {`${results.rightAnswers} из ${results.numOfRounds} `}
          </p>
          <ProgressBar now={gameScorePercent} />
        </Col>
      </Row>
      <Row>
        <Col className={classes.tableOfResults}>
          <TableOfPlayerResults results={results.roundsScore} />
        </Col>
      </Row>
    </Col>
  );
};

export default BlockResults;
