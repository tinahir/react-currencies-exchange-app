import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { conformToMask } from 'react-text-mask';

export const numberMask = (prefix: string) =>
  createNumberMask({
    prefix,
    suffix: '',
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
  });

export const conformedCurrency = (value: string, prefix = '') =>
  conformToMask(value, numberMask(prefix), { guide: false });
