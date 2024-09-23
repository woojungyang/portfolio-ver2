import React, { useMemo } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';

import CommonLayout from 'components/common/CommonLayout';
import styled from 'styled-components';
import { flex } from 'style/mixin';
import { useTheme } from 'context/themeProvider';

const Home = () => {
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
            I'm Woojung, a<br />
            Front-End Developer
          </h1>
        </div>
        <div className="description-wrap">
          <p className="description-title">ABOUT ME</p>
          <p className="description">
            안녕하세요, 저는 프론트엔드 개발자 양우정입니다. 사용자의 눈높이에 맞춘 매력적인 웹
            경험을 만드는 데 깊은 애정을 가지고 있습니다. 최신 웹 기술을 통해 창의적이고 실용적인
            솔루션을 구현하며, 코드의 품질과 사용자 경험을 최우선으로 생각합니다.
          </p>
          <div className="description-btn">MORE ➔</div>
          <p className="description-title">Work</p>
          <p className="description">
            저는 여러 프로젝트를 통해 사용자가 쉽게 접근하고 즐길 수 있는 웹사이트와 애플리케이션을
            설계해왔습니다. HTML, CSS, JavaScript를 기반으로 반응형 디자인을 구현하고, React와 같은
            현대적인 프레임워크를 활용해 부드럽고 자연스러운 사용자 경험을 제공합니다. 제 작업은
            기능적이면서도 시각적으로도 즐거움을 주는 것을 지향합니다.
          </p>
          <div className="description-btn">MORE ➔</div>
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
  /* border: 10px solid blue; */
  flex: 1;
  ${flex({ justify: 'space-between' })};
  flex-grow: 1;

  position: relative;

  margin: 20px 0px;

  .emotion-bg {
    position: absolute;
    bottom: 0;
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
    max-width: 50%;
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
      font-size: 18px;
      margin-top: 20px;
      line-height: 170%;
      text-align: justify;
    }
    .description-btn {
      border-bottom: 1px solid var(--color-skeleton);
      padding: 5px;
      font-size: 15px;
      margin: 10px 0px;
      ${flex};
      p {
        margin-right: 5px;
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
        ${flex};
        p {
          margin-right: 5px;
        }
      }
    }
  }
`;

export default React.memo(Home);
