import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import IconButton from '../../components/IconButton';

const containerBaseStyles = () => css`
  label: currencies-exchange__container;
  display: block;
  position: relative;
  background-color: #eef0f2;
  height: 100vh;
  width: 768px;
  margin: auto;
`;

const baseStyles = () => css`
  label: card;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;

const FromCurrencyCard = styled('div')`
  ${baseStyles};
  background-color: white;
`;

const ToCurrencyCard = styled('div')`
  ${baseStyles};
`;

const SelectContainer = styled('div')`
  ${containerBaseStyles};
`;

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3388ff">
    <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const Icon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-trending-up"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const SwapIconStyles = () => css`
  label: swap-icon;
  position: absolute;
  top: calc(300px - 26px);
  left: 8px;
  background-color: white;
  border-width: 2px;
  border-style: solid;
  border-color: #eef0f2;
  color: #3388ff;
`;

const TrandingIconStyles = () => css`
  label: swap-icon;
  position: absolute;
  top: calc(300px - 26px);
  left: calc(50% - 38px);
  background-color: white;
  border-width: 2px;
  border-style: solid;
  border-color: #eef0f2;
  color: #3388ff;
`;

const CurrenciesExchange: React.FC<any> = () => {
  return (
    <SelectContainer>
      <IconButton css={SwapIconStyles}>
        <Icon />
      </IconButton>
      <IconButton css={TrandingIconStyles}>
        <Icon2 />
      </IconButton>
      <FromCurrencyCard />
      <ToCurrencyCard />
    </SelectContainer>
  );
};

export default CurrenciesExchange;
