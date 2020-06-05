import React from 'react';
import classes from './footer.module.scss';
import { Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className={classes.footer}>
    <Row>
      <Col>Text</Col>
      <Col>
        <h1>Форсаж</h1>
      </Col>
      <Col></Col>
    </Row>
  </footer>
);

export default Footer;
