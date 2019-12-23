import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import {
  SelectContainer,
  SelectElement,
  SelectIcon
} from './style';

type SelectProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
};

const Select = ({ value, placeholder, options, ...props }: SelectProps) => {
  return (
    <SelectContainer>
      <SelectElement
        {...{
          ...props,
          value
        }}
      >
        {!value && (
          <option key="placeholder" value="">
            {placeholder}
          </option>
        )}
        {(options &&
            options.map(({ label, ...rest }: { label: string; value: any }) => (
              <option key={rest.value} {...rest}>
                {label}
              </option>
            )))}
      </SelectElement>
      <SelectIcon />
    </SelectContainer>
  );
};

export default Select;
