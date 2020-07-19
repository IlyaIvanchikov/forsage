import { StateTypeItem } from './../container/main/state/reducer';
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

export interface SubmitForm extends HandleSubmitForm {
  playerParameters: StateTypeItem;
  paramPlayers: boolean;
}
export interface HandleParamsForm {
  event: React.FormEvent<HTMLFormElement>;
  speed: number;
  digits: number;
  rounds: number;
  signs: number;
  laws: {
    five: string[];
    ten: string[];
  };
  additionalParameters: AdditionalParameters;
}
export interface HandleSubmitForm {
  handleSubmit: ({
    event,
    speed,
    digits,
    rounds,
    signs,
    laws,
    additionalParameters,
  }: HandleParamsForm) => void;
}

export interface SubmitFormView extends ModalSelect, HandleSubmitForm {
  speed: number;
  digits: number;
  rounds: number;
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
}

export interface UsuallyProps {
  // handleShowSubmit: (
  //   event: React.FormEvent<HTMLFormElement>,
  //   speed: number
  // ) => void;
  handleShowSubmit: ({
    event,
    speed,
    digits,
    rounds,
    signs,
    laws,
    additionalParameters,
  }: HandleParamsForm) => void;
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
  laws: {
    five: string[];
    ten: string[];
  };
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
