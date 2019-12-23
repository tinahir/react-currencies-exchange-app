import React, { useEffect } from 'react';
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
import useCurrencyExchange, {
  ActionTypes,
} from '../../hooks/useCurrencyExchange';

const options = new Array<{ label: string; value: string }>();
for (let key of Object.keys(currencies)) {
  options.push({
    label: key,
    value: key,
  });
}

const CurrenciesExchange: React.FC<unknown> = () => {
  const [{from, to, response}, getExchangeRates, dispatch] = useCurrencyExchange(
    `http://localhost:3000/rates.json`
  );

  const handleOnChange = (type: ActionTypes, payload: string) => {
    dispatch({ type, payload });
  };

  const getExchangeRate = () => {
    return `$1 = $${response[to.code]}`;
  };

  const handleSwap = () => {
    dispatch({ type: ActionTypes.swapCurrency });
  }

  useEffect(() => {
    getExchangeRates();
    // const timerId = setInterval(() => {
    //   getExchangeRates();
    // }, 10000);
    // return () => {
    //   clearInterval(timerId);
    // };
  }, [from.code, getExchangeRates]);

  return (
    <CurrenciesContainer>
      {console.log(from, to, response)}
      <SwapIcon onClick={handleSwap}>
        <SwapIconSvg color="#3388ff" size="18" />
      </SwapIcon>
      <TrandingIcon label={getExchangeRate()}>
        <TrendingUpIcon />
      </TrandingIcon>
      <CurrencyWhiteCard>
        <CardCurrencySelect>
          <Select
            options={options}
            value={from.code}
            onChange={e => {
              handleOnChange(
                ActionTypes.changeFromCode,
                e.target.value
              );
            }}
          ></Select>
        </CardCurrencySelect>
        <CardCurrencyInput>
          <CurrencyInput
            prefix="- "
            tabIndex="1"
            placeholder="0.00"
            maxLength="16"
            value={from.value}
            onChange={(e: any) => {
              handleOnChange(
                ActionTypes.changeFromValue,
                e.target.value
              );
            }}
          ></CurrencyInput>
        </CardCurrencyInput>
      </CurrencyWhiteCard>
      <CurrencyCard>
        <CardCurrencySelect>
          <Select
            options={options}
            value={to.code}
            onChange={e => {
              handleOnChange(
                ActionTypes.changeToCode,
                e.target.value
              );
            }}
          ></Select>
        </CardCurrencySelect>
        <CardCurrencyInput>
          <CurrencyInput
            prefix="+ "
            placeholder="0.00"
            maxLength="16"
            value={to.value}
            onChange={(e: any) => {
              handleOnChange(
                ActionTypes.changeToValue,
                e.target.value
              );
            }}
          ></CurrencyInput>
        </CardCurrencyInput>
      </CurrencyCard>
    </CurrenciesContainer>
  );
};

export default CurrenciesExchange;
