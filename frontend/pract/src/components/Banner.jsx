import Link from "next/link";
import React from "react";
import { FiArrowRight, FiX, FiArrowRightCircle } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="p-4">
      {/* banner 1 */}
      <div className=" bg-gray-800  grid  grid-cols-1 md:grid-cols-5  gap-4 justify-center items-center rounded-lg  ">
        <div className="col-span-3 bg-gray h-[60px] ml-1 bg-[#fca4a4] flex flex-col justify-center items-center rounded-lg ">
          <p>Black Friday Sale</p>
          <span className="text-red-600 ">
            – Up to 50% off on fashion items!
          </span>
        </div>

        <div className="col-span-1 flex items-center justify-center p-4">
          <span className="flex items-center justify-center gap-2 p-2 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-all cursor-pointer">
            Get Now <FiArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* banner 2 */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6  p-6 mt-12 border-gray-800 w-full bg-gray-300 rounded justify-center items-center">
        <div className="relative col-span-2">
          <img
            src="https://picsum.photos/900"
            className="w-full h-full object-cover rounded-md "
          />
          <div className="absolute inset-0 bg-black/70 rounded-md text-white text-4xl font-bold flex items-center justify-center ">
            Black Friday{" "}
            <span className="text-red-500 font-extralight">50% Off </span>
          </div>
        </div>
        <div className="col-span-4 ">
          <h4 className="mb-2 text-2xl font-semibold text-blue-gray-900 ">
            Lyft launching cross-platform service this week
          </h4>
          <p className="mb-8 text-base text-gray-700">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story.
          </p>
          <Link href="" className="inline-block">
            <button className="flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase text-red-500 hover:bg-pink-500/10 active:bg-pink-500/30 rounded-lg cursor-pointer">
              Buy Now <HiOutlineArrowNarrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
