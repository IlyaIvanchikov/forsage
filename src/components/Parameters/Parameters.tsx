import React, { useState, useEffect, useContext } from 'react';
import ParametersView from './parameters.view';
import { SubmitForm } from '../../ts/store';
import { StateTypeItem } from '../../container/main/state/reducer';
import { DispatchParametersContext } from '../../container/main/main-context';

const Parameters = ({ handleSubmit, playerParameters }: SubmitForm) => {
  const { speed, digits, rounds }: StateTypeItem = playerParameters;
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showPlayers, setShowPlayers] = useState<boolean>(false);
  const [showSigns, setShowSigns] = useState<boolean>(false);
  const [showLaws, setShowLaws] = useState<boolean>(false);

  const { dispatch } = useContext(DispatchParametersContext);

  const [valueRangeSpeed, setValueRangeSpeed] = useState<number>(speed);
  const [valueRangeDigits, setValueRangeDigits] = useState<number>(digits);
  const [valueRangeRounds, setValueRangeRounds] = useState<number>(rounds);

  useEffect(() => {
    setValueRangeRounds(rounds);
    setValueRangeDigits(digits);
    setValueRangeSpeed(speed);
  }, [rounds, speed, digits]);

  const handleModalPlayersClick = () => {
    setShowPlayers(true);
    setLoading(true);
  };

  const handleCloseModalPlayersClick = () => setShowPlayers(false);
  const handleModalSignsClick = () => setShowSigns(true);
  const handleCloseModalSignsClick = () => setShowSigns(false);

  const handleModalLawsClick = () => setShowLaws(true);
  const handleCloseModalLawsClick = () => setShowLaws(false);

  const loaderTime = () => {
    return new Promise<string>((resolve: any) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    if (isLoading) {
      loaderTime().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <ParametersView
      valueRangeSpeed={valueRangeSpeed}
      valueRangeDigits={valueRangeDigits}
      valueRangeRounds={valueRangeRounds}
      setValueRangeRounds={setValueRangeRounds}
      setValueRangeDigits={setValueRangeDigits}
      setValueRangeSpeed={setValueRangeSpeed}
      dispatch={dispatch}
      handleSubmit={handleSubmit}
      showPlayers={showPlayers}
      showSigns={showSigns}
      showLaws={showLaws}
      isLoading={isLoading}
      handleModalPlayersClick={handleModalPlayersClick}
      handleCloseModalPlayersClick={handleCloseModalPlayersClick}
      handleModalSignsClick={handleModalSignsClick}
      handleCloseModalSignsClick={handleCloseModalSignsClick}
      handleModalLawsClick={handleModalLawsClick}
      handleCloseModalLawsClick={handleCloseModalLawsClick}
    />
  );
};

export default Parameters;
