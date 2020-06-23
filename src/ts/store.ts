export interface TitleParameters {
  title: string;
  handleModalClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface StateType {
  playerParameters: {
    speed: number;
    rounds: number;
    digits: number;
  }[];
}

