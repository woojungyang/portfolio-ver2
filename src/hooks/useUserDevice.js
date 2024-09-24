import React, { useEffect, useState } from 'react';

export const useUserDevice = () => {
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    const mobileSize = 767;
    return width <= mobileSize;
  }

  const [userDevice, setUserDevice] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setUserDevice(getWindowDimensions());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return userDevice;
};
