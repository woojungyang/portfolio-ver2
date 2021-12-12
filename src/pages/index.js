import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import ConnectSection from '../components/ConnectSection';
import { connect } from '../components/ConnectSection/Data';
import Skillbar from '../components/Skillbar';
import { skills } from '../components/Skillbar/Data';
import Project from '../components/Project';
import Footer from '../components/Footer';

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
        <Skillbar {...skills} />
        <Project />
        <ConnectSection {...connect} />
      </Fade>
      <Footer />
    </>
  );
};

export default React.memo(Home);
