import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import CommonLayout from 'components/common/CommonLayout';
import styled from 'styled-components';
import { flex } from 'style/mixin';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CommonLayout>
      <ContentWrapper>
        <div className="emotion-wrap">
          <img src={require('assets/img/main3.png')} />
        </div>
        <h1>
          Hi There, <br />
          I'm WooJung
        </h1>
      </ContentWrapper>
    </CommonLayout>
  );
};

const ContentWrapper = styled.div`
  ${flex({ direction: 'column' })};
  height: 100%;
  background-color: pink;
  .emotion-wrap {
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
  }
`;

export default React.memo(Home);
