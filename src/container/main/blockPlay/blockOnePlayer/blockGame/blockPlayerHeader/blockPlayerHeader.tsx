import React, { useState, useContext } from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';
import ModalComponent from '../../../../../../components/parameters/modal/modal';
import Parameters from '../../../../../../components/parameters/parameters';
import { UsuallyProps } from '../../../../../../ts/store';
import { ParametersContext, UsuallyContext } from '../../../../main-context';

type blockGameHeaderOpt = {
  numOfPlayer: number;
};

const BlockPlayerHeader = ({ numOfPlayer }: blockGameHeaderOpt) => {
  const [showMainModal, setShowMainModal] = useState<boolean>(false);
  const { state } = useContext(ParametersContext);
  const { handleShowSubmit }: UsuallyProps = useContext(UsuallyContext);
  console.log(showMainModal);

  // const usePrevious = (value: boolean) => {
  //   const ref = useRef<boolean | undefined>();
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);
  //   return ref.current;
  // };
  // const prevState = usePrevious(showMainModal);
  const handlerShowClick = () => {
    setShowMainModal(!showMainModal);
  };

  const handlerCloseMainModal = () => {
    setShowMainModal(false);
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
          title="hello"
        >
          {' '}
          <Parameters
            handleSubmit={handleShowSubmit}
            playerParameters={state.playerParameters[numOfPlayer - 1]}
          />
        </ModalComponent>
      </Col>
      <Col className={classes.playerTitle}>Игрок {numOfPlayer}</Col>
      <Col className={classes.iconBlock}>
        <button title="Статистика" onClick={() => alert('hello')}>
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
