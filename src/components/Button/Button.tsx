import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ButtonProps = {
  children: string;
  disabled: boolean;
  onClick?: () => void;
};

const blues = {
  b100: '#EDF4FC',
  b200: '#DAEAFF',
  b300: '#AFD0FE',
  b400: '#7FB5FF',
  b500: '#3388FF',
  b700: '#1760CE',
  b900: '#003C8B',
};

const baseStyles = () => css`
  label: button;
  border-style: solid;
  border-width: 1px;
  background-color: ${blues.b500};
  border-color: ${blues.b700};
  border-radius: 4px;
  box-shadow: inset 0 1px 0 1px rgba(255, 255, 255, 0.06);
  display: block;
  cursor: pointer;
  width: auto;
  height: auto;
  text-align: center;
  text-decoration: none;
  font-size: 19px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 500;
  width: 100%;
  display: block;
  padding: 8px;

  &:active {
    background-color: ${blues.b700};
    border-color: ${blues.b900};
    box-shadow: inset 0 4px 8px 0 rgba(12, 15, 20, 0.3);
  }

  &:focus {
    background-color: ${blues.b700};
    border-width: 2px;
    outline: 0;
  }

  &:hover {
  }

  &:hover,
  &:active {
    background-color: ${blues.b700};
    border-width: 1px;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
    user-selectable: none;
  }
`;

const ButtonElement = styled('button')`
  ${baseStyles};
`;

const Button = (props: ButtonProps) => {
  return <ButtonElement {...props} />;
};

export default Button;
