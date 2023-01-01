import Link from "next/link";
import { motion } from "framer-motion";

export const NavLink = ({ name, path, variants, ...rest }) => {
  return (
    <Link href={path} passHref legacyBehavior>
      <motion.a variants={variants} {...rest} className="w-full">
        {name}
      </motion.a>
    </Link>
  );
};
