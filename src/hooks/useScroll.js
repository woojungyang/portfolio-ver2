import { useState, useEffect } from "react";

export const useScroll = ({ targetX = 50, targetY = 50 }) => {
  const [scrolled, setScrolled] = useState({
    scrolledX: false,
    scrolledY: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(() => ({
        scrolledX: window.scrollX > targetX,
        scrolledY: window.scrollY > targetY,
      }));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};
