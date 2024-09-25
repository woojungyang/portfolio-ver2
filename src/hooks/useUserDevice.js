import React, { useEffect, useState } from 'react';
import { DeviceSize } from 'models/Device';

export const useUserDevice = () => {
  function getWindowDimensions() {
    const { innerWidth: width } = window;

    return width <= DeviceSize.Mobile;
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
