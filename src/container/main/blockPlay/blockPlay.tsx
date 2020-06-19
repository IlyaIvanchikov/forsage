import React from 'react';
import classes from './blockplay.module.scss';
// import ModalComponent from '../modal-component/modal-component';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import Blockresults from './blockResults/blockResults';
import { Row } from 'react-bootstrap';

const BlockPlay: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <>
      <Row className={classes.gameField}>
        <BlockOnePlayer />
        <BlockOnePlayer />
        {/* <BlockOnePlayer /> */}
        <Blockresults />
        <Blockresults />
      </Row>
      {/* <Row className={classes.gameField}>
        <BlockOnePlayer />
        <BlockOnePlayer />
      </Row> */}
    </>
  );
};

export default BlockPlay;
