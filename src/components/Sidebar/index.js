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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="resume" onClick={toggle}>
            Résumé
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="project" onClick={toggle}>
            Project
          </SidebarLink>
          <SidebarLink to="connect" onClick={toggle}>
            Connect
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="//github.com/woojungyang">GitHub</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default React.memo(Sidebar);
