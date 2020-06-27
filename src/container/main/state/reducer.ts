export interface StateType {
  playerParameters: StateTypeItem[];
}

export interface StateTypeItem {
  speed: number;
  rounds: number;
  digits: number;
}

type ActionType = {
  type: 'CHANGE_PARAMETERS' | 'decrement' | 'increment';
};

export const initialState: StateType = {
  playerParameters: [
    {
      speed: 2,
      rounds: 10,
      digits: 2,
    },
  ],
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_PARAMETERS':
      return [
        ...state.playerParameters,
        {
          speed: 1,
          digits: 1,
          rounds: 1,
        },
      ];
    default:
      return state;
  }
};
