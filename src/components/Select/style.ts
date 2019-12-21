/** @jsx jsx */
import { css } from '@emotion/core';import styled from "@emotion/styled";
import { ReactComponent as ArrowsIcon } from '../../icons/chevron-down.svg';

const MAX_HEIGHT = '42px';

export const containerBaseStyles = () => css`
  label: select__container;
  display: block;
  position: relative;
  margin-bottom: 16px;
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

// export const searchWrapperStyles = () => css`
//   margin-top: 0.25rem;
//   position: absolute;
//   z-index: 10;
//   width: 100%;
//   left: 0;
//   background-color: rgb(255, 255, 255);
//   box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0.25rem, rgba(0, 0, 0, 0.14) 0px 0.5rem 0.75rem;
//   border-radius: 0.25rem;
// `;

// export const searchInputWrapperStyle = () => css`
//   display: flex;
//   margin: 1rem 2rem;
//   padding: 0px;
//   border-width: initial;
//   border-style: none;
//   border-color: initial;
//   border-image: initial;
// `;

// export const searchResultWrapperStyles = () => css`
//   max-height: 21rem;
//   overflow: auto;
// `;

// export const searchItemStyles = () => css`
//   position: relative;
//   display: block;
//   text-align: left;
//   width: 100%;
//   height: 3rem;
//   font-size: 16px;
//   line-height: 24px;
//   cursor: pointer;
//   padding: 0px 2rem;
//   background: none;
//   transition: background-color 0.2s ease 0s;
//   border-width: initial;
//   border-style: none;
//   border-color: initial;
//   border-image: initial;
//   &:focus,
//   &:active {
//     outline: none;
//   }
//   &:hover {
//     background-color: #EDF4FC;
//     ;
//   }
// `;

// const titleStyles = () => css`
//   font-weight: 500;
// `;

// export const Title = styled('div')`
//   ${titleStyles}
// `;

// const subTitleStyles = () => css`
//   font-size: 12px;
//   color: gray;
// `;

// export const SubTitle = styled('div')`
//   ${subTitleStyles}
// `;
