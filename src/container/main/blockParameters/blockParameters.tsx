import React, { useContext } from 'react';
import classes from './blockParameters.module.scss';
import Parameters from '../../../components/parameters/parameters';
import owl from '../../../resources/images/main/owl.png';
import { DispatchParametersContext, ParametersContext } from '../main-context';
import { Row, Col, Container } from 'react-bootstrap';
// import { SubmitForm } from '../../../ts/store';
import { StateType } from '../../../container/main/state/reducer';

const BlockParameters: React.FC = () => {
  const { playerParameters }: Partial<StateType> = useContext(
    ParametersContext
  );
  const { handleShowSubmit }: any = useContext(DispatchParametersContext);
  // const { playerParameters } = state;
  return (
    <Container>
      <Row className="flex-row justify-content-sm-center">
        <Col sm={12} lg={9}>
          <Parameters
            handleSubmit={handleShowSubmit}
            playerParameters={playerParameters![0]}
            // state={state}
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
