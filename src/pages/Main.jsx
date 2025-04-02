import React, { useEffect, useMemo, useRef, useState } from "react";

import { motion, transform, useScroll, useTransform } from "framer-motion";

import styled from "styled-components";
import { flex, media } from "style/mixin";

import { DeviceSize } from "models/Device";

import NavBar from "components/common/NavBar";
import styles from "style/_common.module.scss";
import SectionContainer from "components/common/SectionContainer";
import Border from "components/common/Border";
import Card from "components/common/Card";
import Lenis from "@studio-freight/lenis";

const Home = () => {
  const totalCards = 2;
  const titleBorder = [
    { style: { left: "40%" } },
    { style: { left: "60%" } },
    {
      style: { bottom: "5%" },
      initial: { transformOrigin: "right" },
      animate: { scaleX: 0.6 },
      direction: "width",
    },
  ];
  const aboutBorder = [
    { style: { left: "20%" } },
    { style: { left: "90%" } },
    {
      style: { bottom: "5%" },
      initial: { transformOrigin: "right" },
      direction: "width",
    },
  ];
  const motionInitial = { opacity: 0 };
  const motionAnimate = { opacity: 1 };
  const motionTransition = { duration: 1, ease: "easeInOut" };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offsets: ["start start", "end end"],
  });
  const adjustedProgress = useTransform(
    scrollYProgress,
    [0, 1], // 원래 범위
    [0, 1], // 변환 범위 확인
  );

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [index, setIndex] = useState(0);

  const test = useMemo(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      return value;
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  console.log({ test });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main ref={container} className={styles.main}>
      <motion.header
        className={styles.header_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <a href="/resume.pdf" target="_blank">
          resume
        </a>
        <a href="/report.pdf" target="_blank">
          working report
        </a>
        <a
          href="https://github.com/woojungyang"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <div className={styles.last_border} />
        <div className={styles.top_border_wrap}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 4, duration: 1, ease: "easeInOut" }}
          >
            woojungyang1113@gmail.com
          </motion.span>
          <Border animate={{ delay: 0.6 }} />
        </div>
      </motion.header>
      <Card progress={scrollYProgress} range={[0 * 0.33, 1]} index={0}>
        <motion.article
          className={styles.title_article}
          initial={motionInitial}
          animate={motionAnimate}
          transition={motionTransition}
        >
          {titleBorder.map((e) => (
            <Border
              style={e.style}
              animate={{ delay: 1, ...e?.animate }}
              initial={e?.initial}
              direction={e?.direction ?? "length"}
            />
          ))}

          <motion.div
            className={styles.title_wrap}
            initial={motionInitial}
            animate={motionAnimate}
            transition={{ ...motionTransition, delay: 0.3 }}
          >
            <img
              src={require("assets/img/title.png")}
              className={styles.main_image}
              alt="메인배경이미지"
            />
            <motion.h1
              className={styles.title}
              initial={motionInitial}
              animate={motionAnimate}
              transition={{ ...motionTransition, delay: 0.6 }}
            >
              PORTFOLIO
            </motion.h1>
          </motion.div>
        </motion.article>
      </Card>
      <Card progress={scrollYProgress} range={[1 * 0.33, 1]} index={1}>
        <motion.article
          className={styles.about_article}
          initial={motionInitial}
          animate={motionAnimate}
          transition={motionTransition}
        >
          {aboutBorder.map((e) => (
            <Border
              style={e.style}
              animate={{
                ...motionAnimate,
                // scale: imageScale,
              }}
              initial={e?.initial}
              direction={e?.direction ?? "length"}
            />
          ))}

          <motion.div
            className={styles.about_wrap}
            initial={motionInitial}
            animate={motionAnimate}
            transition={{ ...motionTransition, delay: 0.3 }}
          >
            <motion.h1
              className={styles.title}
              initial={motionInitial}
              animate={motionAnimate}
              transition={{ ...motionTransition, delay: 0.6 }}
            >
              ABOUT
              <br />
              ME
            </motion.h1>

            <motion.div
              className={styles.about_description_wrap}
              initial={motionInitial}
              animate={motionAnimate}
              transition={{ ...motionTransition, delay: 1 }}
            >
              <h3 className={styles.subtitle}>
                Values &
                <br />
                Mission
              </h3>
              <p className={styles.description}>
                저는 신뢰할 수 있는 코드를 작성하고, 사용자 중심의 경험을
                설계하는 프론트엔드 개발자입니다. 프론트엔드 개발은 단순히
                화면을 구현하는 것이 아니라, 사용자가 더 쉽고 빠르게 서비스를
                이용할 수 있도록 만드는 일이라 생각합니다. 이를 위해 클린 코드,
                성능 최적화, 그리고 유지보수 가능한 구조를 중요하게 여기며
                개발합니다. 다양한 도메인의 프로젝트를 통해 필터링 시스템,
                대시보드, 다국어 지원 등 사용자 경험을 개선하는 기능을 개발하며,
                기획자, 디자이너, 백엔드 개발자와의 협업을 통해 최적의 솔루션을
                찾는 데 집중해왔습니다. 빠르게 변화하는 기술 환경 속에서 성능
                최적화, 디자인 시스템 구축, 웹 접근성 개선 등을 통해 더 나은
                사용자 경험을 제공하는 방법을 지속적으로 배우고 있습니다.
                궁극적으로는 사용자와 팀, 그리고 제품의 가치를 극대화하는
                개발자가 되고자 합니다.
              </p>
              <img
                src={require("assets/img/about2.png")}
                className={styles.main_image}
                alt="소개페이지"
              />
            </motion.div>
          </motion.div>
        </motion.article>
      </Card>

      {/*  {[{ bg: 'red' }, { bg: 'blue' }, { bg: 'brown' }].map((e, index) => {
        const targetScale = 1;
        return (
          <Card
            key={e.bg}
            i={index}
            range={[index * 0.33, 1]}
            progress={scrollYProgress}
            targetScale={targetScale}
            {...e}
          />
        );
      })} */}
    </main>
    // <main ref={outerDivRef} className={styles.main_container}>
    //   <SectionContainer progress={scrollYProgress} index={0} currentIndex={currentIndex}>
    //     1
    //   </SectionContainer>
    //   <SectionContainer progress={scrollYProgress} index={1} currentIndex={currentIndex}>
    //     2
    //   </SectionContainer>
    //   <SectionContainer progress={scrollYProgress} index={2} currentIndex={currentIndex}>
    //     3
    //   </SectionContainer>
    // </main>
    // <main ref={outerDivRef} className={styles.main_container}>
    //   <SectionContainer index={1}>
    //     <motion.article
    //       className={styles.title_article}
    //       initial={motionInitial}
    //       animate={motionAnimate}
    //       transition={motionTransition}
    //     >
    //       <Border
    //         style={{ left: '30%' }}
    //         // initial={{ transformOrigin: 'top' }}
    //         // animate={{ delay: 0.5 }}
    //         direction="length"
    //       />
    //       <motion.div
    //         className={styles.title_wrap}
    //         initial={motionInitial}
    //         animate={motionAnimate}
    //         transition={{ ...motionTransition, delay: 0.3 }}
    //       >
    //         <img
    //           src={require('assets/img/title.png')}
    //           className={styles.main_image}
    //           alt="메인배경이미지"
    //         />
    //         <motion.h1
    //           className={styles.title}
    //           initial={motionInitial}
    //           animate={motionAnimate}
    //           transition={{ ...motionTransition, delay: 0.6 }}
    //         >
    //           PORTFOLIO
    //         </motion.h1>
    //       </motion.div>
    //     </motion.article>
    //   </SectionContainer>
    //   <SectionContainer index={2}>2</SectionContainer>
    //   <SectionContainer index={3}>
    //     <footer className={styles.footer_wrapper}>
    //       woojungyang ⓒ {new Date().getFullYear()} All rights reserved.
    //     </footer>
    //   </SectionContainer>
    // </main>
  );
};

const titlePageBorder = [{}];

const MainContainer = styled.main`
  position: relative;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: #212121;
  /* font-family: 'DM Serif Display', serif; */
  font-family: "Gaegu", sans-serif;
  background-color: #eae5d9;
  .section-wrapper {
    ${flex({ justify: "center" })};
    padding: 20px;
  }
  .nav-wrapper {
    width: 100%;

    max-width: var(--size-max-width);
    position: fixed;
    top: 0;

    z-index: 999;
    ${flex({ justify: "flex-start" })};
    gap: 60px;
    padding: 0px 40px;
    ul {
      font-weight: 500;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;
const ArticleContainer = styled(motion.article)`
  height: 100vh;
  width: 100%;
  position: relative;
  scroll-snap-align: center;
  max-width: var(--size-max-width);
  border: 1px solid blue;
`;
const FirstSection = styled.div`
  .main-title {
    color: #ed7f15;
    position: absolute;
    font-weight: 600;
    right: 0;
    writing-mode: vertical-rl;
    font-size: 18vh;
  }

  .left-side-wrap {
    ${flex({ justify: "space-between", align: "flex-start" })};
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    flex-grow: 1;

    .top-line {
      padding-top: 20px;
      ${flex({ justify: "flex-start" })};
      gap: 20px;
      font-size: 14px;
      width: 100%;
      .line {
        width: 60%;
        height: 1px;
        background-color: #9a9a9a;
      }
    }
    .description {
      font-family: "Gowun Dodum", sans-serif;
      padding-bottom: 20px;
      max-width: 400px;

      padding-left: 40px;

      opacity: 0;
      animation: fadeInAnimation 1.5s ease forwards;

      .name {
        color: #fd9e38;
        font-weight: 700;

        font-size: 2.4vw;
        max-width: 400px;
      }
      .position {
        color: #fd9e38;
        margin: 10px 0px;
        font-size: 1vw;
        font-weight: bolder;
      }
      p {
        font-size: 14px;
        line-height: 170%;
        word-break: break-all;
        text-align: justify;
        font-weight: 600;
        letter-spacing: -1px;
      }
    }
    @media (max-width: ${DeviceSize.Mobile}px) {
      .main-title {
        font-weight: 500;

        font-size: 15vh;
      }
      .left-side-wrap {
        .top-line {
          .line {
            display: none;
          }
        }
        .description {
          max-width: 80vw;
          padding: 20px 20px;

          .name {
            font-weight: 600;
            font-size: 9vw;
          }
          p {
            font-size: 10.5px;
          }
        }
      }
    }
  }
`;

const SecondSection = styled.div`
  padding: 40px;
  padding-top: 60px;
  padding-left: 20px;

  ${flex({ justify: "flex-start", align: "flex-start" })};
  height: 100vh;
  position: relative;
  gap: 8vw;
  .about-title {
    color: #ed7f15;
    font-weight: 600;
    line-height: 70%;
    font-size: 15vh;
  }
  .description-wrapper {
    max-width: 600px;
    height: 100%;
    ${flex({ justify: "space-between", align: "flex-start" })};
    flex-direction: column;
    .image-wrap {
      width: 80%;
    }
    .description {
      border: 1px solid red;
      padding-top: 10vh;
      column-count: 2;
      animation: fadeInAnimation 1.5s ease forwards;
      font-size: 13px;
      line-height: 170%;
      word-break: break-all;
      text-align: justify;
      font-weight: 500;
      letter-spacing: -1px;
      font-family: "Gowun Dodum", sans-serif;
      /* margin-bottom: 70px; */
    }
  }
  .side-line {
    position: absolute;
    height: calc(82vh - 250px);
    width: 2px;
    bottom: 40px;
    left: 0;
    /* left: 60px; */
    background-color: #ed7f15;
    transition: background-color 0.5s ease-in 0.3s;
  }
  .right-side {
    position: absolute;
    height: 100%;
    bottom: 0;
    right: 0;
    background-color: pink;
    a {
      display: block;
      writing-mode: vertical-rl;
    }
    br {
      height: 70vh;
      width: 20px;
    }
  }
`;

const ThirdSection = styled.div`
  position: relative;
  border: 1px solid pink;
  height: 100vh;
  width: 100%;

  .project-title {
    color: #ed7f15;
    font-weight: 600;
    line-height: 70%;
    font-size: 15vh;
    position: absolute;
    bottom: 100px;
    right: 0;
  }
`;

export default React.memo(Home);
