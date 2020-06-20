import React from 'react';
import classes from './main.module.scss';
// import { Row, Col, Button } from 'react-bootstrap';
import BlockParameters from './blockParameters/blockParameters';
import BlockPlay from './blockPlay/blockPlay';
type show = {
  show: boolean;
};
const MainView = ({ show }: show) => {
  return (
    <main className={classes.main}>
      {show && <BlockParameters />}
      {!show && <BlockPlay />}
    </main>
  );
};

export default MainView;
