import React from "react";
import styles from "style/_common.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Border({
  initial,
  animate,
  style,
  direction = "width",
}) {
  const animationDirection = direction === "width";

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...(animationDirection
          ? { scaleX: 0, transformOrigin: "left" }
          : { scaleY: 0, transformOrigin: "top" }),
        ...initial,
      }}
      animate={{
        opacity: 1,
        ...(animationDirection ? { scaleX: 1 } : { scaleY: 1 }),
        transition: { duration: 2 },
        ...animate,
      }}
      style={style}
      className={classNames({
        [styles.border]: direction === "width",
        [styles.border_length]: direction === "length",
      })}
      variants={cardVariants}
    />
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
