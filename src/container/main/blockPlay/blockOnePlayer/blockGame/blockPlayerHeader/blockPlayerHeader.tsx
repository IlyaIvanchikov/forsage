import React, { useState, useContext } from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';
import ModalComponent from '../../../../../../components/Parameters/modal/modal';
import Parameters from '../../../../../../components/Parameters/Parameters';
import {
  ParametersContext,
  DispatchParametersContext,
} from '../../../../main-context';
import { HandleParamsForm } from '../../../../../../ts/store';

type blockGameHeaderOpt = {
  numOfPlayer: number;
  showScore: any;
};

const BlockPlayerHeader = ({ numOfPlayer, showScore }: blockGameHeaderOpt) => {
  const [showMainModal, setShowMainModal] = useState<boolean>(false);
  const { state } = useContext(ParametersContext);
  const { dispatch } = useContext(DispatchParametersContext);

  const handlerShowClick = () => {
    setShowMainModal(!showMainModal);
  };
  const handlerCloseMainModal = () => {
    setShowMainModal(false);
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
      <Col className={classes.threePoints}>
        <button title="Настройки" onClick={handlerShowClick}>
          &bull; &bull; &bull;
        </button>
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
        <button title="Статистика" onClick={() => showScore(true)}>
          <img
            className={classes.resultsIcon}
            alt="Results"
            src={ResultsIcon}
          />
        </button>
      </Col>
    </Row>
  );
};

export default BlockPlayerHeader;
