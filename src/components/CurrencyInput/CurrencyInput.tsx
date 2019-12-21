import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import MaskedInput from '../MaskedInput';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const inputBaseStyles = () => css`
  label: currency-input__input;
  text-align: right;
  font-size: 24px;
  line-height: 32px;
  caret-color: #3388FF;
  margin-bottom: 16px;
`;

const CurrencyInput: React.FC<any> = (props) => {
  const numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
  });

  return (
    <MaskedInput
      inputStyles={css([
        inputBaseStyles()
      ])}
      type="text"
      mask={numberMask}
      {...props}
    />
  );
}

export default CurrencyInput;
