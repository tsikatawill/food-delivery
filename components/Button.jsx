import { click } from "../animations";
import { motion } from "framer-motion";

export const Button = ({
  children,
  bg = "primary",
  rounded = false,
  ...rest
}) => {
  const background =
    bg === "primary"
      ? "bg-orange-500 border-transparent text-white hover:bg-orange-600"
      : "bg-none border-orange-500 hover:border-transparent sm:border-white text-orange-500 sm:text-white hover:bg-slate-100 hover:text-orange-500";
  const roundness = rounded
    ? "rounded-l-full rounded-r-full"
    : "rounded-l-lg rounded-r-lg";
  return (
    <motion.button
      {...rest}
      variants={click}
      initial="initial"
      whileTap="animate"
      className={`h-16 min-w-[230px] border text-xl font-bold transition-colors duration-150 ease-in ${background} ${roundness}`}
    >
      {children}
    </motion.button>
  );
};
