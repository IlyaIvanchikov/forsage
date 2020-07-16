import React, { useContext } from 'react';
import classes from './main.module.scss';
import BlockParameters from './blockParameters/blockParameters';
import BlockPlay from './blockPlay/blockPlay';
import Loader from '../../components/loader/loader';
import { ParametersContext } from './main-context';

type showBlockPlay = {
  show: boolean;
  countPlayers: number;
  loading: boolean;
};

const MainView = ({ show, countPlayers, loading }: showBlockPlay) => {
  const { state } = useContext(ParametersContext);
  console.log(countPlayers, state, loading);
  return (
    <main className={classes.main}>
      {show && <BlockParameters />}
      {!show && loading && <Loader />}
      {!show && !loading && <BlockPlay />}
    </main>
  );
};

export default MainView;
