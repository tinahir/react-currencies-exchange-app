import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CurrenciesExchange from '../view/CurrenciesExchange';
import config from '../config/app-settting.json';

test('show the default value of currencies', () => {
  const { getByDisplayValue, getAllByPlaceholderText } = render(
    <CurrenciesExchange />
  );

  expect(
    (getByDisplayValue(config.defaultBaseCurrency) as HTMLSelectElement).value
  ).toBe(config.defaultBaseCurrency);

  expect(
    (getByDisplayValue(config.defaultToCurrency) as HTMLSelectElement).value
  ).toBe(config.defaultToCurrency);

  expect(getAllByPlaceholderText('0').length).toBe(2);

});

test('allow user update source currency value', () => {
  const { getByDisplayValue, getAllByPlaceholderText } = render(
    <CurrenciesExchange />
  );
});

test('allow user update target currency value', () => {
  const { getByDisplayValue, getAllByPlaceholderText } = render(
    <CurrenciesExchange />
  );
});

test('allow user update source currency code', () => {
  const { getByDisplayValue, getAllByPlaceholderText } = render(
    <CurrenciesExchange />
  );
});

test('allow user update target currency code', () => {
  const { getByDisplayValue, getAllByPlaceholderText } = render(
    <CurrenciesExchange />
  );
});

test('allow user swao source and taget currencies code anbd value', () => {
  const { getByDisplayValue, getAllByPlaceholderText } = render(
    <CurrenciesExchange />
  );
});
