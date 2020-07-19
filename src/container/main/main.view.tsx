import React from 'react';
import classes from './main.module.scss';
// import BlockParameters from './blockParameters/blockParameters';
import BlockPlay from './blockPlay/blockPlay';
// import Loader from '../../components/loader/loader';

type showBlockPlay = {
  show: boolean;
  loading: boolean;
};

const MainView = ({ show, loading }: showBlockPlay) => {
  return (
    <main className={classes.main}>
      {/* {show && <BlockParameters />}
      {!show && loading && <Loader />}
      {!show && !loading && <BlockPlay />} */}
      {<BlockPlay />}
    </main>
  );
};

export default MainView;
