import { css } from 'styled-components';

export const baseShadow = css`
  box-shadow: ${props => `0 10px 6px -6px ${props.color || '#ccc'}`};
`;

export const flex = ({ direction, justify, align, wrap }) => `
  display: flex;
  flex-direction: ${direction ?? 'row'};
  justify-content: ${justify ?? 'center'};
  align-items: ${align ?? 'center'};  
  flex-wrap: ${wrap ?? 'nowrap'};
`;

export const media = {
  mobile: (...args) => css`
    @media (max-width: var(--size-mobile)) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 768px) and (max-width: var(--size-tablet)) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: var(--size-desktop)) {
      ${css(...args)};
    }
  `,
};
