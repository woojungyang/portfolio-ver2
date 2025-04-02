import React, { useRef } from 'react';
import styles from 'style/_common.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Card({ bg, progress, range, children, index }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(progress, range, [1, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          // top: `calc(-10% + ${index * 25}px)`,
          opacity: scrollYProgress,
        }}
        className={styles.card}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

/* 
 <div style={{ width: '40%' }}> {bg}</div>
        <div className={styles.imageContainer}>
          <motion.div style={{ scale: imageScale }} className={styles.inner}>
            <img src={require('assets/img/title.png')} alt="테스트" />
          </motion.div>
        </div>
*/
