import React, { useState, useEffect, useContext } from 'react';
import ParametersView from './parameters.view';
import { SubmitForm, UsuallyProps, AdditionalParameters } from '../../ts/store';
import { StateTypeItem } from '../../container/main/state/reducer';
import {
  // DispatchParametersContext,
  UsuallyContext,
} from '../../container/main/main-context';

const Parameters = ({ handleSubmit, playerParameters }: SubmitForm) => {
  const {
    speed,
    digits,
    rounds,
    signs,
    laws,
    additional,
  }: StateTypeItem = playerParameters;
  // const [isLoading, setLoading] = useState<boolean>(false);
  const [showPlayers, setShowPlayers] = useState<boolean>(false);
  const [showSigns, setShowSigns] = useState<boolean>(false);
  const [showLaws, setShowLaws] = useState<boolean>(false);

  // const { dispatch } = useContext(DispatchParametersContext);
  const { countPlayers, handleCountPlayersClick }: UsuallyProps = useContext(
    UsuallyContext
  );

  const [valueRangeSpeed, setValueRangeSpeed] = useState<number>(speed);
  const [valueRangeDigits, setValueRangeDigits] = useState<number>(digits);
  const [valueRangeRounds, setValueRangeRounds] = useState<number>(rounds);
  const [valueModalSigns, setValueModalSigns] = useState<{
    signs: number;
    nameButton: string;
  }>({
    signs,
    nameButton: '1 (от 1 до 9)',
  });
  const [valueModalSelect, setValueModalSelect] = useState<{
    five: string[];
    ten: string[];
  }>({
    five: laws.five,
    ten: laws.ten,
  });
  const [additionalParameters, setAdditionalParameters] = useState<
    AdditionalParameters
  >({
    soundPlay: additional.soundPlay,
    turboPlay: additional.turboPlay,
    superTurboPlay: additional.superTurboPlay,
  });

  /////ЧЕКАТЬ ЭФФЕКТ НА ОСТАЛЬНЫЕ ПАРАМЕТРЫ
  useEffect(() => {
    setValueRangeRounds(rounds);
    setValueRangeDigits(digits);
    setValueRangeSpeed(speed);
  }, [rounds, speed, digits]);

  const handleModalPlayersClick = () => {
    setShowPlayers(true);
    // setLoading(true);
  };
  const handleCloseModalPlayersClick = () => setShowPlayers(false);

  const handleChooseModalPlayersClick = () => {
    handleCountPlayersClick(currentIdButton.id, currentIdButton.nameButton);
    setShowPlayers(false);
  };

  let currentIdButton: {
    id: number;
    nameButton: string;
  } = {
    id: 1,
    nameButton: 'Не выбрано',
  };

  const handleButtonClick = (id: number, item: string): void => {
    currentIdButton = {
      id,
      nameButton: item,
    };
  };

  const handleModalSignsClick = () => setShowSigns(true);
  const handleCloseModalSignsClick = () => setShowSigns(false);
  const handleChooseModalSignsClick = () => {
    setValueModalSigns({
      signs: currentIdButton.id,
      nameButton: currentIdButton.nameButton,
    });
    setShowSigns(false);
  };
  const handleModalLawsClick = () => setShowLaws(true);
  const handleCloseModalLawsClick = () => setShowLaws(false);

  // const loaderTime = () => {
  //   return new Promise<string>((resolve: any) => setTimeout(resolve, 2000));
  // };

  // useEffect(() => {
  //   if (isLoading) {
  //     loaderTime().then(() => {
  //       setLoading(false);
  //     });
  //   }
  // }, [isLoading]);

  return (
    <ParametersView
      additionalParameters={additionalParameters}
      setAdditionalParameters={setAdditionalParameters}
      laws={valueModalSelect}
      setValueModalSelect={setValueModalSelect}
      countPlayers={countPlayers}
      valueModalSigns={valueModalSigns}
      speed={valueRangeSpeed}
      digits={valueRangeDigits}
      rounds={valueRangeRounds}
      setValueRangeRounds={setValueRangeRounds}
      setValueRangeDigits={setValueRangeDigits}
      setValueRangeSpeed={setValueRangeSpeed}
      // dispatch={dispatch}
      handleSubmit={handleSubmit}
      showPlayers={showPlayers}
      showSigns={showSigns}
      showLaws={showLaws}
      // isLoading={isLoading}
      handleModalPlayersClick={handleModalPlayersClick}
      handleCloseModalPlayersClick={handleCloseModalPlayersClick}
      handleChooseModalPlayersClick={handleChooseModalPlayersClick}
      handleModalSignsClick={handleModalSignsClick}
      handleCloseModalSignsClick={handleCloseModalSignsClick}
      handleChooseModalSignsClick={handleChooseModalSignsClick}
      handleModalLawsClick={handleModalLawsClick}
      handleCloseModalLawsClick={handleCloseModalLawsClick}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default Parameters;
