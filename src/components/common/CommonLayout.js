import React, { useMemo } from 'react';

import styled from 'styled-components';

import { MdSignalWifi4BarLock } from 'react-icons/md';
import { FaBatteryFull } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { defaultPadding } from 'style/variables';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io';

import { useTheme } from 'context/themeProvider';
import { flex } from 'style/mixin';

export default function CommonLayout({ children, title }) {
  const [themeMode, toggleTheme] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  return (
    <MainContainer>
      <MainWrapper>
        <StatusBar>
          <span>
            {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
          </span>
          <div>
            <GiNetworkBars size="25" className="icon" />
            <MdSignalWifi4BarLock size="25" className="icon" />
            <FaBatteryFull size="25" className="icon" />
          </div>
        </StatusBar>
        <TitleWrapper>{title}</TitleWrapper>
        <ContentWrapper>
          <div className="switch-wrap">
            <SwitchContainer onClick={toggleTheme} isDay={isDayTheme}>
              <FaMoon size={16} color="#fff" />
              <MdWbSunny size={17} color="var(--primary-red-color)" />
              <Switch isDay={isDayTheme}></Switch>
            </SwitchContainer>
          </div>
          <ProfileWrapper>
            <img src={require('assets/img/main2.png')} />
            <div className="greetings-wrap">
              <p>Hello {'(´>∀<｀)♡'}</p>
              <p>Welcome to my portfolio page</p>
              <p>I’m Woojung Yang.</p>
              <div className="button-wrap">
                <ProfileButton>
                  <IoDocumentAttachOutline size="14" />
                  &nbsp;
                  <p>Documents</p>
                </ProfileButton>
                <GitButton onClick={() => window.open('https://github.com/woojungyang')}>
                  <IoLogoGithub size="14" />
                  &nbsp;<p>GitHub</p>
                </GitButton>
              </div>
            </div>
          </ProfileWrapper>
          <SkillWrapper>
            <p className="section-title">Skills</p>
            <hr className="section-hr" />
          </SkillWrapper>
          {children}
        </ContentWrapper>
        <Footer isDay={isDayTheme}>
          <p> woojung.archive ⓒ {new Date().getFullYear()} All rights reserved.</p>
        </Footer>
      </MainWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const MainWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  margin: auto;
  ${flex({ direction: 'column', justify: 'flex-start' })};
`;
const StatusBar = styled.div`
  width: 100%;
  ${defaultPadding}
  ${flex({ justify: 'space-between' })};
  .icon {
    margin-left: 10px;
  }
  span {
    font-size: 22px;
    font-weight: 700;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 10px;
  ${defaultPadding}
  text-align: center;
  font-weight: 600;
  font-size: 2em;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  ${defaultPadding}
  /* background-color: pink; */
    width: 100%;
  .switch-wrap {
    width: 100%;
    margin-top: 20px;
    ${flex({ justify: 'flex-end' })};
  }
  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
  }
  .section-hr{
    width: ;
  }
`;
const Footer = styled.div`
  width: 100%;
  ${defaultPadding}
  background-color:${({ isDay }) => (isDay ? '#000' : 'hsla(var(--white-color-100), 0.2)')};
  color: white;
  text-align: center;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 3px 6px hsla(var(--dark-color-200), 0.16),
    0 3px 6px hsla(var(--dark-color-200), 0.2);
  height: 190px;
  margin-top: 20px;
  background-color: var(--primary-red-color);
  position: relative;
  font-size: 22px;
  img {
    position: absolute;
    bottom: -20%;
    width: 320px;
  }
  .greetings-wrap {
    margin-left: 350px;
    margin-right: 16px;
    height: 100%;
    ${flex({ direction: 'column', justify: 'center', align: 'flex-start' })};
    text-align: left;
    p {
      font-weight: 600;
      line-height: 30px;
    }
  }
  .button-wrap {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 100%;
    text-align: right;

    ${flex({ justify: 'flex-end' })};
  }
`;

const ProfileButton = styled.div`
  border: none;
  font-size: 15px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0px;
  border-radius: 5px;
  height: 28px;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  ${flex};
  p {
    line-height: 0px !important;
  }
`;
const GitButton = styled(ProfileButton)`
  margin-left: 10px;
`;

const SkillWrapper = styled.div`
  margin-top: 50px;
`;
const SwitchContainer = styled.div`
  width: 57px;
  height: 30px;
  background-color: ${({ isDay }) => (isDay ? 'var(--white-color-100)' : 'var( --dark-color-100)')};
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
  border: 2px solid ${({ isDay }) => (isDay ? ' var(--primary-red-color)' : 'white')};
  background-color: ${({ isDay }) => (isDay ? 'var(--white-color-100)' : 'var( --dark-color-100)')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  position: absolute;
  z-index: 1;
  transition: transform 0.3s ease;
  transform: ${({ isDay }) => (isDay ? 'translateX(0)' : 'translateX(23px)')};
`;
