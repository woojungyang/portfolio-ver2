import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          woojung.dev
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Résumé
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Project
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="connect"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Connect
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="//github.com/woojungyang">GitHub</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default React.memo(Navbar);
