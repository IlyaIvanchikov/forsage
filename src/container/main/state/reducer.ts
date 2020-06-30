export interface StateType {
  playerParameters: StateTypeItem[];
}

export interface StateTypeItem {
  speed: number;
  rounds: number;
  digits: number;
}

export type ActionType = {
  type: 'CHANGE_PARAMETERS' | 'TEST';
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

// function display(action: ActionType) {
//   if (action.type === 'CHANGE_PARAMETERS') {
//     console.log('Hello');
//   }
// }

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'CHANGE_PARAMETERS': {
      const speed = 2;
      const playerParameters = state.playerParameters.map(
        (playerParameters) => {
          if (playerParameters.speed === speed) {
            console.log(2);
            console.log(state);
            return { ...playerParameters, speed: 4 };
          }
          console.log(5);
          console.log(state);
          return { ...playerParameters, speed: 4 };
        }
      );
      return { playerParameters };
    }
    // case 'TEST':
    //   return ...state;
    default:
      throw new Error();
  }
};
