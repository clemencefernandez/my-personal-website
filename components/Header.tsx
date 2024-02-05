"use client";

import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {" "}
          <Logo />
        </div>
        <div className="flexitems-center gap-x-6">
          {/* nav */}
          <Nav
            containerStyles={"hidden xl:flex gap-x-8 items-center"}
            linkStyles={""}
            underlineStyles={""}
          />
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
