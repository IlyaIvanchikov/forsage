import React from 'react';
import classes from './blockresults.module.scss';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Blockresults: React.FC = () => {
  // const [show, setShow] = useState(false);
  const rounds = 7;
  const rightAnsers = 5;
  const percent = (rightAnsers / rounds) * 100;

  return (
    <Col className={classes.resultsField}>
      <Row className={classes.resultsHeader}>
        <h5>Результаты</h5>
        <h5>Игрок 1</h5>
        <button onClick={() => alert('close')}>&times;</button>
      </Row>
      <Row className={classes.resultsBar}>
        <Col>
          <h6>Правильно:</h6>
          <ProgressBar now={percent} />
          <span>7</span>
        </Col>
      </Row>
    </Col>
  );
};

export default Blockresults;
