import React from 'react';
import classes from './blockplay.module.scss';
// import ModalComponent from '../modal-component/modal-component';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';

const BlockPlay: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <Row className={classes.gameField}>
        <BlockOnePlayer />
        <BlockOnePlayer />
    </Row>
  );
};

export default BlockPlay;
