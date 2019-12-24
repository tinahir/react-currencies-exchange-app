import React from 'react';
import { render } from '@testing-library/react';

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

test('allow user update source currency code', () => {
  const { getByDisplayValue } = render(
    <CurrenciesExchange />
  );

  const sourceCurrency = getByDisplayValue(config.defaultBaseCurrency) as HTMLSelectElement;
  sourceCurrency.value = "USD";

  expect(
    (getByDisplayValue("USD") as HTMLSelectElement).value
  ).toBe("USD");
});

test('allow user update target currency code', () => {
  const { getByDisplayValue } = render(
    <CurrenciesExchange />
  );

  const targetCurrency = getByDisplayValue(config.defaultToCurrency) as HTMLSelectElement;
  targetCurrency.value = "GBP";

  expect(
    (getByDisplayValue("GBP") as HTMLSelectElement).value
  ).toBe("GBP");
});
