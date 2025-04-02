import React, { useRef } from "react";
import styles from "style/_common.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Border from "./Border";

export default function SectionContainer({
  children,
  index,
  progress,
  currentIndex,
}) {
  return (
    <motion.section
      className={styles.section_container}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: index === currentIndex ? 1 : 0.6, // 완전히 사라지지 않게 설정
        y: index === currentIndex ? 0 : index < currentIndex ? -50 : 50, // 스크롤 방향 반영
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
    // <motion.section
    //   className={styles.section_container}
    //   initial={{ y: '100%' }} // 처음엔 아래에 위치
    //   whileInView={{ y: 0 }} // 화면에 보이면 원래 위치로 올라옴
    //   transition={{ duration: 1, ease: 'easeOut' }}
    //   viewport={{ once: false, amount: 0.8 }} // 80% 보이면 실행
    //   style={{ zIndex: 10 - index }} // 뒤쪽 섹션이 위로 올라오도록 zIndex
    //   // // initial={{ opacity: 0 }}
    //   // viewport={{ amount: 0.8 }}
    //   // variants={cardVariants}
    // >
    //   <motion.header
    //     className={styles.header_wrapper}
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
    //     variants={cardVariants}
    //   >
    //     <a href="/resume.pdf" target="_blank">
    //       resume
    //     </a>
    //     <a href="/report.pdf" target="_blank">
    //       working report
    //     </a>
    //     <a href="https://github.com/woojungyang" target="_blank" rel="noreferrer">
    //       github
    //     </a>
    //     <div className={styles.last_border} />
    //   </motion.header>
    //   <div className={styles.top_border_wrap}>
    //     <motion.span
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1, delay: 4, duration: 1, ease: 'easeInOut' }}
    //     >
    //       woojungyang
    //     </motion.span>
    //     <Border animate={{ delay: 0.6 }} />
    //   </div>
    //   {children}
    //   {/* <Border
    //     style={{ bottom: 60 }}
    //     initial={{ transformOrigin: 'right' }}
    //     animate={{ delay: 0.5 }}
    //   /> */}
    // </motion.section>
    // <motion.section
    //   className={styles.section_container}
    //   initial={{ opacity: 0, scaleY: 0, transformOrigin: 'bottom' }}
    //   animate={currentIndex == index ? { opacity: 1, scaleY: 1 } : {}}
    //   // animate={{ opacity: 1, scaleY: 1 }}

    //   transition={{ duration: 1, ease: 'easeOut' }}
    //   viewport={{ once: false, amount: 0.8 }}
    //   style={{ zIndex: 10 - index }}
    // >
    //   {children}
    // </motion.section>
  );
}

const cardVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

/* 
<motion.header
        className={styles.header_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        variants={cardVariants}
        viewport={{ once: false, amount: 0.8 }}
      >
        <a href="/resume.pdf" target="_blank">
          resume
        </a>
        <a href="/report.pdf" target="_blank">
          working report
        </a>
        <a href="https://github.com/woojungyang" target="_blank" rel="noreferrer">
          github
        </a>
        <div className={styles.last_border} />
      </motion.header>
      <div className={styles.top_border_wrap}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 4, duration: 1, ease: 'easeInOut' }}
        >
          woojungyang1113@gmail.com
        </motion.span>
        <Border animate={{ delay: 0.6 }} />
      </div>
*/
