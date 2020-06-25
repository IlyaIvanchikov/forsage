export interface TitleParameters {
  title: string;
  handleModalClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface StateType {
  playerParameters: {
    speed: number;
    rounds: number;
    digits: number;
  }[];
}

