import React from 'react';
import { conformedCurrency } from '../components/CurrencyInput/CurrencyService';
import config from '../config/app-settting.json';

type Currency = {
  code: string;
  value: string;
  isFocused: boolean;
};

type State = {
  response: any;
  from: Currency;
  to: Currency;
};

type Action = {
  type: ActionTypes;
  payload?: any;
};

export enum ActionTypes {
  changeFromCode,
  changeToCode,
  changeFromValue,
  changeToValue,
  swapCurrency,
  success,
  error,
}

const initialState: State = {
  response: [],
  from: {
    code: config.defaultBaseCurrency,
    value: '',
    isFocused: true,
  },
  to: {
    code: config.defaultToCurrency,
    value: '',
    isFocused: false,
  },
};

const changeCurrencyCode = (
  code: string,
  from: Currency,
  to: Currency
): [Currency, Currency] => {
  const newCode = code === to.code && from.code;
  if (newCode) {
    return [
      { ...from, code },
      { ...to, code: newCode },
    ];
  }
  return [{ ...from, code }, to];
};

const changeCurrencyValue = (
  value: string,
  exchangeRate: number,
  exchangefn: (value: string, exchangeRate: number) => number
): [string, string] => {
  const toValue = exchangefn(value, exchangeRate);
  return [value, toValue === 0 ? '' : toValue.toFixed(2)];
};

const updateCurrencyValues = (state: State): State => {
  if (state.from.isFocused) {
    return reducers[ActionTypes.changeFromValue](state, {
      type: ActionTypes.changeFromValue,
      payload: state.from.value,
    });
  } else {
    return reducers[ActionTypes.changeToValue](state, {
      type: ActionTypes.changeToValue,
      payload: state.to.value,
    });
  }
}

const reducers = {
  [ActionTypes.swapCurrency]: (state: State, action: Action): State => {
    return { ...state, from: { ...state.to }, to: { ...state.from } };
  },
  [ActionTypes.changeFromCode]: (state: State, action: Action): State => {
    const [from, to] = changeCurrencyCode(action.payload, state.from, state.to);
    return { ...state, from, to };
  },
  [ActionTypes.changeToCode]: (state: State, action: Action): State => {
    const [to, from] = changeCurrencyCode(action.payload, state.to, state.from);
    const newState = { ...state, from, to };
     return updateCurrencyValues(newState);
  },
  [ActionTypes.changeFromValue]: (state: State, action: Action): State => {
    const exchangeRate = state.response[state.to.code];
    const [fromValue, toValue] = changeCurrencyValue(
      action.payload,
      exchangeRate,
      (value, exchangeRate) => {
        return Number(value.replace(/[^0-9.]/g, '')) * exchangeRate;
      }
    );
    return {
      ...state,
      from: { ...state.from, value: fromValue, isFocused: true },
      to: {
        ...state.to,
        value: conformedCurrency(toValue).conformedValue,
        isFocused: false,
      },
    };
  },
  [ActionTypes.changeToValue]: (state: State, action: Action): State => {
    const exchangeRate = state.response[state.to.code];
    const [toValue, fromValue] = changeCurrencyValue(
      action.payload,
      exchangeRate,
      (value, exchangeRate) => {
        return Number(value.replace(/[^0-9.]/g, '')) / exchangeRate;
      }
    );
    return {
      ...state,
      from: {
        ...state.from,
        value: conformedCurrency(fromValue).conformedValue,
        isFocused: true,
      },
      to: { ...state.to, value: toValue, isFocused: false },
    };
  },
  [ActionTypes.success]: (state: State, action: Action): State => {
    const newState = {
      ...state,
      response: action.payload,
    };
    return updateCurrencyValues(newState);
  },
  [ActionTypes.error]: (state: State): State => {
    return {
      ...state,
      response: {},
    };
  },
};

const useCurrencyExchange = (endpoint: string): [
  State,
  () => Promise<void>,
  React.Dispatch<Action>
] => {
  const [state, dispatch] = React.useReducer(
    (state: State, action: Action): State => {
      console.log(action);
      return reducers[action.type](state, action);
    },
    initialState
  );

  const makeRequest = React.useCallback(async () => {
    try {
      const response = await fetch(`${endpoint}?base=${state.from.code}`);
      if (response.status === 200) {
        const data = await response.json();
        dispatch(success(data.rates));
      } else {
        dispatch(error());
      }
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint, state.from.code]);

  const success = (response: unknown) => ({
    type: ActionTypes.success,
    payload: response,
  });

  const error = (error?: Error) => ({
    type: ActionTypes.error,
    error,
  });

  return [state, makeRequest, dispatch];
};

export default useCurrencyExchange;
