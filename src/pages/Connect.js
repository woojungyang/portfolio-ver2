import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import ConnectSection from '../components/ConnectSection';
import { connect } from '../components/ConnectSection/Data';

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
        <ConnectSection {...connect} />
      </Fade>
      <Footer />
    </>
  );
};

export default React.memo(Home);
