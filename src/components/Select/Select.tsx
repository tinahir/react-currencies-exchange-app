import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const MAX_HEIGHT = '42px';

const selectBaseStyles = () => css`
  label: select;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 41, 51);
  font-size: 16px;
  line-height: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(216, 221, 225);
  border-radius: 4px;
  padding: 8px 32px 8px 12px;
  appearance: none;
  box-shadow: inset 0 1px 2px 0 rgba(102, 113, 123, 0.12);
  max-height: ${MAX_HEIGHT};
  position: relative;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:focus,
  &:hover,
  &:active {
    outline: none;
  }

  &:focus {
  }

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;

const containerBaseStyles = () => css`
  label: select__container;
  display: block;
  position: relative;
  margin-bottom: 16px;
`;

const SelectContainer = styled('div')`
  ${containerBaseStyles};
`;

const SelectElement = styled('select')`
  ${selectBaseStyles};
`;

const Select: React.FC<any> = ({
  value,
  placeholder,
  disabled,
  noMargin,
  inline,
  invalid,
  options,
  children,
  renderPrefix: RenderPrefix,
  validationHint,
  ...props
}) => {
  // const prefix = RenderPrefix && (
  //   <RenderPrefix css={prefixStyles} value={value} />
  // );
  // const showInvalid = !disabled && invalid;

  return (
    <SelectContainer {...{ noMargin, inline, disabled }}>
      {/* {prefix} */}
      <SelectElement
        {...{
          ...props,
          invalid,
          value,
          disabled,
          // hasPrefix: !!prefix
        }}
      >
        {!value && (
          <option key="placeholder" value="">
            {placeholder}
          </option>
        )}
        {children ||
          (options &&
            options.map(({ label, ...rest }: {label: string, value:any}) => (
              <option key={rest.value} {...rest}>
                {label}
              </option>
            )))}
      </SelectElement>
      {/* <SelectIcon invalid={showInvalid} /> */}
      {/* {showInvalid && <InvalidIcon />} */}

    </SelectContainer>
  );
};

export default Select;
