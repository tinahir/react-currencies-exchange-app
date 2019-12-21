/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const FlexRow = () => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol= () => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;