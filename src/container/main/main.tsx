import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './state/reducer';
import { ParametersContext, DispatchParametersContext } from './main-context';
import MainView from './main.view';

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState<boolean>(true);
  const handleShowSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setShow(false);
  };

  return (
    <DispatchParametersContext.Provider value={{ dispatch, handleShowSubmit }}>
      <ParametersContext.Provider value={{ state }}>
        <MainView show={show} />
      </ParametersContext.Provider>
    </DispatchParametersContext.Provider>
  );
};

export default Main;
