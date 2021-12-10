import styled, { color, font, media } from '../style';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  font-family: ${font.en};
  font-weight: 400;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ffc94b' : '#4a6163')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48ox' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#4a6163' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#4a6163')};
    color: ${color.dark};
  }
`;
