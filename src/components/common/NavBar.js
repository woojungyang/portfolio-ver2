import React, { useState } from 'react';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';

import { flex } from 'style/mixin';
import { Drawer } from '@mui/material';

export default function NavBar({ isDay, isMobile }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen) {
    setOpen(newOpen);
  }

  return (
    <>
      <NavBarWrapper isMobile={isMobile} isDay={isDay}>
        <img src={isDay ? require('assets/img/logo2.png') : require('assets/img/logo1.png')} />

        {isMobile ? (
          <GiHamburgerMenu onClick={() => toggleDrawer(true)} color={isDay ? 'black' : 'white'} />
        ) : (
          <div className="menu-wrap">
            {menuList.map((menu, index) => (
              <p key={index}>{menu.label}</p>
            ))}
          </div>
        )}
      </NavBarWrapper>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="top">
        <DrawerContent isDay={isDay}>
          <div className="drawer-header">
            <img src={isDay ? require('assets/img/logo2.png') : require('assets/img/logo1.png')} />
            <IoIosClose size={32} onClick={() => toggleDrawer(false)} />
          </div>

          {menuList.map((menu, index) => (
            <p key={index}>{menu.label}</p>
          ))}
        </DrawerContent>
      </Drawer>
    </>
  );
}

const menuList = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Works' },
  { id: 3, label: 'Resume' },
];

const NavBarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ isDay }) =>
    isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)'};
  z-index: 99;
  ${flex({ justify: 'space-between' })};
  padding: ${({ isMobile }) => (!isMobile ? '40px 80px' : '20px 16px')};
  max-width: var(--size-max-width);
  margin: auto;
  font-size: 18px;
  /* box-shadow: 0 1px 2px
    ${({ isMobile }) =>
    !isMobile ? 'var(--color-background-100)' : 'var(--color-background-400)'}; */

  img {
    max-width: ${({ isMobile }) => (isMobile ? '120px' : '150px')};
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

const DrawerContent = styled.div`
  background-color: ${({ isDay }) =>
    isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)'};
  padding: 20px 40px;

  height: 100vh;
  color: ${({ isDay }) => (!isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)')};
  ${flex({ direction: 'column' })};
  position: relative;
  .drawer-header {
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    padding: 14px 16px;
    padding-right: 10px;
    ${flex({ justify: 'space-between' })};
    img {
      max-width: ${({ isMobile }) => (isMobile ? '120px' : '150px')};
      width: 100%;
    }
    margin-bottom: 40px;
  }
  p {
    font-weight: 500;
    line-height: 220%;
    cursor: pointer;
    font-size: 22px;
    text-align: center;
    font-weight: 700;
  }
`;
