import { motion } from "framer-motion";
import { MdFileOpen } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { ReactComponent as Arrow01 } from "src/assets/svg/arrow-01.svg";
import { ReactComponent as Arrow02 } from "src/assets/svg/arrow-02.svg";
import { ReactComponent as Lines } from "src/assets/svg/lines.svg";
import { leftSideVariants, rightSideVariants } from "src/constants";
export const Main = () => {
  return (
    <section id="home" className="flex min-h-screen items-center">
      <div className="container flex flex-col-reverse items-center justify-between gap-y-12 md:flex-row">
        {/* left side */}
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center gap-y-7 text-center md:w-1/2 md:items-start md:text-start "
        >
          <Arrow01
            style={{ "--secondary": "#6DBDB2", "--primary": "#E8916E" }}
            className="absolute right-0 top-0 hidden w-16 -translate-y-full sm:block lg:w-20"
          />
          <div className=" flex flex-col gap-y-4">
            <h1 className="text-h1 font-bold">
              Glad to have you here
              {/* Welcome to my{" "}
              <span className="text-secondary-50">portfolio </span> */}
            </h1>
            <h2 className="text-h2 text-gray-90">
              I'm{" "}
              <span className="text-primary-50">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1300}
                  deleteSpeed={25}
                  typeSpeed={80}
                  loop={0}
                  words={["Woojung Yang", "Front-end Developer"]}
                />
              </span>
            </h2>
            <p className="text-lg font-normal text-gray-70">
              사용자 경험을 최우선으로 하며, 협업과 성장을 통해 더 나은 웹을
              만들어가는 프론트엔드 개발자입니다.
            </p>
          </div>
          <div className="flex justify-start gap-x-2">
            <a
              href="/resume.pdf"
              target="_blank"
              className="btn-primary text-white w-fit bg-secondary-50"
            >
              <MdFileOpen />
              Resume
            </a>
            <a
              href="/report.pdf"
              target="_blank"
              className="btn-primary text-white w-fit  bg-secondary-50"
            >
              <MdFileOpen />
              WorkingReport
            </a>
          </div>
          <Arrow02
            style={{ "--secondary": "#6DBDB2", "--primary": "#E8916E" }}
            className="absolute -bottom-4 left-0 hidden w-12 translate-y-full md:block lg:w-16"
          />
        </motion.div>
        {/* right side */}
        <motion.div
          variants={rightSideVariants}
          initial="hidden"
          animate="visible"
          className="relative flex h-full justify-end md:w-1/2"
        >
          <img
            src={require("src/assets/img/cta-1.png")}
            alt="woojungyang"
            className="w-full max-2-80 md:max-w-[75%]"
          />
          <Lines
            style={{ "--secondary": "#6DBDB2" }}
            className="absolute -top-3 w-10 md:w-14"
          />
        </motion.div>
      </div>
    </section>
  );
};
