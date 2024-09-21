import React, { useMemo, useState } from 'react';

import styled, { css } from 'styled-components';

import { MdSignalWifi4BarLock } from 'react-icons/md';
import { FaBatteryFull } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { defaultPadding } from 'style/variables';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { IoLogoJavascript } from 'react-icons/io';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { DiNpm } from 'react-icons/di';
import { MdComputer } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io';
import { SiJquery } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa6';
import { FaSass } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaYarn } from 'react-icons/fa6';
import { SiPrettier } from 'react-icons/si';
import { SiEslint } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiSourcetree } from 'react-icons/si';
import { FaBitbucket } from 'react-icons/fa';
import { FaSlack } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { useTheme } from 'context/themeProvider';
import { flex } from 'style/mixin';
import classNames from 'classnames';
import NavBar from './NavBar';

export default function CommonLayout({ children, title }) {
  const [themeMode, toggleTheme] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  const [currentTab, setCurrentTab] = useState(skillMenuList[0].id);

  return (
    <MainContainer>
      <ContentWrapper>
        <NavBar />
        {children}
        <div className="switch-wrap">
          <SwitchContainer onClick={toggleTheme} isDay={isDayTheme}>
            <FaMoon size={16} color="#fff" />
            <MdWbSunny size={17} color="var(--color-primary)" />
            <Switch isDay={isDayTheme}></Switch>
          </SwitchContainer>
        </div>
      </ContentWrapper>
      <Footer isDay={isDayTheme}>
        <p> woojung.archive ⓒ {new Date().getFullYear()} All rights reserved.</p>
      </Footer>
    </MainContainer>
  );
}

function TabMenu({ tab = {}, active = false, onClick = () => {} }) {
  return (
    <div
      onClick={() => onClick?.()}
      className={classNames({
        'tab-menu': true,
        'tab-menu-active': active,
      })}
    >
      {tab.icon}
      <p>{tab.label}</p>
    </div>
  );
}

const sectionWrap = css`
  padding: 30px 0px;
  border-bottom: 1px solid rgba(107, 122, 143, 0.2);
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  position: relative;
`;
const MainWrapper = styled.div`
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
  background-color: rgba(190,195,198,0.07);
  width: 100%;
  height: calc(100% - 40px);
  position: relative;
  .switch-wrap {
    position: absolute;
    bottom: 3%;
    right: 3%;
    /* width: 100%;
    margin-top: 20px;
    ${flex({ justify: 'flex-end' })}; */
  }
  .section-title {
    font-size: 22px;
    font-weight: 600;
  }
`;

const Footer = styled.div`
  width: 100%;
  ${defaultPadding}
  background-color:${({ isDay }) =>
    isDay ? 'var(--color-skeleton)' : 'hsla(var(--color-background-100), 0.2)'};
  color: white;
  text-align: center;
  height: 40px;
  ${flex};
`;

const ProfileWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 3px 6px hsla(var(--color-dark-300), 0.16),
    0 3px 6px hsla(var(--color-dark-300), 0.2);
  height: 190px;
  margin-top: 20px;
  background-color: var(--color-primary);
  position: relative;
  font-size: 22px;
  margin-bottom: 20px;
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
  ${sectionWrap}
  .skill-tab-wrap {
    margin-top: 10px;
    ${flex({ justify: 'flex-start' })};
    border-bottom: 1px solid rgba(107, 122, 143, 0.2);
    .tab-menu {
      ${flex};
      font-size: 15px;
      padding: 5px;
      margin-right: 10px;
      color: var(--color-background-600);
      cursor: pointer;
      padding-bottom: 10px;
      p {
        margin-left: 5px;
      }
    }
    .tab-menu-active {
      color: ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'white')};
      border-bottom: 1.4px solid ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'white')};
      font-weight: 500;
    }
  }
  .skill-body {
    margin-top: 20px;
    .skill-wrap {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      .skill {
        padding: 10px;
        ${flex({ justify: 'flex-start' })};
        background-color: ${({ isDay }) => (isDay ? 'transparent' : 'rgba(225,225,225,0.4)')};
        border: ${({ isDay }) => (isDay ? ' 1px solid var(--color-background-400)' : 'none')};
        p {
          margin-left: 5px;
          font-size: 14px;
        }
      }
    }
  }
`;
const SwitchContainer = styled.div`
  width: 57px;
  height: 30px;
  background-color: ${({ isDay }) =>
    isDay ? 'var(--color-background-100)' : 'var(--color-dark-200)'};
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
  border: 2px solid ${({ isDay }) => (isDay ? ' var(--color-primary)' : 'white')};
  background-color: ${({ isDay }) =>
    isDay ? 'var(--color-background-100)' : 'var(--color-dark-200)'};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  transition: transform 0.3s ease;
  transform: ${({ isDay }) => (isDay ? 'translateX(0)' : 'translateX(23px)')};
`;

const skillMenuList = [
  { id: 1, label: 'Develop', icon: <MdComputer /> },
  { id: 2, label: 'Common', icon: <DiNpm /> },
  { id: 3, label: 'Cooperation', icon: <FaGithubAlt /> },
];

const develop = [
  { id: 1, label: 'HTML5', icon: <FaHtml5 /> },
  { id: 2, label: 'JavaScript', icon: <IoLogoJavascript /> },
  { id: 3, label: 'jQuery', icon: <SiJquery /> },
  { id: 4, label: 'React', icon: <FaReact /> },
  { id: 4, label: 'React-Native', icon: <TbBrandReactNative /> },
  { id: 5, label: 'Next', icon: <SiNextdotjs /> },
  { id: 6, label: 'CSS3', icon: <FaCss3Alt /> },
  { id: 7, label: 'Sass', icon: <FaSass /> },
  { id: 8, label: 'Styled-components', icon: <SiStyledcomponents /> },
  { id: 9, label: 'Bootstrap', icon: <FaBootstrap /> },
  { id: 10, label: 'Material Design', icon: <SiMaterialdesignicons /> },
];
const common = [
  { id: 1, label: 'Npm', icon: <DiNpm /> },
  { id: 2, label: 'Yarn', icon: <FaYarn /> },
  { id: 3, label: 'Prettier', icon: <SiPrettier /> },
  { id: 4, label: 'ESLint', icon: <SiEslint /> },
  { id: 5, label: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
];
const cooperation = [
  { id: 1, label: 'GitHub', icon: <IoLogoGithub /> },
  { id: 2, label: 'Sourcetree', icon: <SiSourcetree /> },
  { id: 3, label: 'Bitbucket', icon: <FaBitbucket /> },
  { id: 4, label: 'Slack', icon: <FaSlack /> },
  { id: 5, label: 'Notion', icon: <SiNotion /> },
  { id: 6, label: 'Figma', icon: <FaFigma /> },
];

const projectMenuList = [
  { id: 1, label: 'Single', icon: <FaUser /> },
  { id: 2, label: 'Collaboration', icon: <FaUsers /> },
];
