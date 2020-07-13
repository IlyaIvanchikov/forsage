import React, { useContext } from 'react';
import classes from './main.module.scss';
import BlockParameters from './blockParameters/blockParameters';
import BlockPlay from './blockPlay/blockPlay';
import { ParametersContext } from './main-context';

type showBlockPlay = {
  show: boolean;
  countPlayers: number;
};

const MainView = ({ show, countPlayers }: showBlockPlay) => {
  const { state } = useContext(ParametersContext);
  console.log(countPlayers, state);
  return (
    <main className={classes.main}>
      {show && <BlockParameters />}
      {!show && <BlockPlay countPlayers={countPlayers} />}
      {/* <BlockPlay /> */}
    </main>
  );
};

export default MainView;
