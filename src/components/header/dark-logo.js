import Link from "next/link";
import Image from "next/image";

function DarkLogo() {
  return (
    <Link href="/">
      <Image src="/images/logo/logo-2.png" alt="Logo" width={70} height={70} />
    </Link>
  );
}

export default DarkLogo;
