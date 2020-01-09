/** @jsx jsx */
import { css } from '@emotion/core';import styled from "@emotion/styled";
import { ReactComponent as ArrowsIcon } from '../../icons/chevron-down.svg';

const MAX_HEIGHT = '42px';

export const containerBaseStyles = () => css`
  label: select__container;
  display: block;
  position: relative;
`;

export const selectBaseStyles = () => css`
  label: select;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  border-width: 0;
  border-style: solid;
  border-color: none;
  border-radius: 4px;
  padding: 8px 32px 8px 12px;
  appearance: none;
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

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;

export const suffixBaseStyles = () => css`
  label: select__icon;
  display: block;
  z-index: 1;
  pointer-events: none;
  position: absolute;
  top: 1px;
  right: 1px;
  height: 16px;
  width: 16px;
  margin: 12px;
`;

export const SelectContainer = styled('div')`
  ${containerBaseStyles};
`;

export const SelectElement = styled('select')`
  ${selectBaseStyles};
`;

export const SelectIcon = styled(ArrowsIcon)`
  ${suffixBaseStyles};
`;