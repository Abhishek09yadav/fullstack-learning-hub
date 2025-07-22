import Image from "next/image";
import React from "react";

// A simple SVG for the Plus icon
const PlusIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
  </svg>
);

// A simple SVG for the Hulu logo
const HuluLogo = ({ className }) => (
  <Image width={120} className='rounded-md h-20' height={90} src="/img/hulu/logo.jpg" />
);

// A simple SVG for the Disney+ logo
const DisneyPlusLogo = ({ className }) => (
  <Image
    width={120}
    height={90}
    className="rounded-md object-cover"
    src="/img/hulu/disney.png"
  />
);

// A simple SVG for the HBO Max logo
const HboMaxLogo = ({ className }) => (
  <Image
    width={120}
    height={90}
    className="rounded-md object-cover"
    src="/img/hulu/hbo.png"
  />
);

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/hulu/poster.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="px-4 sm:px-8 md:px-12 lg:px-24 py-6 flex justify-between items-center">
          <HuluLogo className="h-7 text-white" />
          <a
            href="#"
            className="text-xs sm:text-sm font-bold tracking-widest text-gray-300 hover:text-white transition"
          >
            LOG IN
          </a>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {/* Offer Card 1 */}
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <p className="text-xs font-semibold text-gray-300 tracking-wider">
                DISNEY+ HULU BUNDLE BASIC
              </p>
              <div className="flex items-center justify-center space-x-2">
                <DisneyPlusLogo className="h-8 text-white" />
                <PlusIcon className="h-4 w-4 text-white" />
                <HuluLogo className="h-7 text-white" />
              </div>
              <p className="text-xl font-bold">
                Both with ads, for
                <br />
                $10.99/month.
              </p>
              <button className="w-full bg-[#1ce783] text-black font-bold tracking-wider py-4 rounded-md hover:bg-opacity-90 transition">
                GET THEM BOTH
              </button>
              <a
                href="#"
                className="text-gray-400 text-xs underline hover:text-white"
              >
                Terms apply
              </a>
            </div>

            {/* Offer Card 2 */}
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <p className="text-xs font-semibold text-gray-300 tracking-wider">
                DISNEY+, HULU, HBO MAX
              </p>
              <div className="flex items-center justify-center space-x-2">
                <DisneyPlusLogo className="h-8 text-white" />
                <PlusIcon className="h-4 w-4 text-white" />
                <HuluLogo className="h-7 text-white" />
                <PlusIcon className="h-4 w-4 text-white" />
                <HboMaxLogo className="h-5 text-white" />
              </div>
              <p className="text-xl font-bold">
                Plans starting at
                <br />
                $16.99/month.
              </p>
              <button className="w-full bg-[#1ce783] text-black font-bold tracking-wider py-4 rounded-md hover:bg-opacity-90 transition">
                LEARN MORE
              </button>
              <a
                href="#"
                className="text-gray-400 text-xs underline hover:text-white"
              >
                Terms apply
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
