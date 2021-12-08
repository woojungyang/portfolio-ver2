import React from 'react';

import Bar from './Bar';
import { SKillContainer, Heading, Subtitle, SkillWrap } from './SkillbarElements';
const Skillbar = ({
  id,
  headline,
  description_1,
  percent_1,
  description_2,
  percent_2,
  description_3,
  percent_3,
  description_4,
  percent_4,
  description_5,
  percent_5,
  description_6,
  percent_6,
  description_7,
  percent_7,
  description_8,
  percent_8,
}) => {
  return (
    <SKillContainer id={id}>
      <Heading>{headline}</Heading>
      <SkillWrap>
        <Subtitle>{description_1}</Subtitle>
        <Bar done={percent_1} />
      </SkillWrap>
      <SkillWrap>
        <Subtitle>{description_2}</Subtitle>
        <Bar done={percent_2} />
      </SkillWrap>
      <SkillWrap>
        <Subtitle>{description_3}</Subtitle>
        <Bar done={percent_3} />
      </SkillWrap>
      <SkillWrap>
        <Subtitle>{description_4}</Subtitle>
        <Bar done={percent_4} />
      </SkillWrap>
      <SkillWrap>
        <Subtitle>{description_5}</Subtitle>
        <Bar done={percent_5} />
      </SkillWrap>
      <SkillWrap>
        <Subtitle>{description_6}</Subtitle>
        <Bar done={percent_6} />
      </SkillWrap>
      <SkillWrap>
        <Subtitle>{description_7}</Subtitle>
        <Bar done={percent_7} />
      </SkillWrap>
      <SkillWrap>
        <Subtitle>{description_8}</Subtitle>
        <Bar done={percent_8} />
      </SkillWrap>
    </SKillContainer>
  );
};

export default Skillbar;
