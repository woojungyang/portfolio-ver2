import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import MobileNavbar from "./MobileNavbar";

import { useClickOutside, useResize, useScroll } from "src/hooks";

import { navbarLinks, navbarVariants } from "src/constants";

import classNames from "classnames";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const mobileNavbarRef = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { resizedX } = useResize({ targetX: 768 });
  const { scrolledY } = useScroll({ targetY: 100 });
  const location = useLocation();

  useClickOutside(mobileNavbarRef, () => setToggleMenu(false));

  useEffect(() => {
    if (resizedX) setToggleMenu(false);
  }, [resizedX]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY > sectionTop - 50) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    return () => {};
  }, [location]);

  return (
    <>
      <motion.header
        className="fixed z-[10000] flex w-full items-center justify-center"
        variants={navbarVariants}
        initial={["default", "slideStart"]}
        animate={[scrolledY ? "active" : "default", "slideEnd"]}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex h-full items-center justify-between ">
          <Link to="/" className="flex h-3/4 items-center gap-x-2">
            {/* <div className="h-full max-h-14 max-w-14 bg-red-100">
              로고들어가는자리
            </div> */}
            {/* <img
              src={require("src/assets/img/logo2.png")}
              alt="logo"
              className="h-full max-h-8"
            /> */}
            <p className="text-base font-semibold text-gray-90">WOOJUNG YANG</p>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-x-4">
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className={classNames("link", {
                      "text-primary-50": activeSection === link.id,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/contact" className="btn-primary hidden md:inline-flex">
            Contact
          </Link>
          <button
            className="cursor-pointer text-gray-90 md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {toggleMenu && (
          <MobileNavbar
            ref={mobileNavbarRef}
            setToggleMenu={setToggleMenu}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  );
};
