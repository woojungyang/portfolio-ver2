import React from 'react';

import Icon from '../../assets/img/main.png';
import {
  PorjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
} from './ProjectElements';
const Project = () => {
  return (
    <PorjectContainer id="project">
      <ProjectH1>Project</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon} />
          <ProjectH2>SURF MALL</ProjectH2>
          <ProjectP>서핑 관련 쇼핑몰 제작(판매페이지,관리자페이지)</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon} />
          <ProjectH2>SURF MALL</ProjectH2>
          <ProjectP>서핑 관련 쇼핑몰 제작(판매페이지,관리자페이지)</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon} />
          <ProjectH2>SURF MALL</ProjectH2>
          <ProjectP>서핑 관련 쇼핑몰 제작(판매페이지,관리자페이지)</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon} />
          <ProjectH2>SURF MALL</ProjectH2>
          <ProjectP>서핑 관련 쇼핑몰 제작(판매페이지,관리자페이지)</ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </PorjectContainer>
  );
};

export default Project;
