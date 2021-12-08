import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled;
export { css };

export * from './common';

export const font = {
  kr: `'Gowun Dodum'`,
  en: `'Encode Sans'`,
};

export const color = {
  dark: '#4a6163',
  danger: '#f17a7e',
  secondary: '#f9a66c',
  light: '#f9faf4',
  black: '#000',
  lightBlack: '#dedede',
  success: '#ffc94b',
  white: '#FFFFFF',
};

export const size = {
  xxl: '1599px',
  xl: '1399px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
};

export const media = {
  xxl: ` screen and (max-width: ${size.xxl})`,
  xl: ` screen and (max-width: ${size.xl})`,
  lg: ` screen and (max-width: ${size.lg})`,
  md: ` screen and (max-width: ${size.md})`,
  sm: ` screen and (max-width: ${size.sm})`,
  xs: ` screen and (max-width: ${size.xs})`,
};

export const flex = ({ w = 'nowrap', h = 'flex-start', v = 'stretch' }) => {
  return css`
    display: flex;
    flex-wrap: ${w};
    justify-content: ${h};
    align-items: ${v};
  `;
};
