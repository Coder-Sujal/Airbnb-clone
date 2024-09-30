"use client";
import { useCallback, useState } from "react";
import { ImSphere } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import Avatar from "./Navbar/Avatar";
import MenuItem from "./Navbar/MenuItem";

const UserMenu = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="flex flex-row items-center justify-between gap-6">
      <button className="font-semibold py-2 px-3 rounded-full text-md text-center hover:bg-stone-200 transition-colors hidden md:block">
        Airbnb your home
      </button>
      <div className="cursor-pointer hidden md:block">
        <ImSphere size={20} />
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-row items-center justify-between gap-5 border-[1px] border-gray-300 px-3 py-2 rounded-full hover:shadow-md transition">
          <div
            className="menu-icon cursor-pointer flex flex-row items-center justify-between gap-4"
            onClick={toggleOpen}
          >
            <MdOutlineMenu size={15} />
            <div className="hidden md:block">
              <Avatar />
            </div>
          </div>
        </div>
      </div>
      {isopen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-6 top-20 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
