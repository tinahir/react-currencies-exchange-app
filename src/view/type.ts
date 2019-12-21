import ActionType from "./ActionType";

export type State = {
  fromCode?: string;
  toCode?: string;
  fromValue?: string;
  toValue?: string;
};

export type Action = {
  type: ActionType;
  payload?: any;
};
