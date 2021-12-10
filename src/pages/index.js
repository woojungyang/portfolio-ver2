import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
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
      <InfoSection {...homeObjOne} />
      <Skillbar {...skills} />
      <Project />

      <Footer />
    </>
  );
};

export default React.memo(Home);
