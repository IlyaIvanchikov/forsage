import React, { useState, useContext } from 'react';
import ParametersView from './parameters.view';
import { SubmitForm, UsuallyProps, AdditionalParameters } from '../../ts/store';
import { StateTypeItem } from '../../container/main/state/reducer';
import { UsuallyContext } from '../../container/main/main-context';

const Parameters = ({
  handleSubmit,
  playerParameters,
  paramPlayers,
}: SubmitForm) => {
  const {
    speed,
    digits,
    rounds,
    signs,
    laws,
    additional,
    nameButtonSigns,
  }: StateTypeItem = playerParameters;
  const [showPlayers, setShowPlayers] = useState<boolean>(false);
  const [showSigns, setShowSigns] = useState<boolean>(false);
  const [showLaws, setShowLaws] = useState<boolean>(false);

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
    nameButton: nameButtonSigns,
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

  const handleModalPlayersClick = () => {
    setShowPlayers(true);
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

  return (
    <ParametersView
      paramPlayers={paramPlayers}
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
      handleSubmit={handleSubmit}
      showPlayers={showPlayers}
      showSigns={showSigns}
      showLaws={showLaws}
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
