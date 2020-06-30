import { StateTypeItem, ActionType } from './../container/main/state/reducer';
export interface TitleParameters {
  title: string;
  handleModalClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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

export interface SubmitFormView {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  valueRangeSpeed: number;
  valueRangeDigits: number;
  valueRangeRounds: number;
  setValueRangeDigits: React.Dispatch<React.SetStateAction<number>>;
  setValueRangeRounds: React.Dispatch<React.SetStateAction<number>>;
  setValueRangeSpeed: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<ActionType>;
}

export interface UsuallyProps {
  handleShowSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
