import React from 'react';
import classes from './main.module.scss';
// import { Row, Col, Button } from 'react-bootstrap';

// import BlockParameters from './../../components/blockParameters/blockParameters';
import BlockPlay from './blockPlay/blockPlay';
const Main: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <main className={classes.main}>
      {/* <BlockParameters /> */}
      <BlockPlay />
      {/* <Container className={classes.container}>
        <h2 className="text-center">Выберите параметры:</h2>
        <Row>
          <Col>Количество игроков:</Col>
          <Col>
            <button className={classes}>1 игрок</button>
          </Col>
        </Row>
        <Row>
          <Col>Скорость:</Col>
          <Col>Test2</Col>
        </Row>
        <Row>
          <Col>Количество знаков:</Col>
          <Col>Test2</Col>
        </Row>
        <Row>
          <Col>Количество примеров:</Col>
          <Col>Test2</Col>
        </Row>
        <Row>
          <Col>Количество цифр в примере</Col>
          <Col>Test2</Col>
        </Row>
        <Row>
          <Col>Законы</Col>
          <Col>Test2</Col>
        </Row>
        <Row>
          <Col>Дополнительные настройки</Col>
          <Col>Test2</Col>
        </Row>
      </Container> */}
    </main>
  );
};

export default Main;
