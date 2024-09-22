import React, { useMemo, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import CommonLayout from 'components/common/CommonLayout';
import styled from 'styled-components';
import { flex } from 'style/mixin';
import { useTheme } from 'context/themeProvider';

const Home = () => {
  const [themeMode, toggleTheme] = useTheme();
  const isDayTheme = useMemo(() => themeMode == 'day', [themeMode]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CommonLayout>
      <ContentWrapper isDay={isDayTheme}>
        <div className="emotion-bg">
          <img src={require('assets/img/main7.png')} />
        </div>
        <div className="intro-title-wrap">
          <hr />
          <h1 className="greeting-title">
            I'm Woojung, a<br />
            Front-End Developer
          </h1>
          <p className="description">
            사용자의 니즈를 직관적이고 매력적인 인터페이스로 구현하며, 섬세한 디테일로 차별화된
            사용자 경험을 제공합니다. 프론트엔드 개발자로서 꼼꼼함과 꾸준함을 바탕으로, 웹과 모바일
            환경에서 완성도 높은 솔루션을 제시하고, 지속 가능한 성과를 이끌어냅니다.
          </p>
        </div>
        <div>ddd</div>
        {/* <div className="emotion-wrap">
          <img src={require('assets/img/main5.png')} />
        </div>
        <h1>ddd
          Hi There, <br />
          I'm WooJung
        </h1> */}
      </ContentWrapper>
    </CommonLayout>
  );
};

const ContentWrapper = styled.div`
  height: 100%; /* 100%로 상위 요소를 채울 수 있게 설정 */
  border: 10px solid blue;
  flex: 1;
  ${flex({ justify: 'space-between' })};
  flex-grow: 1;
  animation: slideSide 1s forwards ease-out;
  position: relative;
  .emotion-bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
    img {
      width: 700px;
      box-shadow: 0 3px 6px hsla(var(--color-dark-300), 0.16),
        0 3px 6px hsla(var(--color-dark-300), 0.2);
    }
  }
  .intro-title-wrap {
    max-width: 50%;
    text-align: left;
    border: 1px solid red;
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
    }
    .description {
      max-width: 78%;
      font-size: 18px;
      margin-top: 20px;
      line-height: 190%;
    }
  }

  /* animation: slideSide 1s forwards ease-out;
  ${flex({ direction: 'column' })};
  position: relative;
  /* height: 100%; */
  /* width: 100%;
  background-color: blue;
  flex: 1;
  flex-grow: 1;
  height: 100%; */
  /* background-color: pink; */ /* .emotion-wrap {
    width: 300px;
    height: 300px;
    background-color: var(--color-primary);
    border-radius: 50%;

    ${flex};
    img {
      width: 300px;
      height: 300px;
      margin-top: -40px;
    }
  } */
`;

export default React.memo(Home);
