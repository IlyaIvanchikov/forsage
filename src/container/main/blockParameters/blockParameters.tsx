import React from 'react';
import classes from './blockParameters.module.scss';
import Parameters from '../../../components/Parameters/Parameters';
import owl from '../../../resources/images/main/owl.png';
// import ModalComponent from '../modal-component/modal-component';
import { Row, Col, Container } from 'react-bootstrap';
const BlockParameters: React.FC = () => {
  return (
    <Container>
      <Row className="flex-row justify-content-sm-center">
        <Col sm={12} lg={9}>
          <Parameters />
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <img src={owl} alt="owl" className={classes.img} />
        </Col>
      </Row>
    </Container>
  );
};

export default BlockParameters;
