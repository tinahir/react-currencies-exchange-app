import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { conformToMask } from 'react-text-mask';

export const numberMask = (prefix: string) =>
  createNumberMask({
    prefix,
    suffix: '',
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    allowLeadingZeroes: true,
  });

export const conformedCurrency = (value: string, prefix = '') =>
  conformToMask(value, numberMask(prefix), { guide: false });

export const formatCurrency = (value: string) => {
  return conformedCurrency(value).conformedValue;
};

export const currencyToNumber = (value: string) => {
  return Number(value.replace(/[^0-9.]/g, ''));
};
