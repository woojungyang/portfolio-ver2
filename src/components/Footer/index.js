import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialLogo to="/" onClick={toggleHome}>
          woojung.archive
        </SocialLogo>
        <WebsiteRights>
          woojung.archive ⓒ {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
