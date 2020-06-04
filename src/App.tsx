import React from 'react';
import classes from './App.module.scss';
import { Button, Container, Row, Col } from 'react-bootstrap';

const App = () => (
  <Container>
    <Row>
      <Col>
        <header>
          <p className={classes.test}>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button variant="danger">Show Custom Styled Alert</Button>
        </header>
      </Col>
    </Row>
  </Container>
);

export default App;
