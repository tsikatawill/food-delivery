import { Container, LogoLink } from "../components";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideY } from "../animations";

export const Footer = () => {
  const date = new Date();
  return (
    <motion.footer
      variants={slideY()}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 flex-grow-0 py-10"
      id="contact"
    >
      <Container>
        <div className="grid grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-3 sm:justify-items-start">
          <LogoLink />
          <div className="flex gap-4 place-self-center">
            <Link
              href="https://twitter.com/dev_willman"
              passHref
              legacyBehavior
            >
              <a target="_blank" referrerPolicy="noreferrer">
                <Image
                  src="/images/twitter.svg"
                  width={40}
                  height={40}
                  alt="twitter.svg"
                />
              </a>
            </Link>
            <Link href="https://facebook.com" passHref legacyBehavior>
              <a target="_blank" referrerPolicy="noreferrer">
                <Image
                  src="/images/twitter.svg"
                  width={40}
                  height={40}
                  alt="twitter.svg"
                />
              </a>
            </Link>
            <Link href="https://facebook.com" passHref legacyBehavior>
              <a target="_blank" referrerPolicy="noreferrer">
                <Image
                  src="/images/twitter.svg"
                  width={40}
                  height={40}
                  alt="twitter.svg"
                />
              </a>
            </Link>
          </div>
          <small className="place-self-center text-sm">
            Developed with 💖 by{" "}
            <Link
              href={"https://www.twitter.com/dev_willman"}
              legacyBehavior
              passHref
            >
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-blue-400"
              >
                @William M. Tsikata
              </a>
            </Link>{" "}
            {date.getFullYear()}
          </small>
        </div>
      </Container>
    </motion.footer>
  );
};
