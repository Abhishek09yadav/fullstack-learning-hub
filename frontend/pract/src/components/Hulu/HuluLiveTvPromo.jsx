import React from "react";
import { FaTv } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";

export default function HuluLiveTvPromo() {
  return (
    <div className="min-h-[60vh] bg-black text-white flex flex-col items-center justify-center px-4 py-8 text-center">
      <p className="text-green-500 font-semibold mb-1 text-sm uppercase tracking-wide">
        Try Hulu (With Ads) + Live TV Free for 3 Days
      </p>

      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Watch Live TV From 100 Channels
      </h1>

      <p className="max-w-xl text-sm md:text-base mb-6">
        Get top national and local channels on Hulu (With Ads) + Live TV with
        your favorite live sports, news, and events - plus the entire Hulu
        streaming library. Includes access to Disney+ and ESPN+ with Unlimited
        DVR.
      </p>

      <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition">
        Start Your Free Trial
      </button>

      <p className="text-[10px] text-gray-400 mt-4 max-w-md">
        Hulu (With Ads) + Live TV plan $82.99/mo. after 3-day free trial (if
        any) unless canceled. Restrictions apply.{" "}
        <a href="#" className="underline text-white">
          See details.
        </a>
      </p>

      <a
        href="#"
        className="mt-3 inline-block text-xs text-white underline font-semibold hover:text-green-400"
      >
        View Channels In Your Area →
      </a>

      <div className="mt-6 flex gap-4 text-green-400 text-2xl">
        <FaTv />
        <MdLiveTv />
        <BsFillPlayFill />
      </div>
    </div>
  );
}
