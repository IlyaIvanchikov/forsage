import React from 'react';
import classes from './parameters.module.scss';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropdown from './dropdown/dropdown';
import FormButton from './formButton/formButton';
import FormRange from './formRange/formRange';
import ModalComponent from './modal/modal';
import { Players } from './modal/components/players/players';
import { Signs } from './modal/components/signs/signs';
import { Laws } from './modal/components/laws/laws';
import Loader from '../loader/loader';
import { SubmitForm } from '../../ts/store';
// import { StateTypeItem } from '../../container/main/state/reducer';

interface EventHandlerProps extends SubmitForm {
  showPlayers: boolean;
  showLaws: boolean;
  showSigns: boolean;
  isLoading: boolean;
  handleModalPlayersClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModalPlayersClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleModalSignsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModalSignsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModalLawsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleModalLawsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ParametersView = ({
  handleSubmit,
  isLoading,
  showPlayers,
  showLaws,
  showSigns,
  handleModalPlayersClick,
  handleCloseModalPlayersClick,
  handleModalSignsClick,
  handleCloseModalSignsClick,
  handleModalLawsClick,
  handleCloseModalLawsClick,
  playerParameters,
}: EventHandlerProps) => {
  console.log(playerParameters);
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
        {isLoading ? <Loader /> : <Players />}
      </ModalComponent>
      <FormRange
        title="Скорость:"
        min={0.3}
        max={5}
        CurrentValue={playerParameters.speed}
      />
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
      {/* <FormRange title="Количество примеров:" />
      <FormRange title="Количество цифр в примере:" /> */}
      <FormButton title="Законы:" handleModalClick={handleModalLawsClick} />
      <ModalComponent
        showModal={showLaws}
        handleCloseModalClick={handleCloseModalLawsClick}
        title="Законы"
      >
        {' '}
        <Laws />
      </ModalComponent>
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

export default ParametersView;
