import React, { useState } from 'react';
import classes from './main.module.scss';
import ModalComponent from '../modal-component/modal-component';
import { Row, Col, Button } from 'react-bootstrap';

const Main: React.FC = () => {
    const [show, setShow] = useState(true);
    
    return (
    <main className={classes.main}>
        <Row>
        <Col>
        <Button variant="primary" onClick={() => setShow(true)}>
            Launch static backdrop modal
        </Button>
        <ModalComponent showModal={show} />
        </Col>
        </Row>
    </main>
)};

export default Main;
