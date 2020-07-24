import React, { useState, useContext } from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';
import ModalComponent from '../../../../../../components/parameters/modal/modal';
import Parameters from '../../../../../../components/parameters/parameters';
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
};

const BlockPlayerHeader = ({
  numOfPlayer,
  showScore,
  disableInput,
}: blockGameHeaderOpt) => {
  const [showMainModal, setShowMainModal] = useState<boolean>(false);
  const { state } = useContext(ParametersContext);
  const { dispatch } = useContext(DispatchParametersContext);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);
  // const [show, setShow] = useState(false);
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
  // useEffect(() => {
  //   if (showHint === true) {
  //     setShow(true);

  //   }
  // }, [showHint]);
  // useEffect(() => {
  //   setShowHint(false);
  // }, [disableInput]);

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
      playerParameters: {
        speed,
        digits,
        rounds,
        signs,
        laws,
        additional: additionalParameters,
        nameButtonSigns: nameButton,
      },
      player: numOfPlayer,
    });
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
