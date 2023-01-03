import { Button, Container } from "../components";
import { headerTop, popUp, slideY } from "../animations";

import Image from "next/image";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section>
      <div className="top h-fit bg-cover bg-no-repeat py-10 text-black sm:h-[600px] sm:bg-[url(/images/bg-hero.jpg)] sm:text-white">
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
              <Button rounded>Play store</Button>
              <Button rounded bg="transparent">
                App store
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      <motion.div
        variants={popUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.5, ease: [1, 0.5, 0.7, 1] }}
        className="bottom relative h-[600px] w-full bg-white p-10"
      >
        <div className="images absolute left-1/2 top-1/2 flex h-[500px] -translate-y-1/2 -translate-x-1/2 justify-center sm:-top-10 sm:translate-y-0  md:-top-20 lg:-top-32  ">
          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: [10, 0, 10] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
            className="left min-w-fit flex-shrink sm:flex-shrink-0"
          >
            <Tilt>
              <Image
                src="/images/phone-left.png"
                width={300}
                height={586}
                alt="left-phone.svg"
                className="phone-shadow"
              />
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: [10, 0, 10] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.4,
            }}
            className="right mt-10 min-w-fit flex-shrink sm:flex-shrink-0"
          >
            <Tilt>
              <Image
                src="/images/phone-right.svg"
                width={300}
                height={586}
                alt="right-phone.svg"
                className="phone-shadow"
              />
            </Tilt>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
