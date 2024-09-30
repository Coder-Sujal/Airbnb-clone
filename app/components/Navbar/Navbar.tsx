import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import StaysAndExp from "./StaysAndExp";
import UserMenu from "../UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-5 border-b-[1px]">
        <Container>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row justify-between  items-center md:gap-0 w-full">
              <Logo />
              <UserMenu />
            </div>
              <div className="min-[1082px]:w-2/3 md:w-full sm:w-full w-full">
                <Search />
              </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
