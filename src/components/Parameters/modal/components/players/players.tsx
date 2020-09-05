import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import classes from './players.module.scss';
import smile from '../../../../../resources/images/modal/smile.svg';
import girl from '../../../../../resources/images/modal/girl.svg';
import cute from '../../../../../resources/images/modal/cute.svg';
import freckles from '../../../../../resources/images/modal/freckles.svg';
import { ButtonID } from './../../../../../ts/store';

interface NameButton {
  items: NameButtonItem[];
}

interface NameButtonItem {
  name: string;
  id: number;
  url: string;
}

const nameButton: NameButton = {
  items: [
    { id: 1, name: '1 игрок', url: smile },
    { id: 2, name: '2 игрока', url: girl },
    { id: 3, name: '3 игрока', url: cute },
    { id: 4, name: '4 игрока', url: freckles },
  ],
};

export const Players = ({ handleButtonClick }: ButtonID): JSX.Element => {
  return (
    <Container>
      <Row>
        {nameButton.items.map((item: NameButtonItem) => (
          <Col xs={12} key={item.id} className="d-flex justify-content-center">
            <Button
              key={item.id}
              className={classes.btn}
              onClick={() => handleButtonClick(item.id, item.name)}
            >
              {[...Array(item.id)].reduce(
                (prev: string[], current: number, indexReduce: number) => [
                  ...prev,
                  <img
                    alt="player"
                    src={nameButton.items[indexReduce].url}
                    key={item.id + indexReduce}
                    className={classes.btn__img}
                  />,
                ],
                []
              )}
              {item.name}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
