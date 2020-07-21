import React from 'react';
import classes from './blockresults.module.scss';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TableOfPlayerResults from './tableOfPlayerResults/tableOfPlayerResults';
import CloseIcon from '../../../../../resources/images/Close.png';

type BlockResProps = {
  showScore: any;
  results: any;
};

const BlockResults = ({ showScore, results }: BlockResProps) => {
  console.log(results);

  const gameScorePercent = (results.rightAnswers / results.numOfRounds) * 100;

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
