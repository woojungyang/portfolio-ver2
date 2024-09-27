import React, { useLayoutEffect, useMemo } from 'react';

import styled, { css } from 'styled-components';

import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

import { useUserDevice } from 'hooks/useUserDevice';
import { useTheme } from 'context/themeProvider';
import { flex } from 'style/mixin';

import NavBar from './NavBar';

export default function CommonLayout({ children }) {
  const [themeMode, toggleTheme] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  const isMobile = useUserDevice();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainContainer isDay={isDayTheme} isMobile={isMobile}>
      <NavBar isDay={isDayTheme} isMobile={isMobile} />
      <div className="content_container">
        {children}
        <div className="switch-wrap">
          <SwitchContainer onClick={toggleTheme} isDay={isDayTheme}>
            <FaMoon size={16} color="#fff" />
            <MdWbSunny size={17} color="var(--color-primary)" />
            <Switch isDay={isDayTheme}></Switch>
          </SwitchContainer>
        </div>
      </div>
      <div className="footer">
        <p> woojungyang ⓒ {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  opacity: 0;
  animation: fadeInAnimation 1.5s ease forwards;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 0px;
  /* background-color: orange; */
  .test {
    position: sticky;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: pink;
  }
  .content_container {
    flex: 1;
    width: 100%;
    padding: ${({ isMobile }) => (!isMobile ? '40px 80px' : '20px 16px')};
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: var(--size-max-width);
    margin: auto;
    position: relative;
  }

  .switch-wrap {
    position: sticky;
    bottom: 3%;
    margin-left: calc(100% - 58px);
  }
  .footer {
    width: 100%;
    text-align: center;
    height: ${({ isMobile }) => (isMobile ? '35px' : '40px')};
    ${flex};
    background-color: ${({ isDay }) => (isDay ? 'var(--color-primary)' : 'var(--color-secondary)')};
    font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
  }
`;

const SwitchContainer = styled.div`
  width: 57px;
  height: 30px;
  background-color: ${({ isDay }) =>
    isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)'};
  border: ${({ isDay }) => (isDay ? '0px' : '1px solid rgba(225,225,225,0.2)')};
  border-radius: 50px;
  ${flex({ justify: 'space-between', align: 'center' })};
  padding: 0 6.5px;
  cursor: pointer;
  box-shadow: 0 2px 5px ${({ isDay }) => (isDay ? '#ddd' : 'transparent')};
  transition: background-color 0.5s ease-in 0.3s;
  position: relative;
`;

const Switch = styled.div`
  border: 2px solid
    ${({ isDay }) => (isDay ? ' var(--color-primary)' : 'var(--color-background-100)')};
  background-color: ${({ isDay }) =>
    isDay ? 'var(--color-background-100)' : 'var(--color-dark-300)'};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  transition: transform 0.3s ease;
  transform: ${({ isDay }) => (isDay ? 'translateX(0)' : 'translateX(23px)')};
`;
