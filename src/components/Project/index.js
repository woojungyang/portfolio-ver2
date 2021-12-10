import React from 'react';

import { project1, project2, project3, project4 } from './Data';
import FilpCard from './FilpCard';
import {
  PorjectContainer,
  ProjectH1,
  ProjectWrapper,
  MainContainer,
} from './ProjectElements';
const Project = () => {
  return (
    <PorjectContainer id="project">
      <ProjectH1>Project</ProjectH1>
      <ProjectWrapper>
        <MainContainer>
          <FilpCard {...project1} />
          <FilpCard {...project2} />
          <FilpCard {...project3} />
          <FilpCard {...project4} />
        </MainContainer>
      </ProjectWrapper>
    </PorjectContainer>
  );
};

export default Project;
