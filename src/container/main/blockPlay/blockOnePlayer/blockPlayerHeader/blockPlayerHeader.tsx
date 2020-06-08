import React from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';

const BlockPlayerHeader: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <Row className={classes.playerHeader}>
      <Col className={classes.threePoints}>
        <button>&bull; &bull; &bull;</button>
      </Col>
      <Col className={classes.playerTitle}>Игрок 1</Col>
      <Col className={classes.iconBlock}>
        <a href="/">
          <img
            className={classes.resultsIcon}
            alt="Results"
            src={ResultsIcon}
          />
        </a>
      </Col>
    </Row>
  );
};

export default BlockPlayerHeader;
