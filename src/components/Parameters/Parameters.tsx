import React, { useState, useEffect } from 'react';
import ParametersView from './parameters.view';
import { SubmitForm } from '../../ts/store';

const Parameters = ({ handleSubmit, playerParameters }: SubmitForm) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showPlayers, setShowPlayers] = useState<boolean>(false);
  const [showSigns, setShowSigns] = useState<boolean>(false);
  const [showLaws, setShowLaws] = useState<boolean>(false);

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
      // speed={speed}
      // rounds={rounds}
      // digits={digits}
      playerParameters={playerParameters}
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
