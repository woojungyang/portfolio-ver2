import React, { useMemo } from 'react';
import classNames from 'classnames';

import { IoLogoJavascript } from 'react-icons/io';
import { FaHtml5 } from 'react-icons/fa';
import { DiNpm } from 'react-icons/di';
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

import styled from 'styled-components';
import { flex, media } from 'style/mixin';
import { useTheme } from 'context/themeProvider';

import CommonLayout from 'components/common/CommonLayout';

const About = () => {
  const [themeMode] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  return (
    <CommonLayout>
      <ContentWrapper isDay={isDayTheme}>
        <div className="emotion-bg">
          <img src={require('assets/img/main8.png')} />
        </div>
        <div className="intro-title-wrap">
          <hr />
          <h1 className="greeting-title">
            Nice to meet you,
            <br />I Am
          </h1>

          <p className="description">
            안녕하세요, 프론트엔드 개발자 양우정입니다. 사용자 경험을 개선하고 성능을 최적화하는 데
            주력하며, 최신 웹 기술을 활용해 직관적이면서도 창의적인 UI/UX를 구현하는 데 열정을
            가지고 있습니다. 또한, 프로젝트의 성공을 위해 원활한 소통과 협업을 중요시하고, 지속적인
            성장을 목표로 노력하고 있습니다.
          </p>
          <div
            className={classNames({
              'activity-summery': true,
              'section-border': true,
            })}
          >
            <p
              className={classNames({
                'description-title': true,
              })}
            >
              ACTIVITY
              <br /> SUMMERY
            </p>
            <div className="activity-section">
              <p className="activity-number">2.6</p>
              <p className="activity-text">
                Years of
                <br />
                experience
              </p>
            </div>
            <div className="activity-section">
              <p className="activity-number">7</p>
              <p className="activity-text">
                Successful
                <br />
                projects
              </p>
            </div>
          </div>
          <div className="skill-wrapper">
            <p
              className={classNames({
                'description-title': true,
                'section-border': true,
              })}
            >
              SKILL SET
            </p>
            <div className="skill-wrap">
              {develop.map(dev => (
                <p className="skill">
                  {dev.icon}
                  <span>{dev.label}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </CommonLayout>
  );
};

const ContentWrapper = styled.div`
  height: 100%;

  flex: 1;
  ${flex({ justify: 'space-between' })};
  flex-grow: 1;
  width: 100%;
  position: relative;
  margin-top: 10px;

  .emotion-bg {
    width: 100%;
    border-radius: 50%;
    position: relative;
    aspect-ratio: 1;

    img {
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      box-shadow: 0 3px 6px hsla(var(--color-dark-300), 0.16),
        0 3px 6px hsla(var(--color-dark-300), 0.2);
    }
  }

  .description-title {
    width: 100%;
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  .description {
    font-size: 17px;
    margin-top: 20px;
    line-height: 170%;
    text-align: justify;
    text-justify: inter-word;
  }
  .section-border {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(221, 221, 221);
  }
  .activity-summery {
    ${flex({ justify: 'flex-start' })};
    .activity-section {
      ${flex({ justify: 'flex-start' })};
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
      .activity-number {
        font-size: 40px;
        font-weight: 800;
        margin-right: 10px;
        color: ${({ isDay }) => (isDay ? 'var(--color-primary)' : 'var(--color-secondary)')};
      }
      .activity-text {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
  .skill-wrapper {
    .skill-wrap {
      margin-top: 20px;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      .skill {
        padding: 10px;
        ${flex({ justify: 'flex-start' })};
        background-color: ${({ isDay }) => (isDay ? 'transparent' : 'rgba(225,225,225,0.4)')};
        border: ${({ isDay }) => (isDay ? ' 1px solid var(--color-background-400)' : 'none')};
        span {
          margin-left: 5px;
          font-size: 14px;
        }
      }
    }
  }

  .intro-title-wrap {
    /* border: 1px solid green; */
    width: 100%;
    text-align: left;
    hr {
      width: 200px;
      border: 7px solid
        ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
      margin-bottom: 80px;
      margin-left: 0% !important;
    }
    .greeting-title {
      font-size: 86px;

      font-weight: 700;
      line-height: 120%;
      white-space: pre-wrap;
    }
  }

  @media (max-width: 1520px) {
    .emotion-bg {
      max-width: 530px;
    }
    .intro-title-wrap {
      max-width: 48%;
      hr {
        border: 5px solid
          ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
        margin-bottom: 50px;
      }

      .greeting-title {
        font-size: 70px;
        font-weight: 700;
        line-height: 120%;
        white-space: pre-wrap;
      }
    }
  }
  ${media.mobile`
    flex-direction:column;
    justify-content:flex-start;
    .emotion-bg {
      display:none;
    }
    .intro-title-wrap {
      /* margin-top:50px; */
      max-width: 100%;
      hr {
        border: 3px solid
          ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
        margin-bottom: 30px;
      }
      .greeting-title {
        font-size: 36px;
        font-weight: 700;
        line-height: 120%;
        white-space: wrap;
      }
    }
    .description-title {
    width: 100%;
    font-weight: 700;
    font-size: 20px;  
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
    .activity-summery {
    ${flex({ direction: 'column' })};
     .description-title {
      br{
        display:none;
      }
     }
    .activity-section {
     
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
      .activity-number {
        font-size: 40px;
        font-weight: 800;
        margin-right: 10px;
        color: ${({ isDay }) => (isDay ? 'var(--color-primary)' : 'var(--color-secondary)')};
      }
      .activity-text {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
    .skill-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    .skill {
      padding: 10px;
      span {
        margin-left: 5px;
        font-size: 13px;
      }
    }
  }
   
  `};
`;

export default React.memo(About);

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
  { id: 11, label: 'Npm', icon: <DiNpm /> },
  { id: 12, label: 'Yarn', icon: <FaYarn /> },
  { id: 13, label: 'Prettier', icon: <SiPrettier /> },
  { id: 14, label: 'ESLint', icon: <SiEslint /> },
  { id: 15, label: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
  { id: 16, label: 'GitHub', icon: <IoLogoGithub /> },
  { id: 17, label: 'Sourcetree', icon: <SiSourcetree /> },
  { id: 18, label: 'Bitbucket', icon: <FaBitbucket /> },
  { id: 19, label: 'Slack', icon: <FaSlack /> },
  { id: 20, label: 'Notion', icon: <SiNotion /> },
  { id: 21, label: 'Figma', icon: <FaFigma /> },
];
const common = [];
const cooperation = [];

const projectMenuList = [];