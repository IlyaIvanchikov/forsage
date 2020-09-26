export interface StateType {
  playerParameters: StateTypeItem[];
}

export interface StateTypeItem {
  speed: number;
  rounds: number;
  digits: number;
  signs: number;
  nameButtonSigns: string;
  laws: {
    five: string[];
    ten: string[];
  };
  additional: {
    soundPlay: boolean;
    turboPlay: boolean;
    superTurboPlay: boolean;
  };
}

export type ActionType =
  | {
      type: 'CREATE_PARAMETERS';
      playerParameters: StateTypeItem;
      players: number;
    }
  | {
      type: 'CHANGE_PARAMETERS';
      speed: number;
      rounds: number;
      digits: number;
      signs: number;
      nameButtonSigns: string;
      laws: {
        five: string[];
        ten: string[];
      };
      additional: {
        soundPlay: boolean;
        turboPlay: boolean;
        superTurboPlay: boolean;
      };
      player: number;
    };

export const initialState: StateType = {
  playerParameters: [
    {
      speed: 1,
      rounds: 10,
      digits: 2,
      signs: 1,
      nameButtonSigns: '1 (от 1 до 9)',
      laws: {
        five: ['Любой'],
        ten: ['Любой'],
      },
      additional: {
        soundPlay: false,
        turboPlay: false,
        superTurboPlay: false,
      },
    },
  ],
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'CREATE_PARAMETERS': {
      const newPlayers: StateTypeItem[] = Array(action.players - 1);
      state.playerParameters[0] = action.playerParameters;
      newPlayers.fill(state.playerParameters[0]);
      state.playerParameters = state.playerParameters.concat(newPlayers);
      return state;
    }
    case 'CHANGE_PARAMETERS':
      return {
        ...state,
        playerParameters: state.playerParameters.map(
          (item: StateTypeItem, index: number) =>
            index + 1 === action.player
              ? {
                  ...item,
                  speed: action.speed,
                  rounds: action.rounds,
                  digits: action.digits,
                  signs: action.signs,
                  nameButtonSigns: action.nameButtonSigns,
                  laws: action.laws,
                  additional: action.additional,
                }
              : item
        ),
      };
    default:
      throw new Error();
  }
};
