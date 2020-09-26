import React from 'react';
import classes from './header.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../../resources/images/header/logo.svg';
import arrow from '../../resources/images/header/arrow.svg';
import dumbbells from '../../resources/images/header/dumbbells.svg';

const Header: React.FC = () => (
  <Container fluid={true} className={classes.container}>
    <Row className={classes.row}>
      <Col className="flex-row justify-content-start align-items-center d-none d-sm-flex">
        <div className={classes.logo}>
          <a href="https://pifagoriyatsk.ru/forsage/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </Col>
      <Col className="flex-row justify-content-center align-items-center d-none d-md-flex">
        <img src={arrow} alt="arrow" />
        <h1>Форсаж</h1>
      </Col>
      <Col className="d-flex flex-row justify-content-sm-end align-items-center justify-content-center">
        <a href="https://pifagoriyatsk.ru/forsage/">
          <img className={classes.dumbbells} src={dumbbells} alt="brain" />
          К&nbsp;тренажерам
        </a>
      </Col>
    </Row>
  </Container>
);

export default Header;
