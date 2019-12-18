import React, { Children, cloneElement } from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const buttonStyles = () => css`
  label: icon-button;
  padding: 0;
  margin: 0;
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: initial;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  border-radius: 50%;

  &:focus,
  &:active {
    outline: none;
  }
  > svg {
    height: 100%;
    width: 100%;
  }
`;

const Button = styled('button')(buttonStyles);

const Lable = styled.span`
  width: 100%;
  display: flex;
`;

/**
 * Accessible icon button.
 */
const IconButton: React.FC<any> = ({ children, ...props }) => {
  if (!children) {
    return null;
  }

  return (
    <Button type="button" {...props}>
      <Lable>{children}</Lable>
    </Button>
  );
};


export default IconButton;
