import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const NavLink = ({ name, path, variants, ...rest }) => {
  const router = useRouter();

  return (
    <Link href={path} passHref legacyBehavior>
      <motion.a
        variants={variants}
        {...rest}
        className={`w-full ${
          router.asPath === path ? "text-orange-500" : "text-black"
        }`}
      >
        {name}
      </motion.a>
    </Link>
  );
};
