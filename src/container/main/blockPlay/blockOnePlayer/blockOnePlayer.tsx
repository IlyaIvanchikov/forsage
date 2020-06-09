import React from 'react';
import classes from './blockoneplayer.module.scss';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import { Col, Row } from 'react-bootstrap';
import CoinsIcon from '../../../../resources/images/Coins.png';
import ArrowIcon from '../../../../resources/images/Arrow.png';

const BlockOnePlayer: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <Col className={classes.onePlayerField}>
      <BlockPlayerHeader />
      <Row className={classes.gamefieldDisplayNumbers}>
        <p>7</p>
      </Row>
      <Row className={classes.gameCounter}>2/10</Row>
      <Row className={classes.blockAnswer}>
        <input placeholder="Ответ:" type="text" />
        <button onClick={() => alert('Ваш ответ')}>
          <img src={ArrowIcon} alt="" />
        </button>
      </Row>
      <Row className={classes.coins}>
        <span>5</span>
        <img src={CoinsIcon} alt="" />
      </Row>
    </Col>
  );
};

export default BlockOnePlayer;
