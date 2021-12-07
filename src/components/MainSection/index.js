import React, { useState } from 'react';
import video from '../../assets/img/video.mp4';
import { Button } from '../Button';
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './MainElements';

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainH1>WooJungYang</MainH1>
        <MainP>Hello, Welcome to my portfolio page</MainP>
        <MainBtnWrapper>
          <Button
            to="/"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default React.memo(MainSection);
