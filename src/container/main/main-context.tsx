import React from 'react';
import { UsuallyProps } from './../../ts/store';
import { StateType, ActionType, initialState } from './state/reducer';

export const ParametersContext = React.createContext<{
  state: StateType;
}>({
  state: initialState,
});
// export const DispatchParametersContext = React.createContext<Partial<Dispatch<ActionType>>>({});
export const UsuallyContext = React.createContext<UsuallyProps>({
  handleShowSubmit: () => {},
  handleCountPlayersClick: () => {},
  countPlayers: {
    countPlayers: 1,
    nameButton: '1 игрок',
  }
});

export const DispatchParametersContext = React.createContext<{
  dispatch: (action: ActionType) => void;
}>({
  dispatch: () => {},
});
