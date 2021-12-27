import React from 'react';
import Icon from '../../assets/img/main.png';

import {
  TheCard,
  FrontCard,
  BackCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
  ProjectH3,
  SideBtnWrap,
  SidebarRoute,
  VideoBg,
  NavBtn,
  NavBtnLink,
} from './ProjectElements';

const FilpCard = ({
  title,
  devtools,
  tool,
  comment,
  comment2,
  buttonlabel1,
  buttonlabel2,
  video,
  contribution,
}) => {
  return (
    <TheCard>
      <FrontCard>
        <ProjectIcon>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </ProjectIcon>
        <ProjectH2>{title}</ProjectH2>
        <ProjectP>
          {comment}
          <h4>{comment2}</h4>
        </ProjectP>
      </FrontCard>
      <BackCard>
        <div style={{ height: '230px', marginBottom: '0.5em;' }}>
          <ProjectH3>{devtools}</ProjectH3>
          <ProjectP>{tool}</ProjectP>
          <br />
          <ProjectP>{contribution}</ProjectP>
        </div>
        <NavBtn>
          <NavBtnLink to={buttonlabel1} target="_blank">
            Demo
          </NavBtnLink>
          <NavBtnLink to={buttonlabel2} target="_blank">
            GitHub
          </NavBtnLink>
        </NavBtn>
        {/* <SidebarRoute to={buttonlabel1} target="_blank">
          DEMO
        </SidebarRoute>
        <SidebarRoute to={buttonlabel2} target="_blank">
          GitHub
        </SidebarRoute> */}
      </BackCard>
    </TheCard>
  );
};
export default React.memo(FilpCard);
