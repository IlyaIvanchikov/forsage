import { StateType } from './../container/main/state/reducer';
export interface TitleParameters {
  title: string;
  handleModalClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface RangeParameters extends TitleParameters {
  min: number;
  max: number;
}

export interface SubmitForm extends StateType{
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
