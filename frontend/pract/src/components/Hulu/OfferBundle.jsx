"use client"
import { Play } from "lucide-react"; 


const config = {
  logos: {
    src: "/img/hulu/disneyandhulu.png",
    alt: "Disney+, Hulu, and ESPN+ logos",
  },
  bundle: {
    name: "DISNEY+, HULU, ESPN+ BUNDLE BASIC",
    title: "Get Hulu, Disney+, and ESPN+, all with ads, for $16.99/mo.",
    detailsLink: "What's included?",
  },
  cta: {
    buttonText: "GET ALL THREE",
    termsLink: "Terms apply",
  },
};



// The self-contained banner component
function OfferBundle() {
  return (
    <div className="bg-[#0f1e2b] w-full font-extralight shadow-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Logos */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={config.logos.src}
            alt={config.logos.alt}
            className="h-8 md:h-10"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/200x40/FF0000/FFFFFF?text=Image+Failed";
            }}
          />
        </div>

        {/* Center Section: Offer Details */}
        <div className="flex-grow text-center md:text-left">
          <p className="font-bold text-sm text-[#1ce783] tracking-wider">
            {config.bundle.name}
          </p>
          <h2 className="text-white text-xl  mt-2">
            {config.bundle.title}
          </h2>
          <a
            href="#"
            className="text-white text-sm underline mt-3 inline-block hover:text-gray-300 transition-colors"
          >
            {config.bundle.detailsLink}
          </a>
        </div>

        {/* Right Section: Call to Action */}
        <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto">
          <button className="bg-[#1ce783] text-black font-bold w-full md:w-auto py-3 px-10 rounded-md hover:bg-[#17d173] transition-transform duration-200 hover:scale-105 shadow-lg">
            {config.cta.buttonText}
          </button>
          <a
            href="#"
            className="text-gray-400 text-xs underline mt-2 hover:text-white transition-colors"
          >
            {config.cta.termsLink}
          </a>
        </div>
      </div>
    </div>
  );
}
export default OfferBundle;
