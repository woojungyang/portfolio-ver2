import React, { useLayoutEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigation = useNavigate();

  useLayoutEffect(() => {
    navigation(-1, { replace: true });
  }, []);
  return <div></div>;
}
