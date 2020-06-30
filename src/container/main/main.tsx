import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './state/reducer';
import {
  ParametersContext,
  DispatchParametersContext,
  UsuallyContext,
} from './main-context';
import MainView from './main.view';

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState<boolean>(true);
  const handleShowSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setShow(false);
  };

  return (
    <DispatchParametersContext.Provider value={{ dispatch }}>
      <ParametersContext.Provider value={{ state }}>
        <UsuallyContext.Provider value={{ handleShowSubmit }}>
          <MainView show={show} />
        </UsuallyContext.Provider>
      </ParametersContext.Provider>
    </DispatchParametersContext.Provider>
  );
};

export default Main;
