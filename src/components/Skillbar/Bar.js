import React, { useState } from 'react';

import { Progress, Progressdone } from './SkillbarElements';

const Bar = ({ done }) => {
  const [bar, setBar] = useState({});
  setTimeout(() => {
    const newBar = {
      opacity: 1,
      width: `${done}%`,
    };
    setBar(newBar);
  }, 200);

  return (
    <Progress>
      <Progressdone style={bar}>{done}%</Progressdone>
    </Progress>
  );
};

export default React.memo(Bar);
