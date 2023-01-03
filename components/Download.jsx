import { popUp, slideY } from "../animations";

import { Button } from "./Button";
import { Container } from "./Container";
import { motion } from "framer-motion";

export const Download = () => {
  return (
    <section
      id="download"
      className="top h-[564px] bg-slate-900 bg-cover bg-no-repeat py-10 text-white sm:h-[516px] sm:bg-[url(/images/bg-download.jpg)] sm:text-white"
    >
      <Container
        variants={slideY("top")}
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.3,
          ease: [1, 0.5, 0.71, 1],
        }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center sm:text-left">
          <motion.h2
            variants={popUp}
            className="text-[40px] font-bold leading-[57px]"
          >
            Download the app now
          </motion.h2>
          <motion.p className="" variants={popUp}>
            Available on your favorite store. Start your premium experience now
          </motion.p>
          <motion.div
            variants={popUp}
            className="mt-5 flex flex-col gap-4 sm:flex-row"
          >
            <Button>Play store</Button>
            <Button bg="transparent">App store</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
