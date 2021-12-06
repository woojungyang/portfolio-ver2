import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled;
export { css };

export * from './common';

export const font = {
  kr: `'Gowun Dodum'`,
  en: `'Roboto Mono'`,
};

export const color = {
  info: '#003f7d',
  dark: '#002347',
  danger: '#ff5003',
  secondary: '#FF9B6A',
  light: '#fedc97',
  black: '#222',
  lightBlack: '#dedede',
  success: '#fdba21',
  primary: '#219ebc',
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
  xl: ` (max-width: ${size.xl})`,
  lg: ` (max-width: ${size.lg})`,
  md: ` (max-width: ${size.md})`,
  sm: ` (max-width: ${size.sm})`,
  xs: ` (max-width: ${size.xs})`,
};

export const flex = ({ w = 'nowrap', h = 'flex-start', v = 'stretch' }) => {
  return css`
    display: flex;
    flex-wrap: ${w};
    justify-content: ${h};
    align-items: ${v};
  `;
};
