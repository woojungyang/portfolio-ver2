import { motion } from "framer-motion";
import { forwardRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { ReactComponent as Circle01 } from "src/assets/svg/cir-01.svg";
import { ReactComponent as Circle02 } from "src/assets/svg/cir-02.svg";
import { fadeInVariants } from "src/constants";
import { SectionTitle } from "./common";

const Skill = forwardRef(({ icon: Icon, title, description }, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-start gap-y-4 rounded-xl border border-solid border-gray-30  p-6 transition-colors hover:border-primary-50"
    >
      <div className=" flex size-[70px] items-center justify-center rounded-full bg-primary-50/5 text-primary-50">
        <Icon size={28} />
      </div>
      <p className="text-lg font-semibold text-gray-90">{title}</p>
      <p className="text-base font-normal text-gray-50">{description}</p>
    </div>
  );
});

const SkillMotion = motion(Skill);

export const Skills = () => {
  return (
    <section>
      <div className=" container relative flex flex-col items-center gap-y-9">
        <Circle02
          className="absolute left-0 top-0 -z-10 -translate-y-14"
          style={{ "--secondary": "#6DBDB2" }}
        />
        <Circle01
          className="absolute right-0 top-0 -z-10 "
          style={{ "--primary": "#E8916E" }}
        />
        <SectionTitle title="Skills" subtitle="what i can do for you" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummySkills.map((skill, index) => (
            <SkillMotion
              key={skill.id}
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

const dummySkills = [
  {
    id: "webdesign",
    icon: CgWebsite,
    title: "Web Design1",
    description:
      "Creating visually appealing and user-friendly websites that reflect your brand's identity.",
  },
  {
    id: "webdesign",
    icon: CgWebsite,
    title: "Web Design2",
    description:
      "Creating visually appealing and user-friendly websites that reflect your brand's identity.",
  },
  {
    id: "webdesign",
    icon: CgWebsite,
    title: "Web Design3",
    description:
      "Creating visually appealing and user-friendly websites that reflect your brand's identity.",
  },
];
