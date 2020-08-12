import React from 'react';
import classes from './App.module.scss';
// import { Button, Container, Row, Col } from 'react-bootstrap';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';
import { viewOrders } from './components/exerciseLogic/testOrders';

const App = () => {
  viewOrders();

  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
