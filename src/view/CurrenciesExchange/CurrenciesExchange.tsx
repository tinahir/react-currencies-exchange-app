import React, { useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Select from '../../components/Select';
import CurrencyInput from '../../components/CurrencyInput';
import {
  formatCurrency,
  currencyToNumber,
} from '../../components/CurrencyInput/CurrencyService';
import SwapIconSvg from '../../icons/SwapIcon';
import currencies from '../../config/currencies.json';
import config from '../../config/app-settting.json';
import {
  SwapIcon,
  TrandingIcon,
  TrendingUpIcon,
  CurrenciesContainer,
  CurrencyCard,
  CardCurrencySelect,
  CardCurrencyInput,
  CurrencyWhiteCard,
  CardItem,
  BalanceLable,
  ExchangeButon,
  ExchangeButonContainer,
} from './style';
import useCurrencyExchange, {
  ActionTypes,
} from '../../hooks/useCurrencyExchange';

const options = new Array<{ label: string; value: string }>();
for (let key of Object.keys(currencies).sort()) {
  options.push({
    label: key,
    value: key,
  });
}

const CurrenciesExchange: React.FC<unknown> = () => {
  const [
    { from, to, response, myCurrenciesBalance },
    getExchangeRates,
    dispatch,
  ] = useCurrencyExchange(config.apiUrl);

  const handleOnChange = (type: ActionTypes, payload: string) => {
    dispatch({ type, payload });
  };

  const handleExchangeOnClick = () => {
    dispatch({ type: ActionTypes.exchangeCurrency });
  };

  const getExchangeRate = () => {
    let exchangeRate = response[to.code];
    if (exchangeRate) {
      return `${from.code} 1 = ${to.code} ${Number(response[to.code]).toFixed(
        4
      )}`;
    }
    return '';
  };

  const handleSwap = () => {
    dispatch({ type: ActionTypes.swapCurrency });
  };

  const getBalance = (code: string): string => {
    const ammout = myCurrenciesBalance.get(code);
    if (ammout) {
      return formatCurrency(myCurrenciesBalance.get(code)!.toString());
    }
    return '0';
  };

  const shouldDisabledExcahnge = () => {
    const currentAmount = myCurrenciesBalance.get(from.code) || 0;
    const enterAmount = currencyToNumber(from.value);
    return (
      currentAmount == 0 ||
      !from.value ||
      enterAmount === 0 ||
      enterAmount > currentAmount
    );
  };

  useEffect(() => {
    getExchangeRates();
    const timerId = setInterval(() => {
      getExchangeRates();
    }, config.currencyPollTime);
    return () => {
      clearInterval(timerId);
    };
  }, [from.code, getExchangeRates]);

  return (
    <CurrenciesContainer>
      <SwapIcon tabIndex={-1} onClick={handleSwap}>
        <SwapIconSvg color="#3388ff" size="18" />
      </SwapIcon>
      <TrandingIcon tabIndex={-1} label={getExchangeRate()}>
        <TrendingUpIcon />
      </TrandingIcon>
      <CurrencyWhiteCard>
        <CardItem>
          <CardCurrencySelect>
            <Select
              options={options}
              value={from.code}
              onChange={e => {
                handleOnChange(ActionTypes.changeFromCode, e.target.value);
              }}
            ></Select>
          </CardCurrencySelect>
          <CardCurrencyInput>
            <CurrencyInput
              autoFocus={from.isFocused}
              placeholder="0"
              maxLength="15"
              value={from.value}
              onChange={e => {
                handleOnChange(ActionTypes.changeFromValue, e.target.value);
              }}
            ></CurrencyInput>
          </CardCurrencyInput>
        </CardItem>
        <CardItem>
          <BalanceLable>
            Balance: {from.code} {getBalance(from.code)}
          </BalanceLable>
        </CardItem>
      </CurrencyWhiteCard>
      <CurrencyCard>
        <CardItem>
          <CardCurrencySelect>
            <Select
              options={options}
              value={to.code}
              onChange={e => {
                handleOnChange(ActionTypes.changeToCode, e.target.value);
              }}
            ></Select>
          </CardCurrencySelect>
          <CardCurrencyInput>
            <CurrencyInput
              autoFocus={to.isFocused}
              placeholder="0"
              maxLength="15"
              value={to.value}
              onChange={e => {
                handleOnChange(ActionTypes.changeToValue, e.target.value);
              }}
            ></CurrencyInput>
          </CardCurrencyInput>
        </CardItem>
        <CardItem>
          <BalanceLable>
            Balance: {to.code} {getBalance(to.code)}
          </BalanceLable>
        </CardItem>
      </CurrencyCard>
      <ExchangeButonContainer>
        <ExchangeButon
          disabled={shouldDisabledExcahnge()}
          onClick={() => {
            handleExchangeOnClick();
          }}
        >
          Exchange
        </ExchangeButon>
      </ExchangeButonContainer>
    </CurrenciesContainer>
  );
};

export default CurrenciesExchange;
