import React from 'react';
import classes from './header.module.scss';
import { Row, Col } from 'react-bootstrap';

const Header: React.FC = () => (
  <div className={classes.header}>
    <Row>
      <Col></Col>
      <Col>
        <h1>Форсаж</h1>
      </Col>
      <Col></Col>
    </Row>
  </div>
);

export default Header;
