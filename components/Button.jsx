import { click } from "../animations";
import { motion } from "framer-motion";

export const Button = ({
  children,
  bg = "primary",
  rounded = "full",
  ...rest
}) => {
  const background =
    bg === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "bg-none border-white hover:bg-white hover:text-orange-500";
  const roundness =
    rounded === "full"
      ? "rounded-l-full rounded-r-full"
      : "rounded-l-lg rounded-r-lg";
  return (
    <motion.button
      {...rest}
      variants={click}
      initial="initial"
      whileTap="animate"
      className={`h-16 min-w-[230px] border border-transparent text-2xl font-bold transition-all duration-150 ${background} ${roundness}`}
    >
      {children}
    </motion.button>
  );
};
