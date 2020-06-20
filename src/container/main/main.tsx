import React from 'react';
import classes from './main.module.scss';
// import { Row, Col, Button } from 'react-bootstrap';
// import BlockParameters from './blockParameters/blockParameters';
import BlockPlay from './blockPlay/blockPlay';
const Main: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <main className={classes.main}>
      {/* <BlockParameters /> */}
      <BlockPlay />
    </main>
  );
};

export default Main;
