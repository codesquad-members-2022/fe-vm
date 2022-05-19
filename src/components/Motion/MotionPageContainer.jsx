import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "helpers/animation";

const MotionPageContainer = ({ children, className, translateX }) => {
  return (
    <motion.div
      className={className}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants(translateX)}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default MotionPageContainer;
