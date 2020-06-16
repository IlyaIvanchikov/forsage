import React, { useState } from 'react';
import classes from './Parameters.module.scss';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropdown from './dropdown/dropdown';
// import ModalComponent from '../modal-component/modal-component';
// import { Row, Col, Container } from 'react-bootstrap';
const Parameters: React.FC = () => {
  const [valueRange, setValueRange] = useState<string>('0.3');
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueRange(e.target.value);
  };
  return (
    <Form className={classes.form}>
      <h2 className="text-center">Выберите параметры:</h2>
      <Form.Group as={Row} controlId="formPlaintextButton">
        <Form.Label column={true} sm="7">
          Количество игроков:
        </Form.Label>
        <Col sm="5" className="d-flex align-items-center">
          <Form.Control
            type="Button"
            className={classes.formControlButton}
            value="1игрок"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextRange">
        <Form.Label column={true} sm="6">
          Скорость:
        </Form.Label>
        <Col sm="6" className={classes.colRange}>
          <p className={classes.colRange__pLeft}>0.3</p>
          <p className={classes.colRange__pCenter}>{valueRange}</p>
          <Form.Control
            type="range"
            placeholder="range"
            // custom={true}
            className={classes.colRange__formControl}
            min="0.3"
            max="5"
            step="0.1"
            value={valueRange}
            onChange={handleRangeChange}
          />
          <p className={classes.colRange__pRight}>5</p>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextButton">
        <Form.Label column={true} sm="7">
          Количество знаков:
        </Form.Label>
        <Col sm="5" className="d-flex align-items-center">
          <Form.Control
            type="Button"
            className={classes.formControlButton}
            value="1игрок"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextRange">
        <Form.Label column={true} sm="6">
          Количество примеров:
        </Form.Label>
        <Col sm="6" className={classes.colRange}>
          <p className={classes.colRange__pLeft}>1</p>
          <p className={classes.colRange__pCenter}>{valueRange}</p>
          <Form.Control
            type="range"
            placeholder="range"
            // custom={true}
            className={classes.colRange__formControl}
            min="0.3"
            max="5"
            step="0.1"
            value={valueRange}
            onChange={handleRangeChange}
          />
          <p className={classes.colRange__pRight}>40</p>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextRange">
        <Form.Label column={true} sm="6">
          Количество цифр в примере:
        </Form.Label>
        <Col sm="6" className={classes.colRange}>
          <p className={classes.colRange__pLeft}>1</p>
          <p className={classes.colRange__pCenter}>{valueRange}</p>
          <Form.Control
            type="range"
            placeholder="range"
            // custom={true}
            className={classes.colRange__formControl}
            min="0.3"
            max="5"
            step="0.1"
            value={valueRange}
            onChange={handleRangeChange}
          />
          <p className={classes.colRange__pRight}>20</p>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextButton">
        <Form.Label column={true} sm="7">
          Законы:
        </Form.Label>
        <Col sm="5" className="d-flex align-items-center">
          <Form.Control
            type="Button"
            className={classes.formControlButton}
            value="1игрок"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextButton">
        <Form.Label column={true} sm="7">
          <Dropdown />
        </Form.Label>
        <Col sm="5" className="d-flex align-items-center">
          <Button
            type="submit"
            className={classes.formControlButton}
            style={{ width: '80%', height: '50%' }}
          >
            Начать
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Parameters;
