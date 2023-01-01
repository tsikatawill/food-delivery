import { Button, Container } from "../components";
import { headerTop, popUp, slideY } from "../animations";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section>
      <div className="top h-fit py-10 sm:h-[600px] sm:bg-[url(/images/bg-hero.jpg)]">
        <Container className="h-full">
          <motion.div
            variants={headerTop}
            initial="initial"
            whileInView="animate"
            className="flex h-full flex-col items-center gap-5 text-center"
          >
            <motion.p
              variants={slideY()}
              className="text-xl font-[700]  sm:text-2xl"
            >
              Food app
            </motion.p>
            <motion.p
              variants={popUp}
              className="max-w-4xl text-5xl font-[700] leading-[60px] sm:text-6xl sm:leading-[80px]"
            >
              Why stay hungry when you can order from Bella Onojie?
            </motion.p>
            <motion.p className="text-[24px]" variants={slideY("bottom")}>
              Download the Bella Onojie{"'"}s food app now on
            </motion.p>

            <motion.div
              className="mt-5 flex flex-col gap-4 sm:flex-row"
              variants={slideY("bottom")}
            >
              <Button>Playstore</Button>
              <Button bg="transparent">Appstore</Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      <Container>
        <div className="py-10"></div>
      </Container>
    </section>
  );
};
