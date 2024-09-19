import { css } from 'styled-components';

export const baseShadow = css`
  box-shadow: ${props => `0 10px 6px -6px ${props.color || '#ccc'}`};
`;

export const flex = ({ direction, justify, align, wrap }) => `
  display: flex;
  flex-direction: ${direction ?? 'row'};
  justify-content: ${justify ?? 'center'};
  align-items: ${align ?? 'center'};  
  flex-wrap: ${wrap ?? 'wrap'};
`;
