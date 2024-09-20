import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import CommonLayout from 'components/common/CommonLayout';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return <CommonLayout title="Archive"></CommonLayout>;
};

export default React.memo(Home);
