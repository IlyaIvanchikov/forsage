import React from 'react';
import classes from './Parameters.module.scss';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropdown from './dropdown/dropdown';
import FormButton from './formButton/formButton';
import FormRange from './formRange/formRange';
import ModalComponent from './modal/modal';
import { Players } from './modal/components/players/players';
import { Signs } from './modal/components/signs/signs';
import { Laws } from './modal/components/laws/laws';
import { ButtonID } from '../../ts/store';
import { SubmitFormView, AdditionalParametersProps } from '../../ts/store';

interface EventHandlerProps
  extends SubmitFormView,
    ButtonID,
    AdditionalParametersProps {
  showPlayers: boolean;
  showLaws: boolean;
  showSigns: boolean;
  paramPlayers: boolean;
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
  paramPlayers,
  additionalParameters,
  setAdditionalParameters,
  laws,
  setValueModalSelect,
  speed,
  digits,
  rounds,
  valueModalSigns,
  handleButtonClick,
  handleSubmit,
  showPlayers,
  showLaws,
  showSigns,
  handleModalPlayersClick,
  handleCloseModalPlayersClick,
  handleModalSignsClick,
  handleCloseModalSignsClick,
  handleModalLawsClick,
  handleCloseModalLawsClick,
  setValueRangeDigits,
  setValueRangeRounds,
  setValueRangeSpeed,
  handleChooseModalSignsClick,
  handleChooseModalPlayersClick,
  countPlayers,
}: EventHandlerProps) => {
  const signs = valueModalSigns.signs;
  const nameButton = valueModalSigns.nameButton;
  return (
    <Form
      className={classes.form}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit({
          event,
          speed,
          digits,
          rounds,
          signs,
          laws,
          additionalParameters,
          nameButton,
        })
      }
    >
      <h2 className="text-center">Выберите параметры:</h2>
      {paramPlayers === true && (
        <>
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
            modalParams={true}
            size="sm"
          >
            {' '}
            <Players handleButtonClick={handleButtonClick} />
          </ModalComponent>
        </>
      )}

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
        modalParams={true}
        size="sm"
      >
        {' '}
        <Signs handleButtonClick={handleButtonClick} />
      </ModalComponent>
      <FormRange
        title="Количество раундов:"
        min={1}
        max={40}
        step={1}
        currentParametersRange={rounds}
        setValueRange={setValueRangeRounds}
      />
      <FormRange
        title="Количество цифр в раунде:"
        min={2}
        max={20}
        step={1}
        currentParametersRange={digits}
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
        modalParams={true}
        size="sm"
      >
        {' '}
        <Laws laws={laws} setValueModalSelect={setValueModalSelect} />
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
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ParametersView;
