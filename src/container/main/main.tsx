import React, { useReducer, useState, useEffect } from 'react';
import { reducer, initialState } from './state/reducer';
import {
  ParametersContext,
  DispatchParametersContext,
  UsuallyContext,
} from './main-context';
import MainView from './main.view';

import { HandleParamsForm } from '../../ts/store';

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [countPlayers, SetCountPlayers] = useState<{
    countPlayers: number;
    nameButton: string;
  }>({
    countPlayers: 1,
    nameButton: '1 игрок',
  });

  const handleShowSubmit = ({
    event,
    speed,
    digits,
    rounds,
    signs,
    laws,
    additionalParameters,
  }: HandleParamsForm) => {
    event.preventDefault();
    setLoading(true);
    dispatch({
      type: 'CREATE_PARAMETERS',
      playerParameters: {
        speed,
        digits,
        rounds,
        signs,
        laws,
        additional: additionalParameters,
      },
      players: countPlayers.countPlayers,
    });
    setShow(false);
  };

  const handleCountPlayersClick = (id: number, item: string): void => {
    SetCountPlayers({ countPlayers: id, nameButton: item });
  };

  const loaderTime = () => {
    return new Promise<string>((resolve: any) => setTimeout(resolve, 3000));
  };

  useEffect(() => {
    if (isLoading) {
      loaderTime().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <DispatchParametersContext.Provider value={{ dispatch }}>
      <ParametersContext.Provider value={{ state }}>
        <UsuallyContext.Provider
          value={{ handleShowSubmit, handleCountPlayersClick, countPlayers }}
        >
          <MainView show={show} loading={isLoading} />
        </UsuallyContext.Provider>
      </ParametersContext.Provider>
    </DispatchParametersContext.Provider>
  );
};

export default Main;
