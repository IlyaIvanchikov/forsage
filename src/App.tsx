import React from 'react';
import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';
import { makeIn10Orders } from './components/exercisesLogic/ordersLogic/10ordersLogic';

const App = () => {
  console.log(makeIn10Orders(['+6d', '-2'], 3, 1));
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
