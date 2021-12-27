import React from 'react';
import Fade from 'react-reveal/Fade';
import { project1, project2, project3, project4 } from './Data';
import FilpCard from './FilpCard';
import Footer from '../Footer';
import {
  PorjectContainer,
  ProjectH1,
  ProjectWrapper,
  MainContainer,
} from './ProjectElements';
const Project = () => {
  return (
    <Fade bottom>
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
      <Footer />
    </Fade>
  );
};

export default Project;
