import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import classes from './signs.module.scss';

const nameButton: string[] = [
  '1 (от 1 до 9)',
  '2 (от 10 до 99)',
  '3 (от 100 до 999)',
  '4 (от 1000 до 9999)',
  '5 (от 10000 до 99999)',
];

export const Signs = (): JSX.Element => {
  return (
    <Container>
      <Row>
        {nameButton.map((item: string, index: number) => (
          <Col xs={12} key={index} className="d-flex justify-content-center">
            <Button key={index} className={classes.btn}>
              {item}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
