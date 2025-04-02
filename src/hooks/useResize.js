import React, { useEffect, useState } from "react";
export const useResize = ({ targetX = 768, targetY = 768 }) => {
  const [resized, setResized] = useState({ resizedX: false, resizedY: false });

  useEffect(() => {
    const handleResize = () => {
      setResized(() => ({
        resizedX: window.innerWidth >= targetX,
        resizedY: window.innerWidth >= targetY,
      }));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [targetX, targetY]);
  return resized;
};
