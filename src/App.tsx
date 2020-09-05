import React from 'react';
import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';
import { testOrdersFunc } from './components/exercisesLogic/test/testOrders';

const App = () => {
  for (let i = 0; i < 9; i++) {
    testOrdersFunc(i);
  }

  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
