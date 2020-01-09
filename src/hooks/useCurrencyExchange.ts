import React from 'react';
import config from '../config/app-settting.json';
import {
  formatCurrency,
  currencyToNumber,
} from '../components/CurrencyInput/CurrencyService';

type Currency = {
  code: string;
  value: string;
  isFocused: boolean;
};

type State = {
  response: any;
  from: Currency;
  to: Currency;
  myCurrenciesBalance: Map<string, number>;
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
  exchangeCurrency,
  success,
  error,
}

const getDefaultCurrencyBalance = () => {
  const myCurrenciesBalance = new Map<string, number>();
  // Note: 1840 is my default currency amout
  myCurrenciesBalance.set(config.defaultBaseCurrency, 1840);
  return myCurrenciesBalance;
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
  myCurrenciesBalance: getDefaultCurrencyBalance()
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
};

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
        return currencyToNumber(value) * exchangeRate;
      }
    );
    return {
      ...state,
      from: { ...state.from, value: fromValue, isFocused: true },
      to: {
        ...state.to,
        value: formatCurrency(toValue),
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
        return currencyToNumber(value) / exchangeRate;
      }
    );
    return {
      ...state,
      from: {
        ...state.from,
        value: formatCurrency(fromValue),
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
  [ActionTypes.exchangeCurrency]: (state: State): State => {
    const { myCurrenciesBalance, from, to } = state;

    const fromAmout = myCurrenciesBalance.get(from.code) || 0;
    const enterAmount = currencyToNumber(from.value);
    if (
      fromAmout == 0 ||
      !from.value ||
      enterAmount === 0 ||
      enterAmount > fromAmout
    ) {
      return state;
    }

    myCurrenciesBalance.set(
      from.code,
      fromAmout - currencyToNumber(from.value)
    );

    const toAmout = myCurrenciesBalance.get(to.code) || 0;
    myCurrenciesBalance.set(
      to.code,
      toAmout + currencyToNumber(to.value)
    );

    return {
      ...state,
      from: { ...from, value: ''},
      to: {...to, value: '' },
      myCurrenciesBalance,
    };
  },
};

const useCurrencyExchange = (
  endpoint: string
): [State, () => Promise<void>, React.Dispatch<Action>] => {
  const [state, dispatch] = React.useReducer(
    (state: State, action: Action): State => {
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
