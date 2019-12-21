import ActionType from './ActionType';
import { State, Action } from './type';

const Reducers = {
  [ActionType.CHANGE_FROM_CURRENCY_CODE]: (
    state: State,
    action: Action
  ): State => {
    const fromCode = action.payload;
    const toCode = fromCode === state.toCode && state.fromCode;
    if (toCode) {
      return { ...state, fromCode, toCode };
    }
    return { ...state, fromCode };
  },
  [ActionType.CHANGE_TO_CURRENCY_CODE]: (
    state: State,
    action: Action
  ): State => {
    const toCode = action.payload;
    const fromCode = toCode === state.fromCode && state.toCode;
    if (fromCode) {
      return { ...state, fromCode, toCode };
    }
    return { ...state, toCode };
  },
  [ActionType.CHANGE_FROM_CURRENCY_VALUE]: (
    state: State,
    action: Action
  ): State => {
    return { ...state, fromValue: action.payload, toValue: action.payload };
  },
  [ActionType.CHANGE_TO_CURRENCY_VALUE]: (
    state: State,
    action: Action
  ): State => {
    return { ...state, fromValue: action.payload, toValue: action.payload };
  },
};

export default Reducers;
