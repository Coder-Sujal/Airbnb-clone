"use client";
import React, { useCallback, useState } from "react";
import { ImSphere } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import Avatar from "./Navbar/Avatar";
import MenuItem from "./Navbar/MenuItem";
import useRegisterModal from "../hooks/useRegisterModal";
import useLoginModal from "../hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "../types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isopen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

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
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-auto bg-white overflow-hidden right-6 top-20 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={()=>{}} label="My trips" />
                <MenuItem onClick={()=>{}} label="My favourites" />
                <MenuItem onClick={()=>{}} label="My reservations" />
                <MenuItem onClick={()=>{}} label="My properties" />
                <MenuItem onClick={()=>{}} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={()=>signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
