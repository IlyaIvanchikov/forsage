import React from 'react';
import classes from './main.module.scss';
// import BlockParameters from './blockParameters/blockParameters';
import BlockPlay from './blockPlay/blockPlay';

type showBlockPlay = {
  show: boolean;
  countPlayers: number;
};

const MainView = ({ show, countPlayers }: showBlockPlay) => {
  console.log(countPlayers);
  return (
    <main className={classes.main}>
      {/* {show && <BlockParameters />}
      {!show && <BlockPlay />} */}
      <BlockPlay />
    </main>
  );
};

export default MainView;
