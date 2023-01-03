import { popUp, slideX, slideY } from "../animations";

import Image from "next/image";
import { motion } from "framer-motion";

export const Row = ({
  image = "/images/phone-1.png",
  title = "Create an account",
  summary = "Create/login to an existing account to get started",
  description = "An account is created with your email and a desired password",
  reverse = false,
}) => {
  return (
    <div className="col-start-1 row-start-2 grid grid-cols-1 items-center justify-items-center gap-4 py-10 sm:row-start-1 sm:grid-cols-2 sm:py-16">
      <motion.div
        variants={popUp}
        initial="initial"
        whileInView="animate"
        className={`left ${reverse ? "sm:col-start-2" : "sm:col-start-1"}`}
      >
        <Image
          className="phone-shadow h-[500px] w-auto"
          src={image}
          alt="phone.png"
          width={525}
          height={302}
        />
      </motion.div>

      <motion.div
        className={`right col-start-1  row-start-1 flex flex-col gap-4 p-10 text-center sm:text-left ${
          reverse ? "sm:col-start-1" : "sm:col-start-2"
        }`}
        variants={slideX()}
        whileInView="animate"
        initial="initial"
        transition={{
          duration: 0.2,
          staggerChildren: 0.2,
          when: "beforeChildren",
        }}
      >
        <motion.h3
          variants={slideY()}
          transition={{ duration: 0.2 }}
          className="font-bold text-orange-500"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={popUp}
          className="text-4xl  font-bold leading-[57px]"
        >
          {summary}
        </motion.p>
        <motion.p
          variants={slideY()}
          transition={{ duration: 0.2 }}
          className="leading-[38px]"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};
