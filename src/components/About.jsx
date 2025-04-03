import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ReactComponent as Rhombus } from "src/assets/svg/rhombus.svg";
import { leftSideVariants, rightSideVariants } from "src/constants";
import { SectionTitle } from "./common";

export const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[url(src/assets/svg/topography.svg)] bg-cover bg-no-repeat"
    >
      <div className="container relative flex flex-col items-center gap-y-9">
        <Rhombus
          className="absolute right-[5%] -z-10 w-12"
          style={{ "--secondary": "#6DBDB2", "--primary": "#E8916E" }}
        />

        <SectionTitle title="ABOUT ME" subtitle="Introduce" />
        <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row">
          {/* left side */}
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" flex w-full justify-center md:w-5/12 md:justify-start"
          >
            <img
              src={require("src/assets/img/title.png")}
              alt="about"
              className="aspect-square w-full max-w-[450px] rounded-xl"
            />
          </motion.div>
          {/* right side */}
          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-y-5 text-center md:w-1/2 md:items-end md:text-start"
          >
            <div className="flex flex-col gap-y-3">
              <p className="text-3xl font-semibold text-gray-90">
                안녕하세요. 프론트엔드 개발자 양우정입니다.
              </p>
              <p className="text-lg font-normal text-gray-70 text-justify">
                사용자 경험을 고려한 정교한 UI 개발과 협업을 중요하게 생각하는
                프론트엔드 개발자입니다. 약3년간 다양한 프로젝트를 경험하며
                React, Next 중심으로 한 개발에 익숙하며, 성능 최적화와
                유지보수성을 고려한 코드를 작성하는 데 집중해왔습니다.쇼핑몰,
                멘토링 플랫폼, 예약 관리 시스템 등 다양한 서비스를 아우르는
                프로젝트를 수행하며, 필터링 시스템 구현, 대시보드 개발, 다국어
                지원 등의 기능을 구축한 경험이 있습니다 디자이너, 백엔드 개발자,
                기획자와 긴밀하게 협업하며 원활한 커뮤니케이션을 통해 프로젝트의
                완성도를 높이는 것을 중요하게 생각합니다. 새로운 기술을 탐구하고
                더 나은 사용자 경험을 제공하는 것에 흥미를 느끼며, 변화에
                유연하게 적응하는 개발자로 성장하고 있습니다.
              </p>
            </div>
            <a
              href="https://github.com/woojungyang"
              target="_blank"
              className="btn-primary w-fit"
              rel="noreferrer"
            >
              <FaGithub color="white" />
              Github
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
