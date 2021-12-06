import styled, { media } from '../../style';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from ' react-scroll';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  position: sticky;
  top: 0;
  z-index: 10;
  @media ${media.md} {
    transition: 0ms.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
