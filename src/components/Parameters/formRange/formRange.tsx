import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import classes from './formRange.module.scss';
import { RangeParameters } from '../../../ts/store';

const FormRange = ({
  title,
  min,
  max,
  step,
  currentParametersRange,
  setValueRange,
}: RangeParameters) => {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValueRange(Number(e.target.value));
  };

  return (
    <Form.Group
      as={Row}
      controlId={`formPlaintextRange${min}`}
      className="mb-1"
    >
      <Form.Label column={true} sm="6">
        {title}
      </Form.Label>
      <Col sm="6" className={classes.colRange}>
        <p className={classes.colRange__pLeft}>{min}</p>
        <p className={classes.colRange__pCenter}>{currentParametersRange}</p>
        <Form.Control
          type="range"
          placeholder="range"
          className={classes.colRange__formControl}
          min={min}
          max={max}
          step={step}
          value={currentParametersRange}
          onChange={handleRangeChange}
        />
        <p className={classes.colRange__pRight}>{max}</p>
      </Col>
    </Form.Group>
  );
};

export default FormRange;
