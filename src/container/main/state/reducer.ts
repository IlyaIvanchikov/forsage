interface StateType {
  playerParameters: {
    speed: number;
    rounds: number;
    digits: number;
  }[];
}

type ActionType =
  | {
      type: 'CREATE_PARAMETERS';
      payload: StateType;
    }
  | {
      type: 'CHANGE_PARAMETERS';
      payload: StateType;
    };

export const initialState: StateType = {
  playerParameters: [
    {
      speed: 2,
      rounds: 10,
      digits: 1,
    },
  ],
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    // case 'CREATE_PARAMETERS':
    //   return [
    //     state,
    //     {
    //       speed: action.payload,
    //     },
    //   ];
    default:
      return state;
  }
};
