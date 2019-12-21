import React, { useReducer, useEffect, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Select from '../../components/Select';
import CurrencyInput from '../../components/CurrencyInput';
import SwapIconSvg from '../../icons/SwapIcon';
import currencies from '../../config/currencies.json';
import {
  SwapIcon,
  TrandingIcon,
  TrendingUpIcon,
  CurrenciesContainer,
  CurrencyCard,
  CardCurrencySelect,
  CardCurrencyInput,
  CurrencyWhiteCard,
} from './style';
import { State, Action } from '../type';
import Reducers from '../reducers';
import ActionType from '../ActionType';
import useApi from '../../hooks/useApi';

const options = new Array<{ label: string; value: string }>();
for (let key of Object.keys(currencies)) {
  options.push({
    label: key,
    value: key,
  });
}

const initialState: State = {
  fromCode: 'USD',
  toCode: 'EUR',
  fromValue: '',
  toValue: '',
};

function currencyReducer(state: State, action: Action): State {
  return Reducers[action.type](state, action);
}

const CurrenciesExchange: React.FC<unknown> = () => {
  const [state, dispatch] = useReducer(currencyReducer, initialState);
  const [apiState, getExchangeRates] = useApi(
    `http://localhost:3000/rates.json`
  );

  const execute = (type: ActionType, payload: string) => {
    dispatch({ type, payload });
  };

  useEffect(() => {
    getExchangeRates();
    const timerId = setInterval(() => {
      getExchangeRates();
    }, 10000);
    return () => {
      clearInterval(timerId);
    }
  }, [state.fromCode, getExchangeRates]);

  return (
    <CurrenciesContainer>
      <SwapIcon>
        <SwapIconSvg color="#3388ff" size="18" />
      </SwapIcon>
      <TrandingIcon label="$1 = 0.123450">
        <TrendingUpIcon />
      </TrandingIcon>
      <CurrencyWhiteCard>
        <CardCurrencySelect>
          <Select
            name="select"
            options={options}
            value={state.fromCode}
            onChange={(e: any) => {
              execute(ActionType.CHANGE_FROM_CURRENCY_CODE, e.target.value);
            }}
          ></Select>
        </CardCurrencySelect>
        <CardCurrencyInput>
          <CurrencyInput
            tabIndex="1"
            autoFocus={true}
            placeholder="0.00"
            maxLength="14"
            value={state.fromValue}
            onChange={(e: any) => {
              execute(ActionType.CHANGE_FROM_CURRENCY_VALUE, e.target.value);
            }}
          ></CurrencyInput>
        </CardCurrencyInput>
      </CurrencyWhiteCard>
      <CurrencyCard>
        <CardCurrencySelect>
          <Select
            name="select"
            options={options}
            value={state.toCode}
            onChange={(e: any) => {
              execute(ActionType.CHANGE_TO_CURRENCY_CODE, e.target.value);
            }}
          ></Select>
        </CardCurrencySelect>
        <CardCurrencyInput>
          <CurrencyInput
            placeholder="0.00"
            maxLength="14"
            value={state.toValue}
            onChange={(e: any) => {
              execute(ActionType.CHANGE_TO_CURRENCY_VALUE, e.target.value);
            }}
          ></CurrencyInput>
        </CardCurrencyInput>
      </CurrencyCard>
    </CurrenciesContainer>
  );
};

export default CurrenciesExchange;
