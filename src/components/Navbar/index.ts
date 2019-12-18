import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = () => css`
  label: header__title;
`;

const Navbar = styled('h1')(baseStyles);

/**
 * @components
 */
export default Navbar;
