import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="resume">Résumé</SidebarLink>
          <SidebarLink to="skill">Skills</SidebarLink>
          <SidebarLink to="work">Works</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="https://www.github.com/woojungyang">GitHub</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
