import classNames from "classnames";
import { motion } from "framer-motion";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiArrowSquareOutBold } from "react-icons/pi";
import { centerVariants, fadeInVariants } from "src/constants";
import { SectionTitle } from "./common";

const ProjectTag = ({ tag }) => {
  return (
    <span
      className="badge bg-gray-30 border-none text-gray-90  py-1 px-2 text-sm rounded-md"
      // className={classNames(
      //   "flex h-7 items-center justify-center rounded-full text-white border-solid  px-4 text-sm font-normal bg-gray-70 bg-opacity-90",
      //   // { "bg-[#C46F4E]": tag === "Toy" },
      //   // { "bg-[#4A8D84]": tag === "Professional" },
      //   // { "bg-[#9E5052]": tag === "React" },
      //   // { "bg-[#AD9275]": tag === "Next.js" },
      //   // { "bg-[#9E5052]": tag === "React-Native" },
      //   // { "bg-[#4A8D84]": tag === "HTML / JQuery" },
      //   // { "bg-[#AD9275]": tag === "Responsive" },
      //   // { "bg-[#C46F4E]": tag === "Web" },
      //   // { "bg-[#6DBDB2]": tag === "Mobile" },
      //   // { "bg-[#87A8D0]": tag === "Tailwindcss" },
      //   // { "bg-[#5E81AC]": tag === "Typescript" },
      //   // { "bg-[#A37D92]": tag === "Shadcn" },
      //   // { "bg-[#D65C5C]": tag === "React-Query" },
      // )}
    >
      {tag}
    </span>
  );
};

const ModalContentSection = ({ title, content, border = true }) => {
  return (
    <div className={border ? "border-b border-gray-50 pb-2" : ""}>
      <p className="font-semibold text-lg  mb-1 text-[--text-gray]">{title}</p>
      <p className="text-[#4f4f4f]  text-sm/7">{content}</p>
    </div>
  );
};
const ModalTitle = ({ title }) => {
  return (
    <p className="font-semibold text-xl py-3 mb-3 border-b-2 border-b-[--text-gray] text-[--text-gray]">
      {title}
    </p>
  );
};

const ModalProject = ({ selected, setSelected }) => {
  const selectedProject = useMemo(
    () => projects.find((e) => e.name === selected) ?? null,
    [selected],
  );

  if (!selectedProject || !selected) return null;
  return (
    <div
      onClick={() => setSelected(null)}
      className="[--text-gray:#222] fixed inset-0 bg-black/70 z-[10000] cursor-pointer overflow-y-auto "
    >
      <motion.div
        layoutId={`card-${selectedProject.id}`}
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-0 m-auto w-full overflow-y-auto max-w-[90vw] lg:max-w-[55vw] h-[70vh] cursor-default bg-white p-10 rounded-md"
      >
        <div className="flex flex-col h-full">
          <div className=" border-b-4 border-gray-50 mb-4 w-full">
            <button
              className="absolute right-10 top-10"
              onClick={() => setSelected(null)}
            >
              <IoClose className=" text-gray-90" size={30} />
            </button>
            <div className=" flex flex-col xl:flex-row  justify-between items-center overflow-hidden pb-5 mt-10 ">
              <h3 className="text-h3 font-bold mb-2">
                {selectedProject?.name}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center mt-2 xl:mt-0 xl:ml-20 xl:justify-end">
                {selectedProject?.stacks.map((tag, index) => (
                  <ProjectTag key={index} tag={tag} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 xl:gap-x-10 h-full  ">
            <article className="col-span-1 xl:col-span-2 gap-9 h-full flex flex-col">
              <ModalTitle title="Overview" />
              <div className="flex flex-col flex-grow ">
                <span className="text-gray-50 font-semibold font-sm">01</span>
                <div className="flex flex-col gap-y-5 flex-grow justify-start md:justify-end">
                  <div>
                    <img
                      src={selectedProject?.modalImage}
                      className="max-w-[50%]"
                    />
                    <p className="font-semibold text-5xl py-3 mb-1 text-[--text-gray]">
                      About Project
                    </p>
                    <p className="text-[#4f4f4f] text-justify  text-sm/7">
                      {selectedProject.aboutProject}
                    </p>
                  </div>
                  <ModalContentSection
                    border={false}
                    title="Project Goal"
                    content={selectedProject.goalOfProject}
                  />
                  <div className="border-t-4 border-t-[--text-gray] gap-x-3 py-2">
                    <p className="text-sm/7">
                      {selectedProject.developmentPeriod.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="gap-9 h-full flex flex-col">
              <ModalTitle title="Project Details" />
              <div className="flex flex-col flex-grow ">
                <div className="flex flex-col gap-y-5 flex-grow justify-between">
                  <div className="flex flex-col gap-7">
                    <div>
                      <span className="text-gray-50 font-semibold font-sm">
                        02
                      </span>
                      <ModalContentSection
                        title="Service"
                        content={selectedProject.service}
                      />
                    </div>
                    <div>
                      <span className="text-gray-50 font-semibold font-sm">
                        03
                      </span>
                      <ModalContentSection
                        title="Public Availability"
                        content={selectedProject.publicAvailability}
                      />
                    </div>
                    <div>
                      <span className="text-gray-50 font-semibold font-sm">
                        04
                      </span>
                      <p className="font-semibold text-lg  mb-1 text-[--text-gray]">
                        Main Tasks
                      </p>
                      <ul>
                        {selectedProject.mainTasks.map((task, index) => (
                          <li
                            key={index}
                            className={classNames(
                              "flex flex-row md:flex-col xl:flex-row justify-between text-sm/7 text-[--text-gray] border-b border-b-gray-30 py-1",
                              {
                                "border-none pb-0":
                                  index + 1 ===
                                  selectedProject.mainTasks.length,
                              },
                            )}
                          >
                            <p className="w-full mr-2">{task.label}</p>
                            <p className="text-right">{task.program}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t-4 border-t-[--text-gray] flex gap-x-3 py- min-h-[48px]">
                    <a
                      href={selectedProject?.webSite}
                      target="_blank"
                      className="underline text-sm/7 overflow-hidden text-ellipsis "
                    >
                      {selectedProject?.webSite ?? ""}
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="gap-9 h-full flex flex-col">
              <ModalTitle title="Strategy" />
              <div className="flex flex-col flex-grow ">
                <div className="flex flex-col gap-y-5 flex-grow justify-between">
                  <div className="flex flex-col gap-7">
                    <div>
                      <span className="text-gray-50 font-semibold font-sm">
                        05
                      </span>
                      <ModalContentSection
                        title="Approach"
                        content={selectedProject.projectExecution.approach}
                      />
                    </div>
                    <div>
                      <span className="text-gray-50 font-semibold font-sm">
                        06
                      </span>
                      <ModalContentSection
                        border={false}
                        title="Execution"
                        content={selectedProject.projectExecution.execution}
                      />
                    </div>
                  </div>
                  <div className="border-t-4 border-t-[--text-gray] flex gap-x-3 py-2">
                    <p className="text-sm/7 text-right xl:text-right">
                      {selectedProject.serviceArea}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Project = forwardRef(({ link, name, tags, image, setSelected }, ref) => {
  return (
    <div
      ref={ref}
      className="group flex flex-col gap-y-4 cursor-pointer"
      onClick={() => setSelected(name)}
    >
      <div
        className="relative h-[300px] w-full overflow-hidden rounded-xl before:absolute before:inset-0 before:bg-gradient-to-t before:form-black/80 before:to-black/15 before:opacity-0 before:transition-opacity group-hover:before:opacity-100 border border-gray-50"
        // [&>img]:hover:scale-[1.025] [&>img]:transition-transform duration-300"
      >
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
          {tags.map((tag, index) => (
            <ProjectTag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
});

const ProjectMotion = motion(Project);

export const Projects = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selected]);

  return (
    <>
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
                layoutId={`card-${project.id}`}
                whileHover={{
                  scale: 1.025,
                  transition: { duration: 0.2 },
                }}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <ModalProject selected={selected} setSelected={setSelected} />
      )}
    </>
  );
};

const projects = [
  {
    id: 1,
    tags: ["Toy", "Web", "React", "React-Query", "Responsive"],
    name: "WOOTEEK",
    serviceArea: "Client Page",
    description:
      "다양한 브랜드와 트렌드를 한곳에서 즐기는 가상의 복합 쇼핑 플랫폼입니다.",
    image: require("src/assets/thumbnail/wooteek.png"),
    modalImage: require("src/assets/modal/wooteek.png"),
    client: "WOOTEEK",
    service: "Web Responsive Development",
    stacks: [
      "React",
      "Redux",
      "React-Query",
      "Scss",
      "Firebase",
      "TossPayment",
    ],
    webSite: "https://wootkeek.web.app/",
    personnel: 1,
    aboutProject:
      "WOOTEEK은 무신사와 더블유컨셉과 같은 복합 쇼핑몰을 모델로 한 가상 쇼핑 플랫폼입니다. 다양한 브랜드와 최신 트렌드를 한곳에서 탐색할 수 있으며, 사용자는 필터링 기능을 통해 카테고리별로 손쉽게 원하는 상품을 찾을 수 있습니다. 이 플랫폼은 더미 데이터를 사용해 구축되었으며, 사용자 경험을 극대화하기 위해 직관적인 UI를 적용했습니다. 또한, 반응형 웹 디자인을 통해 다양한 디바이스에서 최적의 성능을 발휘하며, 모바일에서도 매끄러운 쇼핑 경험을 제공합니다.",
    mainTasks: [
      { label: "기획 & 웹디자인", program: "Adobe express" },
      { label: "웹 퍼블리싱", program: "Scss" },
      { label: "API 연동", program: "Axios, React-Query" },
      { label: "프론트 개발", program: "React" },
      { label: "Mocking", program: "Axios-mock-adapter" },
    ],
    publicAvailability: "공개",
    developmentPeriod: ["2024.05.16 ~ 2024.09.16"],
    repositories: ["Single Repository"],
    goalOfProject:
      "Wooteek는 혼자서 기획, 디자인, 개발까지 진행한 복합 쇼핑몰 프로젝트입니다. 다양한 쇼핑몰을 벤치마킹해, 사용자들이 이질감을 느끼지 않고 편리하게 쇼핑할 수 있는 환경을 제공하는 것이 목표였습니다. 모킹 데이터를 통해 쇼핑몰에 생동감을 부여하고, 일관된 사용자 경험을 유지하는 데 중점을 두었습니다.",
    projectExecution: {
      approach: `복잡한 복합 쇼핑몰 구조를 고려하여, 사용자 입장에서 직관적으로 탐색 가능한 카테고리 구조와 필터 UI를 설계했습니다.기획부터 퍼블리싱, 프론트엔드 로직까지 혼자 전체를 담당하며 유연하게 구조를 설계할 수 있었고,실제 쇼핑몰 사용자 경험을 바탕으로 메인 슬라이더, 상품 카드, 검색 등 주요 기능을 구현했습니다.더미 데이터 기반으로 서버 없이도 실제처럼 작동하는 UX를 구현해 테스트가 쉬운 구조로 만들었고,다양한 반응형 환경에서 최적의 UI를 제공하기 위해 디테일한 브레이크포인트 조정도 병행했습니다.`,
      execution:
        "혼자서 디자인과 개발을 진행하며 각 파트의 중요성을 인식하였고, 사용자 경험을 극대화하기 위해 다양한 기능을 연구하고 구현했습니다. 반응형 웹 디자인을 통해 다양한 디바이스에서 최적의 성능을 제공하는 데 주력했습니다.",
      challenges:
        " 기획서가 부재하여 지속적인 수정과 삭제가 필요했고, 혼자서 모든 작업을 진행해야 하므로 시간 관리에 어려움이 있었습니다. 다양한 쇼핑몰을 벤치마킹하는 과정에서 정보 수집이 힘들어 추가적인 노력이 필요했습니다.",
    },
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
    serviceArea: "Admin Page",
    description:
      "원무브는  개인의 운동 수행능력을 더욱 섬세하게 고려한 맞춤형 운동 프로그램을 제공 경력 개발을 원하는 사용자와 전문가 멘토를 연결하여 맞춤형 상담과 지도를 제공하는 운동센터 입니다.",
    image: require("src/assets/thumbnail/onemove.png"),
    modalImage: require("src/assets/modal/onemove.png"),
    client: "주식회사 9052두",
    service: "Web Development",
    stacks: [
      "Next.js",
      "Typescript",
      "React-Query",
      "Tailwindcss",
      "Shadcn",
      "Radix-UI",
      "React-Big-Calendar",
    ],
    webSite: "https://onemove.co.kr/",
    personnel: 2,
    aboutProject:
      "ONEMOVE 프로젝트의 목표는 지점 관리자가 운영을 보다 체계적으로 관리할 수 있도록 돕는 것이었습니다. 회원, 강사, 수업 등의 데이터를 효율적으로 관리할 수 있도록 기능을 설계하였으며, 일정 관리 및 예약 시스템을 통해 강사 및 회원의 스케줄을 원활하게 조율할 수 있도록 구현했습니다.\n또한, React-Big-Calendar를 활용하여 강사의 수업 일정을 한눈에 확인하고 조정할 수 있도록 구성하였으며, 필터링 및 정렬 기능을 추가하여 원하는 데이터를 빠르게 검색할 수 있도록 했습니다. 이를 통해 관리자의 업무 부담을 줄이고, 보다 편리하고 효율적인 운영이 가능하도록 지원하는 것이 프로젝트의 주요 목표였습니다.\nUI 디자인 측면에서는 TailwindCSS와 Shadcn을 사용하여 일관된 스타일 가이드를 적용하고, 관리자가 직관적으로 데이터를 확인하고 수정할 수 있도록 UX를 최적화했습니다. 또한, Next.js와 TypeScript 기반으로 개발하여 유지보수성과 확장성을 고려했으며, React-Query를 활용하여 실시간 데이터 관리가 가능하도록 구현하여 운영의 효율성을 극대화했습니다.",
    mainTasks: [
      { label: "웹 퍼블리싱", program: "Tailwindcss, Shadcn" },
      { label: "API 연동", program: "Axios, React-Query" },
      { label: "프론트 개발", program: "Next.js" },
      { label: "스케줄", program: "react-big-calendar" },
    ],
    publicAvailability: "비공개",
    developmentPeriod: ["2025.01.24 ~ 2025.02.28"],
    repositories: ["Single Repository"],
    goalOfProject:
      "ONEMOVE 프로젝트의 목표는 운동 센터의 관리 시스템을 디지털화하고, 사용자 경험을 극대화하는 것이었습니다. 지점, 회원 및 수업 관리 시스템을 웹 기반으로 전환하여, 지점 관리자가 보다 효율적으로 전체 지점을 운영하고, 회원을 관리하며, 수업과 강사의 일정을 조정할 수 있도록 하는 것이 핵심 목표였습니다.\n또한, 데이터 필터링 및 정렬 기능을 추가하여 검색 편의성을 높였으며, 관리자가 원하는 정보를 더욱 빠르고 정확하게 확인할 수 있도록 했습니다. 이를 통해 관리자의 업무 부담을 줄이고, 운영 효율성을 향상시키는 것에 초점을 맞추었습니다. ",
    projectExecution: {
      approach:
        "ONEMOVE 프로젝트는 수업, 회원 및 강사 관리 시스템을 구축하는 데 집중하였으며, React-Query를 활용하여 실시간으로 데이터를 관리할 수 있도록 했습니다. 이를 통해 관리자가 변경 사항을 즉시 확인할 수 있도록 했으며, API 호출 최적화를 통해 불필요한 리렌더링을 최소화하여 성능을 향상시켰습니다.\nUI 디자인 측면에서는 TailwindCSS와 Shadcn을 사용하여 스타일을 체계적으로 관리하고, 일관된 스타일 가이드를 적용하여 유지보수성을 높였습니다. 이를 통해 각 화면에서 일관된 UI를 유지하면서도, 사용자가 직관적으로 데이터를 확인하고 관리할 수 있도록 구현하였습니다.",
      execution:
        "Next.js와 TypeScript 기반으로 개발하여 코드의 안정성과 확장성을 고려했습니다. 반응형 웹 디자인을 적용하여 다양한 디바이스에서도 최적의 UX를 제공할 수 있도록 했으며, Redux 없이 React-Query를 활용해 상태 관리를 간결하게 구현했습니다. 또한, 강사 스케줄 관리 기능을 추가하여, 사용자들이 강사의 일정을 한눈에 파악하고 편리하게 예약할 수 있도록 했습니다.",
      challenges:
        "디자인 가이드에서 요구한 0.5px border 적용이 기술적으로 불가능해 대체 방법을 고민해야 했습니다. CSS의 기본 제한 사항 때문에 실제 렌더링에서는 1px로 표현되는 문제가 있었으며, 이를 해결하기 위해 Drop-shadow 효과 등을 시도했으나 확대 시 품질이 저하되는 한계가 있었습니다. \n결국 기획자와 협의하여 디자인을 조정하고, 실제 사용자 경험에 영향을 주지 않는 방식으로 해결하는 방향을 선택했습니다. 이를 통해, 기술적 한계를 극복하고 최적의 결과를 도출하는 과정에서 협업과 커뮤니케이션의 중요성을 다시 한번 실감할 수 있었습니다.",
    },
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
    serviceArea: "Admin Page",
    description:
      "같이운동은 건강하고 행복한 삶을 위해 최적의 운동 환경과 프로그램을 제공하며, 운동을 삶의 중요한 부분으로 만들어주는 운동센터입니다.",
    image: require("src/assets/thumbnail/together.png"),
    modalImage: require("src/assets/modal/together.png"),
    client: "같이운동",
    service: "Web Development",
    stacks: [
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "React-Query",
      "Axios",
      "Shadcn",
      "Radix-UI",
      "ApexCharts",
      "React-Big-Calendar",
    ],
    webSite: "https://togethertraining.kr/",
    personnel: 2,
    aboutProject:
      "같이운동은 지점 관리자가 회원, 강사, 수업 및 매출을 효율적으로 관리할 수 있도록 설계된 웹 어플리케이션입니다. 이 프로젝트는 다양한 운동센터의 운영 방식을 반영하여, 관리자들이 보다 체계적으로 업무를 수행할 수 있도록 지원하는 것을 목표로 했습니다. \n\n주요 기능으로는 회원 및 강사 관리, 일정 예약 시스템, 결제 내역 관리, 수업 진행 상태 확인 등이 있으며, React-Big-Calendar를 활용하여 수업 스케줄을 직관적으로 확인할 수 있도록 구현했습니다. 또한, ApexCharts를 이용한 데이터 시각화를 적용하여, 매출 현황을 한눈에 파악할 수 있도록 했습니다.",
    mainTasks: [
      { label: "웹 퍼블리싱", program: "Tailwindcss, Shadcn" },
      { label: "API 연동", program: "Axios, React-Query" },
      { label: "프론트 개발", program: "Next.js" },
      { label: "스케줄", program: "react-big-calendar" },
      { label: "차트", program: "react-apexcharts" },
    ],
    publicAvailability: "비공개",
    developmentPeriod: ["2024.10.15 ~ 2025.02.28"],
    repositories: ["Single Repository"],
    goalOfProject:
      "같이운동 프로젝트의 목표는 지점 관리자가 운영을 보다 체계적으로 관리할 수 있도록 돕는 것이었습니다. 지점 내 회원, 강사, 수업 및 매출 등의 데이터를 효율적으로 관리할 수 있도록 기능을 설계하였으며, 일정 관리 및 예약 시스템을 통해 강사 및 회원과의 스케줄 조율을 원활하게 진행할 수 있도록 했습니다.\n또한, React-Big-Calendar를 활용하여 수업 일정을 한눈에 확인하고 조정할 수 있도록 구성하였으며, ApexCharts를 활용한 데이터 시각화 기능을 통해 매출 및 운영 현황을 직관적으로 분석할 수 있도록 구현하였습니다. 이를 통해 관리자의 업무 부담을 줄이고, 보다 편리하고 효율적인 운영이 가능하도록 지원하는 것이 프로젝트의 주요 목표였습니다.",
    projectExecution: {
      approach:
        "같이운동 프로젝트는 지점 운영을 효과적으로 관리할 수 있도록, 데이터 시각화 및 일정 관리 기능을 최적화하는 데 집중하였습니다. 지점 관리자가 운영 상태를 보다 직관적으로 파악할 수 있도록 ApexCharts를 활용한 데이터 시각화를 적용하였으며, React-Big-Calendar를 이용하여 강사 및 수업 일정을 쉽게 조정할 수 있도록 설계했습니다.\n또한, Next.js와 TypeScript 기반으로 개발하여 유지보수성과 확장성을 고려했으며, TailwindCSS와 Shadcn을 활용하여 일관된 디자인 시스템을 구축하였습니다. 이를 통해 UI의 통일성을 유지하면서도, 사용자가 필요한 정보를 빠르게 확인하고 관리할 수 있도록 했습니다.\n데이터 처리 측면에서는 React-Query를 활용하여 실시간 데이터 관리가 가능하도록 했으며, API 호출 최적화를 통해 불필요한 데이터 요청을 줄이고 성능을 향상시켰습니다. 관리자가 원하는 정보를 더욱 빠르고 정확하게 검색할 수 있도록 필터링 및 정렬 기능을 추가하여 데이터 접근성을 높이고 운영의 효율성을 극대화하는 것에 초점을 맞추었습니다.",
      execution:
        "Next.js와 TypeScript를 활용하여 안정적인 구조를 유지하면서도 확장 가능성을 고려하여 개발을 진행했습니다. TailwindCSS와 Shadcn을 사용하여 UI를 모듈화하고, 유지보수성을 높이는 데 초점을 맞췄습니다.",
      challenges:
        "기존 TypeScript 코드에 적응하는 과정에서 엄격한 타입 시스템으로 인해 많은 에러가 발생했으며, API 데이터 모델을 체계적으로 분리하는 작업이 필요했습니다. 또한, 캘린더 UI를 사용자가 직관적으로 활용할 수 있도록 조정하는 과정에서 디자인과 개발 간의 협업이 필요했습니다.",
    },
  },
  {
    id: 4,
    tags: ["Professional", "Web", "React", "React-Query", "i18n"],
    name: "사수래",
    serviceArea: "Client / Admin Page",
    description:
      "사수래는 멘토링 서비스 제공하며, 경력 개발을 원하는 사용자와 전문가 멘토를 연결하여 맞춤형 상담과 지도를 제공하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/sasurea.png"),
    modalImage: require("src/assets/modal/sasurea.png"),
    client: "(주)인트윈",
    service: "Web Development",
    stacks: ["React", "Redux", "React-Query", "Scss", "CometChat", "i18n"],
    webSite: "https://sasurae.kr/sasurae/main.do",
    personnel: 3,
    aboutProject:
      "사수래는 경력 개발과 성장을 원하는 사용자와 전문가 멘토를 연결해주는 멘토링 서비스 플랫폼입니다. 사용자는 간편한 회원 가입 후 자신의 경력 목표에 맞는 멘토를 찾을 수 있으며, 실시간 상담과 채팅을 통해 맞춤형 지도를 받을 수 있습니다. 또한, 멘토와의 상담 이력을 기록하고 관리할 수 있는 기능이 있어 장기적인 경력 개발 계획을 세우는 데 유용합니다. 이 프로젝트는 웹에서 실시간 상호작용을 지원하는 다양한 기술을 활용해 사용자에게 최상의 멘토링 경험을 제공합니다.",
    mainTasks: [
      { label: "API 연동", program: "Axios, React-Query" },
      { label: "차트", program: "react-apexcharts" },
      { label: "프론트 개발", program: "React" },
      { label: "채팅 서비스", program: "CometChat" },
      { label: "다국어지원", program: "react-i18next" },
      { label: "Mocking", program: "Axios-mock-adapter" },
    ],
    publicAvailability: "비공개 유료서비스",
    developmentPeriod: ["2023.03.31 ~ 2023.08.14", "2023.09.10 ~ 2024.04.18"],
    repositories: ["멘티", "멘토", "기업 관리자", "슈퍼 관리자"],
    goalOfProject:
      "멘티, 멘토, 기업 관리자, 슈퍼 관리자를 위한 각각의 대시보드를 제공하기 위해 역할별로 다른 컴포넌트 구조를 구현했습니다. 이를 통해 사용자마다 다른 기능을 수행할 수 있도록 했으며, 반응형 웹을 적용하여 다양한 기기에서 일관된 사용자 경험을 유지했습니다. 각 사용자 역할에 맞춘 데이터 필터링 및 조회 기능을 개발하여 필요한 데이터를 효율적으로 조회할 수 있도록 했고, 대시보드 차트와 채팅 서비스 연동을 통해 사용자와의 상호작용을 원활하게 처리했습니다. 다양한 상태 관리와 API 통신을 최적화하여 빠른 로딩 속도를 유지하며, 사용자 경험을 향상시켰습니다.",
    projectExecution: {
      approach:
        "멘티, 멘토, 기업 관리자, 슈퍼 관리자의 사용 시나리오가 달라 컴포넌트와 페이지 구조를 역할별로 분리했습니다.대시보드, 채팅, 데이터 필터 등 각 기능에 맞춘 동적 라우팅과 조건부 렌더링을 활용해 복잡한 흐름을 단순화했습니다.입력 폼이 많고 조건이 다양했기 때문에, 반복되는 UI를 공통 컴포넌트로 추상화해 생산성을 높였고,디자인 시스템도 구축하여 유지보수가 쉬운 구조로 만들었습니다.실제 기업과 협업하며 요구사항을 반영하고 개선해나가는 과정에서 실무적인 역량도 많이 키웠습니다.",
      execution:
        " 사용자와 멘토 간의 소통을 원활하게 하기 위해 실시간 채팅 기능을 간단하게 구현했습니다. 이를 통해 사용자가 쉽게 멘토를 찾고 상담을 받을 수 있도록 하였으며, 사용자 요구에 맞춘 데이터 필터링 작업을 통해 맞춤형 경험을 제공했습니다. 프로젝트의 기획 과정에서 코드 컨벤션을 준수하여 팀원 간의 협업을 원활하게 하였습니다.",
      challenges:
        " 여러 명의 코드 스타일을 하나로 통합하여 결합하는 과정이 쉽지 않았습니다. 각기 다른 스타일과 접근 방식을 조정하는 데 어려움이 있었고, 이러한 문제를 해결하기 위해 팀원들과의 긴밀한 소통이 필요했습니다. 또한, 여러 차례에 걸친 대규모 프로젝트로 인해 기획 파악에 많은 시간이 소요되었고, 초기 기획 단계에서부터 코드 컨벤션을 설정하고 이를 준수하도록 하여 협업의 일관성을 유지하는 것이 큰 도전이었습니다.",
    },
  },
  {
    id: 5,
    tags: ["Professional", "Web", "Next.js", "React-Query"],
    name: "EventPlus",
    serviceArea: "Admin Page",
    description:
      "이벤트플러스는 온라인 이벤트 관리, 티켓팅 등 사용자가 손쉽게 이벤트를 계획하고 관리할 수 있는 기능을 제공하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/eventplus.png"),
    modalImage: require("src/assets/modal/eventplus.png"),
    client: "(주)플러스닷",
    service: "Web Development",
    stacks: ["Next.js", "React-Query", "Scss", "CkEditor5"],
    webSite: "https://www.eventplus.co.kr/",
    personnel: 2,
    aboutProject:
      "EventPlus는 온라인 이벤트 기획 및 관리, 그리고 티켓 판매 기능을 제공하는 플랫폼입니다. 이벤트 기획자는 간단한 과정으로 이벤트를 등록하고, 실시간으로 참가자를 관리할 수 있습니다. 또한, 참가자는 손쉽게 티켓을 구매하고 이벤트 관련 정보를 확인할 수 있습니다. 플랫폼은 실시간 참가자 통계와 함께 다양한 분석 도구를 제공하여 이벤트 성과를 추적할 수 있게 설계되었습니다.",
    mainTasks: [
      { label: "웹 퍼블리싱", program: "Scss" },
      { label: "API 연동", program: "Axios, React-Query" },
      { label: "프론트 개발", program: "React" },
      { label: "에디터", program: "CKeditor5" },
    ],
    publicAvailability: "비공개 제휴회원서비스",
    developmentPeriod: ["2023.12.08 ~ 2024.03.28"],
    repositories: ["슈퍼 관리자", "파트너사", "고객"],
    goalOfProject:
      "EventPlus 프로젝트는 다양한 파트너사와 고객들이 이벤트를 효율적으로 관리하고, 그 과정을 원활하게 소통할 수 있도록 하는 대규모 이벤트 관리 플랫폼입니다. 유저가 작성한 이벤트 신청서를 손쉽게 처리하고, 슈퍼 관리자와 파트너사 간의 명확한 권한 분배와 데이터를 빠르고 정확하게 처리하는 시스템을 구축하는 것이 목표였습니다. 기획 단계부터 이벤트의 다양한 상태를 관리하고, 이를 바탕으로 사용자 경험을 극대화하는 것이 중요한 과제였습니다.",
    projectExecution: {
      approach:
        "의뢰를 요청하는 고객과 요청을 수락하는 파트너사, 그리고 전체 관리를 담당하는 슈퍼관리자로 나뉜 구조를 반영해 작업했습니다. 고객의 입력 편의를 위해 Ckeditor5를 도입했고, 입력된 콘텐츠가 잘 반영되도록 구조를 설정했습니다. 관리자와 파트너사는 CRUD 기능 중심의 페이지로 구성했고, 각각의 권한에 따라 컴포넌트 및 API 접근을 제어했습니다. 폼 구조는 유연하게 만들되, 검증과 조건 분기를 통해 UX를 해치지 않도록 했습니다. 페이지 전체 흐름이 간결하게 이어지도록 컴포넌트 구조와 레이아웃을 최적화했습니다.",
      execution:
        " 여러 파트너사가 동시에 사용할 수 있도록 시스템을 설계하였고, 이벤트 신청서 관리 기능을 최적화하여 사용자 경험을 향상시켰습니다. 데이터 구조를 체계적으로 설계하여 분석 도구를 제공함으로써 이벤트 관리의 효율성을 높였습니다. 또한, 사용자 피드백을 적극 반영하여 시스템을 지속적으로 개선하는 데 중점을 두었습니다.",
      challenges:
        " 대규모 프로젝트로 인해 기획 파악에 많은 시간이 소요되었고, 기능 구현 과정에서 기술적 어려움이 있었습니다. 다양한 요구 사항을 충족시키기 위해 많은 조정이 필요했으며, 특히 사용자 요구에 맞춘 기능을 개발하는 데 있어 지속적인 테스트와 수정이 요구되었습니다.",
    },
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
    serviceArea: "Client App / Admin Page",
    description:
      "핏닥은 개인 맞춤형 건강 관리 및 운동 프로그램을 제공하며, 사용자가 자신의 건강 상태에 맞는 운동과 식단을 계획하고 관리할 수 있도록 지원하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/fitdoc.png"),
    modalImage: require("src/assets/modal/fitdoc.png"),
    client: "핏닥",
    service: "Web Development, Mobile Development",
    stacks: [
      "React",
      "React Native",
      "Ckeditor5",
      "React-native-webview",
      "TossPayment",
      "React-native-iap",
    ],
    webSite: "https://www.fitdoc.co.kr/",
    personnel: 1,
    aboutProject:
      "FitDoc은 사용자 맞춤형 건강 관리 솔루션을 제공하는 플랫폼으로, 운동 및 식단 프로그램을 사용자에게 맞춰 제안하고 관리할 수 있는 기능을 제공합니다. 사용자는 자신의 건강 상태와 목표를 입력하고, 이에 맞춘 운동 루틴과 식단을 추천받을 수 있으며, 이를 모바일 기기에서도 쉽게 접근하여 일정을 관리할 수 있습니다. 이 플랫폼은 실시간으로 데이터를 기반으로 피드백을 제공하며, 사용자에게 건강 관리에 대한 성취감을 제공합니다. 모바일과 웹 모두에서 최적의 경험을 제공하기 위해 반응형으로 설계되었습니다.",
    mainTasks: [
      { label: "웹 퍼블리싱", program: "Scss" },
      { label: "앱 퍼블리싱", program: "StyleSheet" },
      { label: "API 연동", program: "Axios, React-Query" },
      { label: "프론트 개발", program: "React, React-Native" },
      { label: "에디터", program: "CKeditor5 , react-native-webview" },
      { label: "인앱 결제", program: "React-native-iap" },
      { label: "TossPayment", program: "Tosspayments/payment-sdk" },
    ],
    publicAvailability: "비공개 제휴회원서비스",
    developmentPeriod: ["2022.10.17 ~ 2023.03.02", "2023.08.24 ~ 2023.11.23"],
    repositories: [
      "고객 앱",
      "핏닥 전체 관리",
      "핏닥터 예약관리",
      "제휴회사 예약관리",
      "예약 전체관리",
    ],
    goalOfProject:
      "FitDoc 프로젝트는 사용자별로 맞춤화된 경험을 제공하는 헬스케어 플랫폼으로, 다양한 사용자층이 존재했습니다. 각 사용자가 서로 다른 요구 사항을 가지고 있기 때문에, 각각의 사용자 그룹(일반 사용자, 핏닥터, 슈퍼 관리자 등)에 맞춘 서비스를 제공하는 것이 목표였습니다. 이 프로젝트는 모바일 앱과 웹이 연동되어 일관된 사용자 경험을 제공하는 것에 중점을 두었습니다.",
    projectExecution: {
      approach:
        "회원 전용 앱, 핏닥터, 슈퍼관리자, 제휴회사 등 다양한 사용자를 고려해 각각 별도 레포지토리로 분리 개발했습니다. 각 유저 유형에 따라 요구되는 기능과 레이아웃이 상이하여 구조 설계부터 신중하게 진행했습니다. 예약 관리, 회원 관리 등 주요 기능은 중복 없이 유지되도록 하며, 공통 요소는 모듈화해 관리 효율성을 높였습니다. 초기 퍼블리싱부터 기능 연동까지 전담하면서 컴포넌트화, 조건 분기 처리, 유저 접근성까지 전반적으로 고려했습니다. 기능과 역할이 명확하게 구분된 플랫폼을 목표로 설계 및 구현했습니다.",
      execution:
        "사용자 건강 데이터를 기반으로 맞춤형 프로그램을 제공하는 데 중점을 두었습니다. CKEditor5와의 스타일 조정을 통해 일관된 UI/UX를 유지하였고, 실시간 데이터를 활용하여 사용자 경험을 최적화했습니다. 이러한 전략은 사용자들이 플랫폼을 쉽게 이용할 수 있도록 도왔습니다.",
      challenges:
        "스타일 충돌 문제로 인해 개발 과정에서 어려움을 겪었고, API와 데이터 필터링 작업이 복잡하여 시간이 소요되었습니다. 처음으로 React Native를 적용하는 과정에서 많은 시행착오가 있었고, 모바일 환경에서의 테스트와 피드백 반영이 어려웠습니다.",
    },
  },
  {
    id: 7,
    tags: ["Professional", "Web", "HTML / JQuery", "Responsive"],
    name: "Driven",
    serviceArea: "Client Page",
    description:
      "드리븐은 AI 기반의 데이터 분석 및 비즈니스 인사이트를 제공하며 사용자가 데이터를 효율적으로 분석하고 실시간으로 비즈니스 성과를 모니터링할 수 있도록 지원하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/driven.png"),
    modalImage: require("src/assets/modal/driven.png"),
    client: "DRIVEN",
    service: "Web Maintenance & Localization",
    stacks: ["HTML5", "CSS", "JavaScript"],
    webSite: "",
    personnel: 1,
    aboutProject:
      "DRIVEN 프로젝트는 빅데이터 기반 마케팅 웹 애플리케이션의 다국어 지원 기능을 보수하는 작업을 진행한 프로젝트입니다. 기존의 UI는 영어 버전을 기준으로 설계되어 있었기 때문에 한국어 적용 시 일부 화면이 깨지는 문제가 발생했고, 번역된 콘텐츠가 UI를 벗어나거나 디자인이 망가지는 문제가 있었습니다. 이를 해결하기 위해 번역본을 적용하면서 UI가 정상적으로 표시될 수 있도록 조정하는 작업을 수행했습니다.",
    mainTasks: [
      { label: "다국어 지원 개선", program: "HTML, CSS, JavaScript" },
      { label: "UI 퍼블리싱 수정", program: "CSS" },
      { label: "기획서 기반 번역본 반영", program: "JavaScript" },
    ],
    publicAvailability: "비공개",
    developmentPeriod: ["2022.09.23 ~ 2022.10.05"],
    repositories: ["Single Repository"],
    goalOfProject:
      "DRIVEN 프로젝트의 목표는 기존 마케팅 웹 애플리케이션의 다국어 지원을 원활하게 개선하는 것이었습니다. 번역본 적용 후 UI가 깨지거나 텍스트가 레이아웃을 벗어나는 문제를 해결하는 것이 핵심이었으며, 사용자 경험을 유지하면서도 다국어 콘텐츠가 자연스럽게 표시될 수 있도록 보수 작업을 진행했습니다.",
    projectExecution: {
      approach:
        "드리븐 프로젝트에서는 HTML, jQuery, CSS를 활용하여 다국어 번역 작업을 성공적으로 수행했습니다. 번역으로 인해 발생한 UX/UI의 문제를 수정하여 사용자 경험을 개선했습니다.",
      execution:
        "화면 요소들이 번역된 텍스트에 맞춰 자연스럽게 확장될 수 있도록 CSS를 조정하고, JavaScript를 활용하여 일부 UI 요소를 동적으로 변경할 수 있도록 수정했습니다. 번역 적용 후에도 원본 UI와의 일관성을 유지하기 위해 디버깅을 진행하고, 다양한 해상도에서 테스트하여 다국어 지원이 정상적으로 이루어지는지 확인했습니다.",
      challenges:
        "타인이 작성한 코드로 이루어진 프로젝트였기 때문에 코드 구조를 빠르게 이해하고 분석하는 것이 어려웠습니다. 또한, 하드코딩된 값들이 많아 유지보수가 어려운 환경이었으며, 기존 스타일과 충돌 없이 번역본을 적용하는 과정에서 예상치 못한 문제가 발생하기도 했습니다. 이를 해결하기 위해 개발자 도구를 활용하여 문제를 추적하고, 기획서와 실제 UI를 비교하며 하나씩 수정해 나갔습니다.",
    },
  },
  {
    id: 8,
    tags: ["Professional", "Web", "Next.js", "i18n"],
    name: "BIZA SWAP",
    serviceArea: "Client Page",
    description:
      "비자스왑은 암호화폐의 분산형 거래소로 사용자 간의 직접 거래를 지원하여 빠르고 안전한 자산 교환을 가능하게 하는 플랫폼입니다.",
    image: require("src/assets/thumbnail/biza.png"),
    modalImage: require("src/assets/modal/biza.png"),
    client: "AMAXG",
    service: "Web Development",
    stacks: ["Next.js", "i18n", "Scss"],
    webSite: "https://amaxg.bizauto.io/",
    personnel: 1,
    aboutProject:
      "BIZA SWAP은 사용자 간 암호화폐 거래를 지원하는 분산형 거래소로, 빠르고 안전한 거래를 가능하게 하는 플랫폼입니다. 사용자는 비트코인, 이더리움과 같은 다양한 암호화폐를 빠르게 거래할 수 있으며, 최신 블록체인 기술을 통해 보안성이 강화되었습니다. 또한, 사용자 친화적인 인터페이스와 실시간 거래 데이터를 제공하여 사용자가 손쉽게 거래를 수행할 수 있도록 설계되었습니다.",
    mainTasks: [
      { label: "웹 퍼블리싱", program: "Scss" },
      { label: "API 연동", program: "Axios" },
      { label: "프론트 개발", program: "Next" },
      { label: "다국어지원", program: "React-i18next" },
    ],
    publicAvailability: "운영확인불가",
    developmentPeriod: ["2023.06.02 ~ 2023.08.01"],
    repositories: ["Single Repository"],
    goalOfProject:
      "BIZA SWAP 프로젝트는 암호화폐와 관련된 금전 거래를 지원하는 플랫폼으로, 데이터의 정확성과 보안을 극대화하는 것이 핵심 목표였습니다. 특히 글로벌 사용자들이 쉽게 접근할 수 있도록 다국어 지원을 포함하며, 이를 통해 사용자의 편의성과 국제적 확장성을 동시에 추구했습니다. 또한 사용자들이 복잡한 프로세스를 최소한의 절차로 안전하게 처리할 수 있도록 UI와 UX 디자인에 중점을 두었습니다.",
    projectExecution: {
      approach:
        "퍼블리싱부터 프론트엔드까지 전반적으로 참여하며 디자인 시스템을 바탕으로 컴포넌트를 일관되게 구성했습니다.초기 구조 설계부터 컴포넌트 분리, API 연동 등 전반적인 개발 흐름을 혼자서 주도적으로 진행했습니다.모바일 중심의 UX를 고려해 반응형 대응을 철저히 했고, 사용자의 행동 흐름에 맞춘 화면 배치와 인터랙션을 신경 썼습니다.정산, 환전, 포인트 관리 등 다양한 기능을 통합하면서도 각 기능이 명확하게 분리되도록 구조화했습니다.프로젝트 특성상 민감한 데이터가 많아, UI에서도 이를 안정적으로 보여줄 수 있는 처리와 피드백 방식에 신경을 썼습니다.",
      execution:
        " 암호화폐 거래의 안전성을 확보하기 위해 프론트엔드에서 유효성 검사를 철저히 진행했습니다. 다국어 번역을 통해 글로벌 사용자층을 겨냥하고, 컴포넌트화를 통해 개발 속도를 높였습니다. 이러한 전략은 혼자 작업하는 과정에서도 효율성을 극대화하는 데 기여했습니다.",
      challenges:
        " 개발 일정에 맞춰 작업 속도를 조절하는 것이 어려웠고, 다국어 번역 작업이 추가되어 작업 속도가 더뎠습니다. 특히, 암호화폐의 민감한 특성으로 인해 보안 문제에 대한 중압감을 느끼며, 규정을 준수하는 데 많은 노력이 필요했습니다. 혼자서 모든 작업을 진행하다 보니 시간 관리와 우선순위 설정이 큰 도전이었습니다.",
    },
  },
];
