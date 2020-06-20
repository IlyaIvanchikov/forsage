import React, { useContext } from 'react';
import classes from './blockParameters.module.scss';
import Parameters from '../../../components/Parameters/parameters';
import owl from '../../../resources/images/main/owl.png';
// import ModalComponent from '../modal-component/modal-component';
import { ParametersContext } from '../main-context';
import { Row, Col, Container } from 'react-bootstrap';
// interface Test {
//   handleSubmit: any;
// }
// handleSubmit={handleShowClick}

const BlockParameters: React.FC = () => {
  const { handleShowClick }: any = useContext(ParametersContext);
  return (
    <Container>
      <Row className="flex-row justify-content-sm-center">
        <Col sm={12} lg={9}>
          <Parameters handleSubmit={handleShowClick} />
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <img src={owl} alt="owl" className={classes.img} />
        </Col>
      </Row>
    </Container>
  );
};

export default BlockParameters;
