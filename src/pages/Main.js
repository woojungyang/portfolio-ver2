import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { MdOutlineEmail } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';

import styled from 'styled-components';
import { flex, media } from 'style/mixin';
import { useTheme } from 'context/themeProvider';

import CommonLayout from 'components/common/CommonLayout';

const Home = () => {
  const navigation = useNavigate();

  const [themeMode] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);

  return (
    <CommonLayout>
      <ContentWrapper isDay={isDayTheme}>
        <div className="emotion-bg">
          <img
            src={isDayTheme ? require('assets/img/main7.png') : require('assets/img/main6.png')}
          />
        </div>
        <div className="intro-title-wrap">
          <hr />
          <h1 className="greeting-title">
            I'm Woojung, a <br />
            Front-End Developer
          </h1>
        </div>
        <div className="description-wrap">
          <p className="description-title">ABOUT ME</p>
          <p className="description">
            사용자에게 매력적이고 친숙한 웹 경험을 제공하는 데 깊은 애정을 가지고 있습니다. 최신 웹
            기술을 활용하여 창의적이고 실용적인 솔루션을 구현하며, 코드의 품질과 사용자 경험을
            최우선으로 생각하는 개발자입니다.
          </p>
          <div className="description-btn" onClick={() => navigation('/about')}>
            <p>MORE ➔</p>
          </div>
          <p className="description-title">Work</p>
          <p className="description">
            여러 프로젝트를 통해 사용자가 쉽게 접근하고 즐길 수 있는 웹사이트와 애플리케이션을
            설계해왔습니다. HTML, CSS, JavaScript를 기반으로 반응형 디자인을 구현하고, React와 같은
            현대적인 프레임워크를 활용해 부드럽고 자연스러운 사용자 경험을 제공합니다. 제 작업은
            기능적이면서도 시각적으로도 즐거움을 주는 것을 지향합니다.
          </p>
          <div className="description-btn" onClick={() => navigation('/portfolio')}>
            <p>MORE ➔</p>
          </div>

          <p className="description-title">CONTACT</p>
          <p
            className="contact"
            style={{ marginTop: 20 }}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText('woojungyang1113@gmail.com');
                alert('복사 완료!');
              } catch (error) {
                alert('복사 실패!');
              }
            }}
          >
            <MdOutlineEmail />
            <span>woojungyang1113@gmail.com</span>
          </p>
          <p className="contact">
            <FaGithubAlt />
            <span onClick={() => window.open('https://github.com/woojungyang', '_blank')}>
              github.com/woojungyang
            </span>
          </p>
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

  /* margin: 20px 0px; */

  .emotion-bg {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
    max-width: 680px;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      box-shadow: 0 3px 6px hsla(var(--color-dark-300), 0.16),
        0 3px 6px hsla(var(--color-dark-300), 0.2);
    }
  }

  .intro-title-wrap {
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
  .description-wrap {
    ${flex({ direction: 'column', align: 'flex-end' })};
    max-width: 50%;
    height: 100%;

    .description-title {
      width: 100%;
      max-width: 65%;
      font-weight: 700;
      font-size: 22px;
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
    .description {
      max-width: 65%;
      font-size: 17px;
      margin-top: 20px;
      line-height: 170%;
      text-align: justify;
      text-justify: inter-word;
    }
    .description-btn {
      width: 100%;

      p {
        width: 100%;

        margin-right: 5px;
        padding: 5px;
        font-size: 15px;
        margin: 10px 0px;
        cursor: pointer;
        text-align: right !important;
      }
    }
    .contact {
      max-width: 65%;
      width: 100%;
      ${flex({ justify: 'flex-start' })};
      margin-top: 10px;
      font-size: 16px;
      text-decoration: underline;
      cursor: pointer;
      span {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 1520px) {
    .emotion-bg {
      max-width: 600px;
    }
    .intro-title-wrap {
      max-width: 48%;
      hr {
        width: 180px;
        border: 5px solid
          ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
        margin-bottom: 50px;
      }

      .greeting-title {
        font-size: 80px;
        font-weight: 700;
        line-height: 120%;
        white-space: pre-wrap;
      }
    }
    .description-wrap {
      .description-title {
        font-size: 20px;
        &:not(:first-child) {
          margin-top: 16px;
        }
      }
      .description {
        font-size: 16px;
        margin-top: 16px;
      }
      .description-btn {
        font-size: 14px;
        margin: 10px 0px;
        /* ${flex}; */
        p {
          margin-right: 5px;
        }
      }
    }
  }
  ${media.tablet`
    ${flex({ justify: 'space-between', align: 'flex-start' })};
    .emotion-bg {
      left: 30%;
      bottom:-5%;
      max-width: 540px;
    }
    .intro-title-wrap {
       width: 100%;
      hr {
        border: 4px solid
          ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
        margin-bottom: 40px;
      }
      .greeting-title {
        font-size: 48px;
      }
    }
    .description-wrap {
      margin-left:40px;
      width: 100%;
      ${flex({ direction: 'column', align: 'flex-start' })};
      .description {
        max-width: 100%;
        font-size: 16px;
        margin-top: 16px;
      }
      .description-btn {
        font-size: 12px;
        ${flex};
        p {
          margin-right: 5px;
        }
      }
    }
  `}

  ${media.mobile`
    flex-direction:column;
    justify-content:flex-start;
    .emotion-bg {
      left: 80%;
      bottom:-5%;
      max-width: 200px;
    }
    .intro-title-wrap {
      max-width: 100%;
      hr {
        width: 150px;
        border: 3px solid
          ${({ isDay }) => (isDay ? 'var(--color-dark-300)' : 'var(--color-background-100)')};
        margin-bottom: 30px;
      }
      .greeting-title {
        font-size: 36px;
      }
    }
    .description-wrap {
      margin:40px 0px;
      max-width: 100%;
      ${flex({ direction: 'column', align: 'flex-start' })};
      .description {
        max-width: 100%;
        font-size: 15px;
        margin-top: 16px;
      }
    }
  `};
`;

export default React.memo(Home);
