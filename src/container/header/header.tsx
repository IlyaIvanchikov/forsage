import React from 'react';
import classes from './header.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../../resources/images/header/logo.svg';
import arrow from '../../resources/images/header/arrow.svg';
import logout from '../../resources/images/header/logout.svg';

const DEFAULT_NAME = 'дорогой друг';
const GREETINGS = 'Здравствуй, ';

interface HandleParamsAuth {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorAuth: React.Dispatch<React.SetStateAction<boolean>>;
}


const Header = ({ setAuth, setErrorAuth }: HandleParamsAuth) => {

  const handleExit = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setErrorAuth(false);
    setAuth(false);
  };

  const name = localStorage.getItem('name') || DEFAULT_NAME;

  const logoutComponent = (
    <div className={classes.logo} onClick={handleExit}>
      <img src={logout} title="Выход" alt="Выход" />
    </div>
  );

  return (
    <Container fluid={true} className={classes.container}>
      <Row className={classes.row}>
        <Col className="flex-row justify-content-start align-items-center d-none d-md-flex">
          <div className={classes.logo}>
            <a href="/">
              <img
                src={logo}
                title="Центр развития интеллекта Пифагория"
                alt="Логотип Пифагория"
              />
            </a>
          </div>
        </Col>
        <Col className="flex-row justify-content-center align-items-center d-none d-lg-flex">
          <img src={arrow} alt="arrow" />
          <h1 title="Тренажер по ментальной арифметике Форсаж">Форсаж</h1>
        </Col>
        <Col className="d-flex flex-row justify-content-sm-end align-items-center justify-content-center">
          <h3 className={classes.header__greetings}>{GREETINGS + name}!</h3>
          {name !== DEFAULT_NAME && logoutComponent}
        </Col>
      </Row>
    </Container>
  );
}


export default Header;
