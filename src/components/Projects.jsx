import classNames from "classnames";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { PiArrowSquareOutBold } from "react-icons/pi";
import { fadeInVariants } from "src/constants";
import { SectionTitle } from "./common";

const Project = forwardRef(({ link, name, tags, image }, ref) => {
  return (
    <div ref={ref} className="">
      <a
        href={link}
        target="_blank"
        className="group flex flex-col gap-y-4 cursor-pointer"
        rel="noreferrer"
      >
        <div className="relative h-[300px] w-full overflow-hidden rounded-xl before:absolute before:inset-0 before:bg-gradient-to-t before:form-black/80 before:to-black/15 before:opacity-0 before:transition-opacity group-hover:before:opacity-100 border border-primary-10 [&>img]:hover:scale-[1.2] [&>img]:transition-transform duration-300">
          <img src={image} alt={name} className="size-full" />
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-50 p-3 opacity-0 transition-opacity group-hover:opacity-100">
            <PiArrowSquareOutBold color="white" />
          </button>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className=" text-xl font-semibold text-gray-90 transition-colors group-hover:text-primary-50">
            {name}
          </p>
          <div className=" flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={classNames(
                  "flex h-7 items-center justify-center rounded-full text-white border-solid  px-4 text-sm font-normal bg-opacity-90",

                  { "bg-[#C46F4E]": tag === "Toy" },
                  { "bg-[#4A8D84]": tag === "Professional" },
                  { "bg-[#9E5052]": tag === "React" },
                  { "bg-[#AD9275]": tag === "Next.js" },
                  { "bg-[#9E5052]": tag === "React-Native" },
                  { "bg-[#4A8D84]": tag === "HTML / JQuery" },
                  { "bg-[#AD9275]": tag === "Responsive" },
                  { "bg-[#C46F4E]": tag === "Web" },
                  { "bg-[#6DBDB2]": tag === "Mobile" },
                  { "bg-[#87A8D0]": tag === "Tailwindcss" },
                  { "bg-[#5E81AC]": tag === "Typescript" },
                  { "bg-[#A37D92]": tag === "Shadcn" },
                  { "bg-[#D65C5C]": tag === "React-Query" },
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
});

const ProjectMotion = motion(Project);

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container relative flex flex-col items-center gap-y-9">
        <SectionTitle title="Projects" subtitle="Web & App Development" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectMotion
              key={project.id}
              {...project}
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

const projects = [
  {
    id: 1,
    tags: ["Toy", "Web", "React", "React-Query", "Responsive"],
    name: "WOOTEEK",
    description:
      "다양한 브랜드와 트렌드를 한곳에서 즐기는 가상의 복합 쇼핑 플랫폼입니다.",
    image: require("src/assets/thumbnail/wooteek.png"),
  },
  {
    id: 2,
    tags: [
      "Professional",
      "Web",
      "Next.js",
      "Typescript",
      "Shadcn",
      "Tailwindcss",
      "React-Query",
      ,
    ],
    name: "ONEMOVE",
    description:
      "원무브는  개인의 운동 수행능력을 더욱 섬세하게 고려한 맞춤형 운동 프로그램을 제공 경력 개발을 원하는 사용자와 전문가 멘토를 연결하여 맞춤형 상담과 지도를 제공하는 운동센터 입니다.",
    image: require("src/assets/thumbnail/onemove.png"),
  },
  {
    id: 3,
    tags: [
      "Professional",
      "Web",
      "Next.js",
      "Typescript",
      "Shadcn",
      "Tailwindcss",
      "React-Query",
      ,
    ],
    name: "같이운동",
    description:
      "같이운동은 건강하고 행복한 삶을 위해 최적의 운동 환경과 프로그램을 제공하며, 운동을 삶의 중요한 부분으로 만들어주는 운동센터입니다.",
    image: require("src/assets/thumbnail/together.png"),
  },
  {
    id: 4,
    tags: ["Professional", "Web", "React", "React-Query", "i18n"],
    name: "사수래",
    description:
      "사수래는 멘토링 서비스 제공하며, 경력 개발을 원하는 사용자와 전문가 멘토를 연결하여 맞춤형 상담과 지도를 제공하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/sasurea.png"),
  },
  {
    id: 5,
    tags: ["Professional", "Web", "Next.js", "React-Query"],
    name: "EventPlus",
    description:
      "이벤트플러스는 온라인 이벤트 관리, 티켓팅 등 사용자가 손쉽게 이벤트를 계획하고 관리할 수 있는 기능을 제공하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/eventplus.png"),
  },
  {
    id: 6,
    tags: [
      "Professional",
      "Web",
      "Mobile",
      "React",
      "React-Native",
      "React-Query",
    ],
    name: "FitDoc",
    description:
      "핏닥은 개인 맞춤형 건강 관리 및 운동 프로그램을 제공하며, 사용자가 자신의 건강 상태에 맞는 운동과 식단을 계획하고 관리할 수 있도록 지원하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/fitdoc.png"),
  },
  {
    id: 7,
    tags: ["Professional", "Web", "HTML / JQuery", "Responsive"],
    name: "Driven",
    description:
      "드리븐은 AI 기반의 데이터 분석 및 비즈니스 인사이트를 제공하며 사용자가 데이터를 효율적으로 분석하고 실시간으로 비즈니스 성과를 모니터링할 수 있도록 지원하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/driven.png"),
  },
  {
    id: 8,
    tags: ["Professional", "Web", "Next.js", "i18n"],
    name: "BIZA SWAP",
    description:
      "비자스왑은 암호화폐의 분산형 거래소로 사용자 간의 직접 거래를 지원하여 빠르고 안전한 자산 교환을 가능하게 하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/biza.png"),
  },
];
