import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import classes from './formRange.module.scss';
import { TitleParameters } from './../../../ts/store';

const FormRange = ({ title }: TitleParameters) => {
  const [valueRange, setValueRange] = useState<string>('0.3');
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValueRange(e.target.value);
  };
  return (
    <Form.Group as={Row} controlId="formPlaintextRange" className="mb-1">
      <Form.Label column={true} sm="6">
        {title}
      </Form.Label>
      <Col sm="6" className={classes.colRange}>
        <p className={classes.colRange__pLeft}>0.3</p>
        <p className={classes.colRange__pCenter}>{valueRange}</p>
        <Form.Control
          type="range"
          placeholder="range"
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
  );
};

export default FormRange;
