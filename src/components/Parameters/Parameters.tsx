import React, { useState } from 'react';
import classes from './parameters.module.scss';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropdown from './dropdown/dropdown';
import FormButton from './formButton/formButton';
import FormRange from './formRange/formRange';
import ModalComponent from './modal/modal';
import { Players } from './modal/components/players/players';
import { Signs } from './modal/components/signs/signs';

interface EventHandlerProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Parameters = ({ handleSubmit }: EventHandlerProps) => {
  const [showPlayers, setShowPlayers] = useState<boolean>(false);
  const [showSigns, setShowSigns] = useState<boolean>(false);
  const handleModalPlayersClick = () => setShowPlayers(true);
  const handleCloseModalPlayersClick = () => setShowPlayers(false);
  const handleModalSignsClick = () => setShowSigns(true);
  const handleCloseModalSignsClick = () => setShowSigns(false);

  return (
    <Form className={classes.form} onSubmit={handleSubmit}>
      <h2 className="text-center">Выберите параметры:</h2>
      <FormButton
        title="Количество игроков:"
        handleModalClick={handleModalPlayersClick}
      />
      <ModalComponent
        showModal={showPlayers}
        handleCloseModalClick={handleCloseModalPlayersClick}
        title="Количество игроков"
      >
        {' '}
        <Players />
      </ModalComponent>
      <FormRange title="Скорость:" />
      <FormButton
        title="Количество знаков:"
        handleModalClick={handleModalSignsClick}
      />
      <ModalComponent
        showModal={showSigns}
        handleCloseModalClick={handleCloseModalSignsClick}
        title="Количество знаков"
      >
        {' '}
        <Signs />
      </ModalComponent>
      <FormRange title="Количество примеров:" />
      <FormRange title="Количество цифр в примере:" />
      {/* <FormButton title="Законы:" /> */}
      <Form.Group as={Row} controlId="formPlaintextButton" className="mb-1">
        <Form.Label column={true} sm="7">
          <Dropdown />
        </Form.Label>
        <Col
          sm="5"
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            type="submit"
            className={classes.formControlButton}
            style={{
              width: '80%',
              height: '50%',
              minHeight: '40px',
              marginBottom: '2%',
            }}
          >
            Начать
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Parameters;
