import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const inputBaseStyles = () => css`
  label: input;
  border-width: 0;
  border-style: solid;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #9da7b1;
    transition: color 200ms ease-in-out;
  }
`;

const InputElement = styled('input')`
  ${inputBaseStyles};
`;

const StyledInput: React.FC<any> = ({deepRef, inputStyles, ...props}) => {
  return (
    <InputElement
      { ...{
        ...props,
        ref: deepRef,
        css: inputStyles
      }}
    />
  )
};

const Input: React.FC  = props => <StyledInput {...props} />;

export default Input;
