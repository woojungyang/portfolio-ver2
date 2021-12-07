import styled, { color, font, media } from '../../style';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  font-family: ${font.en};
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${color.black};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2em;
  right: 1.5em;
  background: transparent;
  font-size: 1em;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media ${media.xs} {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  text-decoration: none;
  list-style: none;
  transition: 0.2s all ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: ${color.secondary};
    transition: 0.2s all ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${color.secondary};
  white-space: nowrap;
  padding: 1em 4em;
  color: ${color.black};
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  &:hover {
    background: #fff;
    transition: 0.2s all ease-in-out;
    color: black;
  }
`;
