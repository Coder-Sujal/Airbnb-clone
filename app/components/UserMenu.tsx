'Use Client'
import React from "react";
import { ImSphere } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const UserMenu = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-6">
      <button className="font-semibold py-2 px-3 rounded-full text-md text-center hover:bg-stone-200 transition-colors hidden md:block">
        Airbnb your home
      </button>
      <div className="cursor-pointer hidden md:block">
        <ImSphere size={20} />
      </div>
      <div className="hidden sm :block">
        <div className="flex flex-row items-center justify-between gap-5 border-[1px] border-gray-300 px-3 py-2 rounded-full">
          <div className="menu-icon cursor-pointer ">
            <MdOutlineMenu />
          </div>
          <div className="bg-gray-600 text-white p-2 rounded-full cursor-pointer">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
