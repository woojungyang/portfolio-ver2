import { motion } from "framer-motion";
import { forwardRef } from "react";
import { FaBitbucket, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoGithub, IoLogoJavascript } from "react-icons/io";
import {
  SiJquery,
  SiNextdotjs,
  SiRedux,
  SiSourcetree,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { ReactComponent as Circle01 } from "src/assets/svg/cir-01.svg";
import { ReactComponent as Circle02 } from "src/assets/svg/cir-02.svg";
import { fadeInVariants } from "src/constants";
import { SectionTitle } from "./common";

const Skill = forwardRef(({ icon: Icon, name }, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-center items-center gap-4 rounded-xl border border-solid border-gray-30 p-2 transition-colors hover:border-primary-50 "
    >
      <div className=" flex size-[30px] items-center justify-center rounded-full bg-primary-50/5 text-primary-50">
        <Icon size={20} />
      </div>
      <p className="text-lg font-semibold text-gray-90">{name}</p>
    </div>
  );
});

const SkillMotion = motion(Skill);

export const Skills = () => {
  return (
    <section id="skills">
      <div className="container relative flex flex-col justify-center items-center gap-y-9">
        <Circle02
          className="absolute left-0 top-0 -z-10 -translate-y-14"
          style={{ "--secondary": "#6DBDB2" }}
        />
        <Circle01
          className="absolute right-0 top-0 -z-10 "
          style={{ "--primary": "#E8916E" }}
        />
        <SectionTitle title="Skills" subtitle="Tools & Technologies" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillMotion
              key={index}
              {...skill}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              custom={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const skills = [
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: IoLogoJavascript, name: "Javascript" },
  { icon: SiJquery, name: "JQuery" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: FaReact, name: "React" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: TbBrandReactNative, name: "React-Native" },
  { icon: SiTailwindcss, name: "Tailwindcss" },
  { icon: FaSass, name: "Scss" },
  { icon: SiStyledcomponents, name: "Styled-components" },
  { icon: IoLogoGithub, name: "Git" },
  { icon: SiSourcetree, name: "SourceTree" },
  { icon: FaBitbucket, name: "Bitbucket" },
];
