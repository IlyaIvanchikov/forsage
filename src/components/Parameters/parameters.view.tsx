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
// import Loader from '../loader/loader';
import { ButtonID } from '../../ts/store';
import { SubmitFormView, AdditionalParametersProps } from '../../ts/store';
// import { ActionType } from '../../container/main/state/reducer';

interface EventHandlerProps
  extends SubmitFormView,
    ButtonID,
    AdditionalParametersProps {
  showPlayers: boolean;
  showLaws: boolean;
  showSigns: boolean;
  // isLoading: boolean;
  handleModalPlayersClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModalPlayersClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleModalSignsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChooseModalSignsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChooseModalPlayersClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleCloseModalSignsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModalLawsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleModalLawsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ParametersView = ({
  additionalParameters,
  setAdditionalParameters,
  valueModalSelect,
  setValueModalSelect,
  valueModalSigns,
  handleButtonClick,
  handleSubmit,
  // isLoading,
  showPlayers,
  showLaws,
  showSigns,
  handleModalPlayersClick,
  handleCloseModalPlayersClick,
  handleModalSignsClick,
  handleCloseModalSignsClick,
  handleModalLawsClick,
  handleCloseModalLawsClick,
  speed,
  valueRangeDigits,
  valueRangeRounds,
  setValueRangeDigits,
  setValueRangeRounds,
  setValueRangeSpeed,
  dispatch,
  handleChooseModalSignsClick,
  handleChooseModalPlayersClick,
  countPlayers,
}: EventHandlerProps) => {
  // const speed = 2;
  return (
    <Form
      className={classes.form}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit({ event, speed })
      }
    >
      <h2 className="text-center">Выберите параметры:</h2>
      <FormButton
        title="Количество игроков:"
        handleModalClick={handleModalPlayersClick}
        nameButton={countPlayers.nameButton}
      />
      <ModalComponent
        showModal={showPlayers}
        handleCloseModalClick={handleCloseModalPlayersClick}
        handleChooseModalClick={handleChooseModalPlayersClick}
        title="Количество игроков"
      >
        {' '}
        <Players handleButtonClick={handleButtonClick} />
        {/* {isLoading ? (
          <Loader />
        ) : (
          <Players handleButtonClick={handleButtonClick} />
        )} */}
      </ModalComponent>
      <FormRange
        title="Скорость:"
        min={0.3}
        max={5}
        step={0.1}
        currentParametersRange={speed}
        setValueRange={setValueRangeSpeed}
      />
      <FormButton
        title="Количество знаков:"
        handleModalClick={handleModalSignsClick}
        nameButton={valueModalSigns.nameButton}
      />
      <ModalComponent
        showModal={showSigns}
        handleCloseModalClick={handleCloseModalSignsClick}
        handleChooseModalClick={handleChooseModalSignsClick}
        title="Количество знаков"
      >
        {' '}
        <Signs handleButtonClick={handleButtonClick} />
      </ModalComponent>
      <FormRange
        title="Количество примеров:"
        min={1}
        max={40}
        step={1}
        currentParametersRange={valueRangeRounds}
        setValueRange={setValueRangeRounds}
      />
      <FormRange
        title="Количество цифр в примере:"
        min={2}
        max={20}
        step={1}
        currentParametersRange={valueRangeDigits}
        setValueRange={setValueRangeDigits}
      />
      <FormButton
        title="Законы:"
        handleModalClick={handleModalLawsClick}
        nameButton={'Выбрать'}
      />
      <ModalComponent
        showModal={showLaws}
        handleCloseModalClick={handleCloseModalLawsClick}
        handleChooseModalClick={handleCloseModalLawsClick}
        title="Законы"
      >
        {' '}
        <Laws
          valueModalSelect={valueModalSelect}
          setValueModalSelect={setValueModalSelect}
        />
      </ModalComponent>
      <Form.Group as={Row} controlId="formPlaintextButton" className="mb-1">
        <Form.Label column={true} sm="7">
          <Dropdown
            additionalParameters={additionalParameters}
            setAdditionalParameters={setAdditionalParameters}
          />
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
          <Button onClick={() => dispatch!({ type: 'CHANGE_PARAMETERS' })}>
            Tesn
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ParametersView;
