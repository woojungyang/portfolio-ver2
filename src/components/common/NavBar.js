import React from 'react';
import styled from 'styled-components';

import { MdOutlineMail } from 'react-icons/md';

import { flex } from 'style/mixin';

export default function NavBar() {
  return (
    <NavBarWrapper>
      <div className="email-wrap">
        <div className="email-icon">
          <MdOutlineMail size={20} />
        </div>
        <p>woojungyang1113@gmail.com</p>
      </div>
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
  animation: slideSide 1s forwards ease-out;
  ${flex({ justify: 'space-between' })};
  font-size: 18px;
  .email-wrap {
    ${flex({ justify: 'flex-start' })};
    font-weight: 600;
    .email-icon {
      border: 1px solid var(--color-background-400);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
      ${flex};
    }
  }
  .menu-wrap {
    ${flex};
    p {
      margin-right: 80px;
      cursor: pointer;
      font-size: 20px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
  @keyframes slideSide {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
