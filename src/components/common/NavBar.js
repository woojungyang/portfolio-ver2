import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';

import { flex } from 'style/mixin';
import { Drawer } from '@mui/material';
import { DeviceSize } from 'models/Device';

export default function NavBar({ isDay, isMobile }) {
  const navigation = useNavigate();

  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen) {
    setOpen(newOpen);
  }

  const [hoverMenu, setHoverMenu] = useState('');

  return (
    <>
      <NavBarWrapper isMobile={isMobile} isDay={isDay}>
        <img src={isDay ? require('assets/img/logo2.png') : require('assets/img/logo1.png')} />

        <GiHamburgerMenu
          onClick={() => toggleDrawer(true)}
          color={isDay ? 'black' : 'white'}
          className="mobile-menu"
        />

        <div className="menu-wrap">
          {menuList.map((menu, index) => (
            <p
              className={classNames({
                'active-menu': hoverMenu == menu.label,
                'disabled-menu': !!hoverMenu && hoverMenu !== menu.label,
              })}
              key={index}
              onClick={() => navigation(menu.link)}
              onMouseEnter={() => setHoverMenu(menu.label)}
              onMouseLeave={() => setHoverMenu('')}
            >
              {menu.label}
            </p>
          ))}
        </div>
      </NavBarWrapper>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="top">
        <DrawerContent isDay={isDay} isMobile={isMobile}>
          <div className="drawer-header">
            <img src={isDay ? require('assets/img/logo2.png') : require('assets/img/logo1.png')} />
            <IoIosClose size={32} onClick={() => toggleDrawer(false)} />
          </div>

          {menuList.map((menu, index) => (
            <p key={index} onClick={() => navigation(menu.link)}>
              {menu.label}
            </p>
          ))}
        </DrawerContent>
      </Drawer>
    </>
  );
}

const menuList = [
  { id: 0, label: 'Home', link: '/' },
  { id: 1, label: 'About', link: '/about' },
  { id: 2, label: 'Portfolio', link: '/portfolio' },
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

  img {
    max-width: ${({ isMobile }) => (isMobile ? '120px' : '150px')};
    width: 100%;
  }
  .mobile-menu {
    display: none;
  }
  .menu-wrap {
    ${flex};
    p {
      /* font-weight: 500; */
      margin-right: 80px;
      cursor: pointer;
      font-size: 22px;
      &:last-child {
        margin-right: 0px;
      }
    }
    .active-menu {
      font-weight: 700;
    }
    .disabled-menu {
      opacity: 0.5;
    }
  }
  @media (max-width: ${DeviceSize.Tablet}px) {
    .mobile-menu {
      display: block;
    }
    .menu-wrap {
      display: none;
    }
  }
`;

const DrawerContent = styled.div`
  background-color: ${({ isDay }) =>
    isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)'};
  margin: ${({ isMobile }) => (isMobile ? '20px 40px' : '40px 80px')};

  height: 100vh;
  color: ${({ isDay }) => (!isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)')};
  ${flex({ direction: 'column' })};
  position: relative;
  .drawer-header {
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    /* padding: 14px 16px; */
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
