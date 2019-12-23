import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const buttonStyles = () => css`
  label: icon-button;
  padding: 0;
  margin: 0;
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

const Label = styled.span`
  width: 100%;
  display: flex;
`;
const Title = styled.span`
  font-size: 16px;
  padding: 0 8px;
`;

type IconButtonProps = {
  tabIndex?: number;
  children: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

const IconButton = ({
  children,
  label,
  ...props
}: IconButtonProps) => {
  if (!children) {
    return null;
  }

  return (
    <Button type="button" {...props}>
      <Label>
        {children}
        {label && <Title>{label}</Title>}
      </Label>
    </Button>
  );
};

export default IconButton;
