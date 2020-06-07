import React, { Fragment } from 'react';
// import classes from './App.module.scss';
// import { Button, Container, Row, Col } from 'react-bootstrap';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';

const App = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />
  </Fragment>
);

export default App;
