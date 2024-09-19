import React from 'react';

import styled from 'styled-components';
import { MdSignalCellular4Bar } from 'react-icons/md';
import { MdSignalWifi4BarLock } from 'react-icons/md';
import { FaBatteryFull } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { flexMixin, variables } from 'style';
import { baseShadow, flex } from 'style/mixin';
import { defaultPadding } from 'style/variables';

export default function CommonLayout({ children, title }) {
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
    flex: 1;
    flex-grow: 1;
    background-color: pink;
    width: 100%;
  `;
  const Footer = styled.div`
    width: 100%;
    ${defaultPadding}
    background-color:#000;
    color: #fff;
    text-align: center;
  `;

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
        <ContentWrapper>{children}</ContentWrapper>
        <Footer>
          <p> woojung.dev ⓒ {new Date().getFullYear()} All rights reserved.</p>
        </Footer>
      </MainWrapper>
    </MainContainer>
  );
}
