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

type CurrencyInputProps = {
  prefix?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  placeholder?: string;
  maxLength?: string;
  value: string;
};

const CurrencyInput = ({prefix ='', ...props }: CurrencyInputProps) => {
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
