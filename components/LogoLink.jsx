import Image from "next/image";
import Link from "next/link";

export const LogoLink = () => {
  return (
    <Link href="/" className="h-full">
      <Image
        className="h-full w-auto"
        src="/images/logo.svg"
        width={206}
        height={100}
        alt="logo.svg"
      />
    </Link>
  );
};
