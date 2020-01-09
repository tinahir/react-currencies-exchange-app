import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ReactComponent as TrendingUpIconSvg } from '../../icons/trending-up.svg';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';

const MAX_CARD_HEIGHT = '150px';
const ICON_BORDER_WIDTH = 3;
const ICON_PADDING = 4;
const ICON_HEIGHT = 18;
const ICON_TOP = ICON_BORDER_WIDTH + ICON_PADDING + ICON_HEIGHT / 2;

const baseIconStyles = () => css`
  position: absolute;
  top: calc(${MAX_CARD_HEIGHT} - ${ICON_TOP}px);
  background-color: white;
  border-width: ${ICON_BORDER_WIDTH}px;
  border-style: solid;
  border-color: #eef0f2;
  color: #3388ff;
  padding: ${ICON_PADDING}px;
`;

const swapIconStyles = () => css`
  label: swap-icon;
  left: 8px;
`;

export const SwapIcon = styled(IconButton)`
  ${baseIconStyles}
  ${swapIconStyles}
`;

const trandingIconStyles = () => css`
  label: tranding-icon;
  left: calc(50% - ${ICON_BORDER_WIDTH + ICON_PADDING + 145 / 2}px);
  border-radius: 30px;
`;

export const TrandingIcon = styled(IconButton)`
  ${baseIconStyles}
  ${trandingIconStyles}
`;

export const TrendingUpIcon = styled(TrendingUpIconSvg)`
  width: 18px;
  height: 18px;
`;

const containerBaseStyles = () => css`
  label: currencies-exchange__container;
  display: block;
  position: relative;
  background-color: #eef0f2;
  height: 100vh;
  min-width: 425px;
  margin: auto;
`;

const baseCardStyles = () => css`
  label: card;
  display: flex;
  flex-direction: column;
  height: ${MAX_CARD_HEIGHT};
  padding: 16px;
  justify-content: center;
`;

export const CurrenciesContainer = styled('div')`
  ${containerBaseStyles};
`;

export const CurrencyCard = styled('div')`
  ${baseCardStyles};
`;

export const CurrencyWhiteCard = styled(CurrencyCard)`
  background-color: white;
`;

export const CardCurrencySelect = styled('div')`
  select {
    font-size: 24px;
  }
`;

export const CardCurrencyInput = styled('div')`
  flex: 1;
`;

export const CardItem = styled('div')`
  label: carditem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BalanceLable = styled('div')`
  label: balance__lable;
  font-size: 12px;
  color: gray;
  padding: 0 12px;
`;

export const ExchangeButonContainer = styled('div')`
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExchangeButon = styled(Button)`
  label: exchange__button;
  border-radius: 25px;
  max-width: 300px;
`;
