import Link from "next/link";
import { HTMLAttributes } from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/contact", name: "contact" },
];

type Props = {
  containerStyles: HTMLAttributes<Navigator>["className"];
  linkStyles: string;
  underlineStyles: string;
};
const Nav = ({ containerStyles, linkStyles, underlineStyles }: Props) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
