import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import MaskedInput from '../MaskedInput';
import { numberMask } from './CurrencyService';

const inputBaseStyles = () => css`
  label: currency-input__input;
  text-align: right;
  font-size: 24px;
  line-height: 32px;
  caret-color: #3388ff;
  margin-bottom: 16px;
`;

const CurrencyInput: React.FC<any> = ({ prefix, ...props }) => {
  return (
    <MaskedInput
      inputStyles={css([inputBaseStyles()])}
      type="text"
      mask={numberMask(prefix)}
      {...props}
    />
  );
};

export default CurrencyInput;
