import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <MainSection /> */}
      <Fade bottom>
        <InfoSection {...homeObjOne} />
      </Fade>
    </>
  );
};

export default React.memo(Home);
