import styled, { color, font, media } from '../style';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  font-family: ${font.en};
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#4a6163' : '#000')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48ox' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
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
