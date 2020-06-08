import React from 'react';
import classes from './blockoneplayer.module.scss';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import { Col, Row } from 'react-bootstrap';

const BlockOnePlayer: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <Col className={classes.onePlayerField}>
      <BlockPlayerHeader />
      <Row className={classes.gamefieldDisplayNumbers}>
        <p>7</p>
      </Row>
      <Row className={classes.blockAnswer}>
        <p>Счет игры</p>
        <input type="text" />
      </Row>
      <Row className={classes.coins}>
        <p>Монетки</p>
      </Row>
    </Col>
  );
};

export default BlockOnePlayer;
