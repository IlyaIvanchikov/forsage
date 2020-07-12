import { StateTypeItem, ActionType } from './../container/main/state/reducer';
export interface TitleParameters {
  title: string;
  handleModalClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nameButton?: string;
}

export interface RangeParameters extends TitleParameters {
  min: number;
  max: number;
  currentParametersRange: number;
  step: number;
  setValueRange: React.Dispatch<React.SetStateAction<number>>;
}

export interface SubmitForm {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  playerParameters: StateTypeItem;
}

export interface SubmitFormView extends ModalSelect {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  valueRangeSpeed: number;
  valueRangeDigits: number;
  valueRangeRounds: number;
  valueModalSigns: {
    signs: number;
    nameButton: string;
  };
  countPlayers: {
    countPlayers: number;
    nameButton: string;
  };
  setValueRangeDigits: React.Dispatch<React.SetStateAction<number>>;
  setValueRangeRounds: React.Dispatch<React.SetStateAction<number>>;
  setValueRangeSpeed: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<ActionType>;
}

export interface UsuallyProps {
  handleShowSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleCountPlayersClick: (id: number, item: string) => void;
  countPlayers: {
    countPlayers: number;
    nameButton: string;
  };
}

export interface ButtonID {
  handleButtonClick: (id: number, item: string) => void;
}

export interface ModalSelect {
  setValueModalSelect: React.Dispatch<React.SetStateAction<any>>;
  valueModalSelect: any;
}

export interface AdditionalParameters {
  soundPlay: boolean;
  turboPlay: boolean;
  superTurboPlay: boolean;
}

export interface AdditionalParametersProps {
  additionalParameters: AdditionalParameters;
  setAdditionalParameters: React.Dispatch<
    React.SetStateAction<AdditionalParameters>
  >;
}
