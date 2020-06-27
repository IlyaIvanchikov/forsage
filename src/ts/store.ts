import { StateTypeItem } from './../container/main/state/reducer';
export interface TitleParameters {
  title: string;
  handleModalClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface RangeParameters extends TitleParameters {
  min: number;
  max: number;
  currentParametersRange: number;
  step: number;
}

export interface SubmitForm {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  playerParameters: StateTypeItem;
}
