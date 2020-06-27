import React from 'react';
// import { SubmitForm } from './../../ts/store';
import { StateType } from './state/reducer';

export const ParametersContext = React.createContext<Partial<StateType>>({});
export const DispatchParametersContext = React.createContext<
  React.Dispatch<any>
>(() => null);
