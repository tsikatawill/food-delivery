import { Container, Row } from "../components";

import { motion } from "framer-motion";
import { slideY } from "../animations";

export const HowItWorks = () => {
  return (
    <section id="product">
      <Container>
        <motion.h3
          variants={slideY()}
          initial="initial"
          whileInView="animate"
          className="mx-auto mt-10 border-b-2 border-gray-300  py-10 text-center font-bold transition-colors duration-1000 sm:w-fit sm:border-t-2 sm:border-b-0 sm:px-10 lg:px-32"
        >
          How the app works
        </motion.h3>
        <Row
          title="Create an account"
          summary="Create/login to an existing account to get started"
          description="An account is created with your email and a desired password"
        />
        <Row
          reverse
          image="/images/phone-2.png"
          title="Explore varieties"
          summary="Shop for your favorites meal as e dey hot."
          description="Shop for your favorite meals or drinks and enjoy while doing it."
        />
        <Row
          image="/images/phone-3.png"
          title="Checkout"
          summary="When you done check out and get it delivered."
          description="When you done check out and get it delivered with ease."
        />
      </Container>
    </section>
  );
};
