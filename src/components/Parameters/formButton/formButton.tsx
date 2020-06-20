import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import classes from './formButton.module.scss';
import { TitleParameters } from './../../../ts/store';

const FormButton = ({ title }: TitleParameters) => {
  return (
    <Form.Group as={Row} controlId="formPlaintextButton" className="mb-1">
      <Form.Label column={true} sm="7">
        {title}
      </Form.Label>
      <Col sm="5" className="d-flex align-items-center">
        <Form.Control
          type="Button"
          className={classes.formControlButton}
          value="1игрок"
        />
      </Col>
    </Form.Group>
  );
};

export default FormButton;
