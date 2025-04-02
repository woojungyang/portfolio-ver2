import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import { mobileNavbarVariants, navbarLinks } from "src/constants";

export default forwardRef(({ setToggleMenu, activeSection }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="fixed right-0 top-0 z-[100000] h-dvh w-full max-w-72 bg-white px-4 py-[50px] shadow-lg"
      variants={mobileNavbarVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <button
        className="absolute right-0 top-0 m-4 text-gray-90"
        onClick={() => setToggleMenu(false)}
      >
        <IoMdClose />
      </button>
      <nav className="flex h-full flex-col justify-between gap-y-4">
        <ul className=" flex w-full flex-col gap-y-5">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={classNames("link text-lg", {
                  "text-primary-50": activeSection === link.id,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
});
