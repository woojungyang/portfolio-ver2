// import styled from 'styled-components';
import styled, { color, font, media } from '../../style';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  font-family: ${font.en};
  background: ${({ scrollNav }) => (scrollNav ? '#FFFFFF' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  position: sticky;
  top: 0;
  z-index: 10;
  @media ${media.md} {
    transition: 0.2s all ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;

  max-width: 1200px;
`;

export const NavLogo = styled(Link)`
  color: ${color.success};
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  margin-left: 1em;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${media.sm} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 150%);
    font-size: 1.2em;
    cursor: pointer;
    color: ${color.success};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media ${media.sm} {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(Link)`
  color: ${color.success};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5em;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid ${color.success};
  }
`;
export const Navfile = styled.a`
  color: ${color.success};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid ${color.success};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media ${media.sm} {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: ${color.success};
  white-space: nowrap;
  padding: 10px 22px;
  margin-right: 1em;
  color: ${color.white};
  font-size: 1em;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: ${color.light};
    color: ${color.dark};
  }
`;
