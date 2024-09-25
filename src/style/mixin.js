import { DeviceSize } from 'models/Device';
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
  desktop: (...args) => css`
    @media (min-width: ${DeviceSize.Desktop}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${DeviceSize.Mobile}px) and (max-width: ${DeviceSize.Tablet}px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: ${DeviceSize.Mobile - 1}px) {
      ${css(...args)};
    }
  `,
};
