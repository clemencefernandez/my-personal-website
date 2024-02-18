"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // Ajoute l'événement
    window.addEventListener("scroll", handleScroll);

    // Retire l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "py-4 bg-white shadow-lg" : "py-6"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles={"hidden xl:flex gap-x-8 items-center"}
              linkStyles={"relative hover:text-primary transition-all"}
              underlineStyles={
                "absolute left-0 top-full h-[2px] bg-primary w-full"
              }
            />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
