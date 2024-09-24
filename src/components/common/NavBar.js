import React from 'react';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';

import { flex } from 'style/mixin';
import { useUserDevice } from 'hooks/useUserDevice';

export default function NavBar({ isDay, isMobile }) {
  return (
    <NavBarWrapper isMobile={isMobile}>
      <img src={isDay ? require('assets/img/logo2.png') : require('assets/img/logo1.png')} />

      {isMobile ? (
        <GiHamburgerMenu />
      ) : (
        <div className="menu-wrap">
          {menuList.map((menu, index) => (
            <p key={index}>{menu.label}</p>
          ))}
        </div>
      )}
    </NavBarWrapper>
  );
}

const menuList = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Works' },
  { id: 3, label: 'Resume' },
];

const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
  left: 0;
  ${flex({ justify: 'space-between' })};
  padding: ${({ isMobile }) => (!isMobile ? '40px 80px' : '20px 16px')};
  background-color: var(--color-background-100);
  height: ${({ isMobile }) => (isMobile ? '38px' : '70px')};
  max-width: var(--size-max-width);
  margin: auto;
  font-size: 18px;
  img {
    max-width: 150px;
    width: 100%;
  }
  .menu-wrap {
    ${flex};
    p {
      font-weight: 500;
      margin-right: 80px;
      cursor: pointer;
      font-size: 22px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;
