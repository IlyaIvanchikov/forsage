import React, { useState } from 'react';
import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';
import Loader from './components/loader/loader';
import Auth from './components/auth/auth';

const isLocked = true; // переключатель авторизации. Закрыто или открыто

const App = () => {
  const [auth, setAuth] = useState<boolean>(!isLocked);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorAuth, setErrorAuth] = useState<boolean>(false);
  const token = localStorage.getItem('token');
  if (token && !auth) {
    setAuth(true);
  }

  return (
    <div className={classes.wrapper}>
      <Header setAuth={setAuth} setErrorAuth={setErrorAuth} />
      {!auth && isLoading && (
        <div className={classes.loader}>
          <Loader state="axios" />
        </div>
      )}
      {auth && <Main />}
      {!auth && !isLoading && (
        <Auth
          setAuth={setAuth}
          setIsLoading={setIsLoading}
          setErrorAuth={setErrorAuth}
          errorAuth={errorAuth}
          isLoading={isLoading}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
