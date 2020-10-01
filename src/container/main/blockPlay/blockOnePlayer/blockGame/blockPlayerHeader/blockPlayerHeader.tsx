import React, { useState, useContext } from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';
import ModalComponent from '../../../../../../components/Parameters/modal/modal';
import { generateNumber } from '../../../../../../components/exercisesLogic/generateNumber';
import Parameters from '../../../../../../components/Parameters/Parameters';
import Hint from '../../../../../../components/hint/hint';
import {
  ParametersContext,
  DispatchParametersContext,
} from '../../../../main-context';
import { HandleParamsForm } from '../../../../../../ts/store';

type blockGameHeaderOpt = {
  numOfPlayer: number;
  showScore: any;
  disableInput: boolean;
  setResults: any;
  setRound: any;
  setResultOfExercise: any;
  setTerm: any;
  exercises: any;
  setCurrentNumber: any;
  setIsRealNumber: any;
  setNewExercises: any;
};

const BlockPlayerHeader = ({
  numOfPlayer,
  showScore,
  disableInput,
  setResults,
  setRound,
  setResultOfExercise,
  setTerm,
  exercises,
  setCurrentNumber,
  setIsRealNumber,
  setNewExercises,
}: blockGameHeaderOpt) => {
  const [showMainModal, setShowMainModal] = useState<boolean>(false);
  const { state } = useContext(ParametersContext);
  const { dispatch } = useContext(DispatchParametersContext);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);
  const handlerShowClick = () => {
    setShowMainModal(!showMainModal);
  };

  const handlerCloseMainModal = () => {
    setShowMainModal(false);
  };

  const handlerShowHint = () => {
    setShowHint(true);
    setTimeout(() => {
      setShowHint(false);
    }, 2000);
  };

  const handlerShowStatisctics = () => {
    setShowStatistics(true);
    setTimeout(() => {
      setShowStatistics(false);
    }, 2000);
  };

  const handlerBroadcastParameters = ({
    event,
    speed,
    digits,
    rounds,
    signs,
    laws,
    additionalParameters,
    nameButton,
  }: HandleParamsForm) => {
    event.preventDefault();
    dispatch({
      type: 'CHANGE_PARAMETERS',
      speed,
      digits,
      rounds,
      signs,
      laws,
      additional: additionalParameters,
      nameButtonSigns: nameButton,
      player: numOfPlayer,
    });
    setResults({
      numOfRounds: rounds,
      rightAnswers: 0,
      roundsScore: [],
    });
    setRound(1);
    setResultOfExercise({
      isRightAnswer: true,
      isRoundComplete: false,
      isShow: false,
    });
    exercises = [];
    generateNumber(exercises, rounds, signs, digits, laws);
    setNewExercises(exercises);
    setTerm([0, exercises[0][0]]);
    setCurrentNumber(-1);
    setIsRealNumber(true);
    handlerCloseMainModal();
  };
  return (
    <Row className={classes.playerHeader}>
      <Hint
        title="Параметры меняются только во время ввода ответа"
        showHint={showHint}
      />
      <Hint
        title="Статистику можно посмотреть только во время ввода ответа"
        showHint={showStatistics}
      />
      <Col className={classes.threePoints}>
        {disableInput ? (
          <button
            title="Настройки"
            onClick={handlerShowHint}
            className={classes.col__buttonSettings}
          >
            &bull; &bull; &bull;
          </button>
        ) : (
          <button title="Настройки" onClick={handlerShowClick}>
            &bull; &bull; &bull;
          </button>
        )}

        <ModalComponent
          showModal={showMainModal}
          handleCloseModalClick={handlerCloseMainModal}
          handleChooseModalClick={handlerCloseMainModal}
          title={`Игрок ${numOfPlayer}`}
          modalParams={false}
          size="lg"
        >
          {' '}
          <Parameters
            handleSubmit={handlerBroadcastParameters}
            playerParameters={state.playerParameters[numOfPlayer - 1]}
            paramPlayers={false}
          />
        </ModalComponent>
      </Col>
      <Col className={classes.playerTitle}>Игрок {numOfPlayer}</Col>
      <Col className={classes.iconBlock}>
        {disableInput ? (
          <button title="Статистика" onClick={handlerShowStatisctics}>
            <img
              className={classes.resultsIcon}
              alt="Results"
              src={ResultsIcon}
            />
          </button>
        ) : (
          <button title="Статистика" onClick={() => showScore(true)}>
            <img
              className={classes.resultsIcon}
              alt="Results"
              src={ResultsIcon}
            />
          </button>
        )}
      </Col>
    </Row>
  );
};

export default BlockPlayerHeader;
