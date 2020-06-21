import React from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';

const gameData = {
  playerName: "Любочка"
}

const BlockPlayerHeader: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <Row className={classes.playerHeader}>
      <Col className={classes.threePoints}>
        <button title="Настройки" onClick={() => alert('hello')}>
          &bull; &bull; &bull;
        </button>
      </Col>
      <Col className={classes.playerTitle}>{gameData.playerName}</Col>
      <Col className={classes.iconBlock}>
        <button title="Статистика" onClick={() => alert('hello')}>
          <img
            className={classes.resultsIcon}
            alt="Results"
            src={ResultsIcon}
          />
        </button>
      </Col>
    </Row>
  );
};

export default BlockPlayerHeader;
