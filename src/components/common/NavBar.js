import React from 'react';
import styled from 'styled-components';

import { flex } from 'style/mixin';

export default function NavBar({ isDayTheme }) {
  return (
    <NavBarWrapper>
      <img src={isDayTheme ? require('assets/img/logo2.png') : require('assets/img/logo1.png')} />

      <div className="menu-wrap">
        {menuList.map((menu, index) => (
          <p key={index}>{menu.label}</p>
        ))}
      </div>
    </NavBarWrapper>
  );
}

const menuList = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Works' },
  { id: 3, label: 'Resume' },
];

const NavBarWrapper = styled.div`
  ${flex({ justify: 'space-between' })};
  max-width: var(--size-max-width);
  margin: auto;
  width: 100%;
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
