import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { MdOutlineEmail } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';

import styled from 'styled-components';
import { flex, media } from 'style/mixin';
import { useTheme } from 'context/themeProvider';

import CommonLayout from 'components/common/CommonLayout';
import { DeviceSize } from 'models/Device';

const Home = () => {
  const navigation = useNavigate();

  const [themeMode] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  return (
    <CommonLayout>
      <ContentWrapper>
        <motion.p animate={{ y: 30 }} transition={{ duration: 0.8 }} className="main-title">
          portfolio.
        </motion.p>
        <div className="left-side-wrap">
          <motion.div animate={{ x: 40 }} transition={{ duration: 0.5 }} className="top-line">
            <p>since 2023-2025</p>
            <div className="line"></div>
          </motion.div>
          <div className="description">
            <h1 className="name">woojungyang</h1>
            <h3 className="position">front-end developer</h3>
            <p>
              사용자 경험을 세심하게 다듬으며, 더 나은 UI/UX를 고민하는 프론트엔드 개발자입니다.
              깔끔하고 효율적인 코드를 지향하고, 성능 최적화에도 신경 씁니다. 다양한 프로젝트를
              경험하며, 기획부터 개발까지 폭넓게 참여해왔어요. 무엇보다 소통과 협업을 중요하게
              생각하며, 함께 성장하는 개발 문화를 만들어가고 있습니다.
            </p>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <motion.p animate={{ y: 30 }} transition={{ duration: 0.8 }} className="main-title">
          portfolio.
        </motion.p>
        <div className="left-side-wrap">
          <motion.div animate={{ x: 40 }} transition={{ duration: 0.5 }} className="top-line">
            <p>since 2023-2025</p>
            <div className="line"></div>
          </motion.div>
          <div className="description">
            <h1 className="name">woojungyang</h1>
            <h3 className="position">front-end developer</h3>
            <p>
              사용자 경험을 세심하게 다듬으며, 더 나은 UI/UX를 고민하는 프론트엔드 개발자입니다.
              깔끔하고 효율적인 코드를 지향하고, 성능 최적화에도 신경 씁니다. 다양한 프로젝트를
              경험하며, 기획부터 개발까지 폭넓게 참여해왔어요. 무엇보다 소통과 협업을 중요하게
              생각하며, 함께 성장하는 개발 문화를 만들어가고 있습니다.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </CommonLayout>
  );
};

const ContentWrapper = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-type: y mandatory;

  flex: 1;
  color: #9a9a9a;
  flex-grow: 1;
  width: 100%;
  overflow-x: hidden;
  font-family: 'DM Serif Display', serif;
  position: relative;

  .main-title {
    color: #e43625;
    position: absolute;
    font-weight: 600;
    right: 0;
    writing-mode: vertical-rl;
    font-size: 18vh;
  }

  .left-side-wrap {
    ${flex({ justify: 'space-between', align: 'flex-start' })};
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    flex-grow: 1;

    .top-line {
      padding-top: 20px;
      ${flex({ justify: 'flex-start' })};
      gap: 20px;
      font-size: 14px;
      width: 100%;
      .line {
        width: 60%;
        height: 1px;
        background-color: #9a9a9a;
      }
    }
    .description {
      padding-bottom: 20px;
      max-width: 400px;

      padding-left: 40px;

      opacity: 0;
      animation: fadeInAnimation 1.5s ease forwards;

      .name {
        color: #eb6352;
        font-weight: 700;

        font-size: 2.4vw;
        max-width: 400px;
      }
      .position {
        color: #eb6352;
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: 400;
      }
      p {
        font-size: 13px;
        line-height: 160%;
        word-break: break-all;
        text-align: justify;
        font-weight: 500;
        font-family: 'Noto Serif KR', serif;
      }
    }
  }

  @media (max-width: 1520px) {
  }
  @media (max-width: ${DeviceSize.Tablet}px) {
  }

  @media (max-width: ${DeviceSize.Mobile}px) {
    .main-title {
      font-weight: 500;

      font-size: 15vh;
    }
    .left-side-wrap {
      .top-line {
        .line {
          display: none;
        }
      }
      .description {
        max-width: 80vw;
        padding: 20px 20px;

        .name {
          font-weight: 600;
          font-size: 9vw;
        }
        p {
          font-size: 10.5px;
        }
      }
    }
  }
`;

export default React.memo(Home);
