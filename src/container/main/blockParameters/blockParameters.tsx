import React, { useContext } from 'react';
import classes from './blockParameters.module.scss';
import Parameters from '../../../components/parameters/parameters';
import owl from '../../../resources/images/main/owl.png';
import { DispatchParametersContext } from '../main-context';
import { Row, Col, Container } from 'react-bootstrap';

const BlockParameters: React.FC = () => {
  // const { state }: any = useContext(ParametersContext);
  const { handleShowSubmit }: any = useContext(DispatchParametersContext);
  // const { playerParameters } = state;
  return (
    <Container>
      <Row className="flex-row justify-content-sm-center">
        <Col sm={12} lg={9}>
          <Parameters
            handleSubmit={handleShowSubmit}
            // params={playerParameters}
          />
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <img src={owl} alt="owl" className={classes.img} />
        </Col>
      </Row>
    </Container>
  );
};

export default BlockParameters;
