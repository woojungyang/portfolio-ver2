import React, { useEffect, useRef, useState } from 'react';

import { motion, transform, useScroll } from 'framer-motion';

import styled from 'styled-components';
import { flex, media } from 'style/mixin';

import { DeviceSize } from 'models/Device';

import NavBar from 'components/common/NavBar';
import styles from 'style/_common.module.scss';
import SectionContainer from 'components/common/SectionContainer';
import Border from 'components/common/Border';

const Home = () => {
  const motionInitial = { opacity: 0 };
  const motionAnimate = { opacity: 1 };
  const motionTransition = { duration: 1, ease: 'easeInOut' };

  const pageHeight = window.innerHeight;
  const outerDivRef = useRef(null);
  const article1 = useRef(null);
  const article2 = useRef(null);
  const article3 = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: 'smooth' });
  }

  /*   useEffect(() => {
    const scrollHandler = e => {
      const { scrollTop } = outerDivRef.current;
      setCurrentIndex((scrollTop / pageHeight).toFixed(0));
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('scroll', scrollHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const { scrollYProgress } = useScroll(); */

  return (
    <main className={styles.main_container2}>
      {[1, 2, 3, 4].map(e => (
        <SectionContainer>{e}</SectionContainer>
      ))}
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
  font-family: 'Gaegu', sans-serif;
  background-color: #eae5d9;
  .section-wrapper {
    ${flex({ justify: 'center' })};
    padding: 20px;
  }
  .nav-wrapper {
    width: 100%;

    max-width: var(--size-max-width);
    position: fixed;
    top: 0;

    z-index: 999;
    ${flex({ justify: 'flex-start' })};
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
    ${flex({ justify: 'space-between', align: 'flex-start' })};
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    flex-grow: 1;

    .top-line {
      padding-top: 20px;
      ${flex({ justify: 'flex-start' })};
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
      font-family: 'Gowun Dodum', sans-serif;
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

  ${flex({ justify: 'flex-start', align: 'flex-start' })};
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
    ${flex({ justify: 'space-between', align: 'flex-start' })};
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
      font-family: 'Gowun Dodum', sans-serif;
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
