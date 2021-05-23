import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import classes from './formButton.module.scss';
import { TitleParameters } from '../../../ts/store';

const FormButton = ({
  title,
  handleModalClick,
  nameButton,
}: TitleParameters) => {
  return (
    <Form.Group as={Row} controlId="formPlaintextButton" className="mb-1">
      <Form.Label column={true} sm="7">
        {title}
      </Form.Label>
      <Col sm="5" className="d-flex align-items-center">
        <Button onClick={handleModalClick} className={classes.formButton}>
          {nameButton}
        </Button>
      </Col>
    </Form.Group>
  );
};

export default FormButton;
