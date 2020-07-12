import React, { useContext } from 'react';
import classes from './blockParameters.module.scss';
import Parameters from '../../../components/Parameters/Parameters';
import owl from '../../../resources/images/main/owl.png';
import { ParametersContext, UsuallyContext } from '../main-context';
import { Row, Col, Container } from 'react-bootstrap';
import { UsuallyProps } from '../../../ts/store';
// import { StateType } from '../../../container/main/state/reducer';

const BlockParameters: React.FC = () => {
  const { state } = useContext(ParametersContext);
  const { handleShowSubmit }: UsuallyProps = useContext(UsuallyContext);
  return (
    <Container>
      <Row className="flex-row justify-content-sm-center">
        <Col sm={12} lg={9}>
          <Parameters
            handleSubmit={handleShowSubmit}
            playerParameters={state.playerParameters[0]}
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
