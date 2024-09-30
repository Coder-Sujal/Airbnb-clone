import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full shadow-sm rounded-full border-[1px] py-3 hover:shadow-md transition gap-0">
      <div className="flex flex-col md:items-center items-start text-sm md:pl-6 pl-8 cursor-pointer">
        <div className="font-bold">Where</div>
        <div className="text-gray-500 font-semibold">Search destinations</div>
      </div>
      <div className="items-center text-sm border-x-[1px] px-20 hidden md:block cursor-pointer max-[850px]:px-10 min-[1091px]:px-10 min-[1400px]:px-20">
        <div className="flex flex-col items-center">
          <div className="hidden sm:block font-bold">Check In</div>
          <div className="text-gray-500 font-semibold">Add Dates</div>
        </div>
      </div>
      <div className="text-sm border-r-[1px] pr-20 hidden md:block cursor-pointer max-[850px]:pr-10 min-[1091px]:pr-10 min-[1400px]:pr-20">
        <div className="flex flex-col items-center">
          <div className="hidden sm:block font-bold md:">Check Out</div>
          <div className="text-gray-500 font-semibold">Add Dates</div>
        </div>
      </div>
      <div className="text-sm md:pr-2 hidden md:block cursor-pointer max-[850px]:px-5 min-[1091px]:pr-10 min-[1400px]:pr-20">
        <div className="flex flex-col items-center">
          <div className="hidden sm:block font-bold px-2">Who?</div>
          <div className="text-gray-500 font-semibold">Add Guests</div>
        </div>
      </div>
      <div className="pr-3 cursor-pointer">
        <div className="bg-rose-500 rounded-full text-white p-3 transition hover:bg-rose-600">
          <BiSearch size={25} />
        </div>
      </div>
    </div>
  );
};

export default Search;
