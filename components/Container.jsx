import { motion } from "framer-motion";

export const Container = ({ children, ...rest }) => {
  return (
    <motion.div {...rest} className="mx-auto h-full w-full max-w-7xl px-4">
      {children}
    </motion.div>
  );
};
