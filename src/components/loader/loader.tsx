import React from 'react';
import classes from './loader.module.scss';

const Loader: React.FC = () => {
  return (
    // <div className={classes.loader}>
    //   <div />
    // </div>
    <div className={classes.loader}>
      <div className={classes.loader__uno} />
      <div className={classes.loader__dos} />
      <div className={classes.loader__tres} />
      <div className={classes.loader__cuatro} />
    </div>
  );
};

export default Loader;
