import { motion } from "framer-motion";

import { centerVariants } from "src/constants";
export const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-y-3 text-center "
    >
    
      <p className="tex-lg font-medium text-primary-50">{title}</p>
      <h3 className="text-h3 text-gray-90">{subtitle}</h3>
    </motion.div>
  );
};
