import React from 'react';
import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
