import React, { useReducer, useState } from 'react';
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
  const [countPlayers, SetCountPlayers] = useState<{
    countPlayers: number;
    nameButton: string;
  }>({
    countPlayers: 1,
    nameButton: '1 игрок',
  });

  const handleShowSubmit = ({ event, speed }: HandleParamsForm) => {
    console.log(speed, setShow);
    event.preventDefault();

    // setShow(false);
  };

  const handleCountPlayersClick = (id: number, item: string): void => {
    SetCountPlayers({ countPlayers: id, nameButton: item });
  };

  return (
    <DispatchParametersContext.Provider value={{ dispatch }}>
      <ParametersContext.Provider value={{ state }}>
        <UsuallyContext.Provider
          value={{ handleShowSubmit, handleCountPlayersClick, countPlayers }}
        >
          <MainView show={show} countPlayers={countPlayers.countPlayers} />
        </UsuallyContext.Provider>
      </ParametersContext.Provider>
    </DispatchParametersContext.Provider>
  );
};

export default Main;
