import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col gap-8 py-sec-sm">
        <div className="flex flex-wrap justify-center gap-6 sm:justify-between">
          <div className=" flex w-fit items-center gap-x-3">
            <p className="text-xl font-semibold text-gray-90">WOOJUNG YANG</p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li className="btn-primary size-fit p-2 cursor-pointer">
              <Link to="/contact">
                <MdEmail />
              </Link>
            </li>
            <li className="btn-primary size-fit p-2 cursor-pointer">
              <a
                href="https://github.com/woojungyang"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-gray-30" />
        <div>
          <p className="text-center text-lg font-medium text-gray-90">
            <span className="text-primary-50">woojungyang</span> ⓒ
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
