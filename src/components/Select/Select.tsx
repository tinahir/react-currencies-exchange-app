import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import {
  SelectContainer,
  SelectElement,
  SelectIcon
} from './style';

const Select: React.FC<any> = ({ value, placeholder, options, children, ...props }) => {
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
        {children ||
          (options &&
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
