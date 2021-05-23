import React, { useState, useEffect } from 'react';
import classes from './loader.module.scss';

export interface StandardComponentProps {
  state: string;
}

const Loader = ({ state }: StandardComponentProps) => {
  const [counter, setCounter] = useState<number>(3);

  useEffect(() => {
    counter > 1 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h2
        className="text-center"
        style={{ color: 'black', marginBottom: '15px' }}
      >
        {state === 'axios' ? 'Авторизация...' : `Загрузка: ${counter}`}
      </h2>
      <div className={classes.loader}>
        <div className={classes.loader__uno} />
        <div className={classes.loader__dos} />
        <div className={classes.loader__tres} />
        <div className={classes.loader__cuatro} />
      </div>
    </div>
  );
};

export default Loader;
