import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="https://images.unsplash.com/photo-1714492171041-7a09350329ed?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={54}
        height={54}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;
