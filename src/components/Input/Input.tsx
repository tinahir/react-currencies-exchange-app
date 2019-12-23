import React, { RefObject } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const inputBaseStyles = () => css`
  label: input;
  background-color: transparent;
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

type InputProps = {
  deepRef: RefObject<HTMLInputElement>;
  inputStyles: any;
}

const Input = ({deepRef, inputStyles, ...props}: InputProps) => {
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

export default Input;
