"use client"
import { PlayCircle } from "lucide-react"; // Icon is no longer used on hover, but kept for potential 

export default function Shows() {
  const cardData = [
    {
      label: "Past & Current Seasons",
      title: "TV Shows",
      imageUrl: "/img/hulu/original1.jpg",
      logos: ["FAMILY GUY", "FOX"],
      isFeatured: false,
    },
    {
      label: "New & Classic",
      title: "Movies",
      imageUrl: "/img/hulu/original2.jpg",
      logos: ["PLANET OF THE APES TRILOGY", "20th Century"],
      isFeatured: false,
    },
    {
      label: "Groundbreaking",
      title: "Hulu Originals",
      imageUrl: "/img/hulu/original3.jpg",
      logos: ["SHOGUN", "FX"],
      isFeatured: false,
    },
    {
      label: "Add-on",
      title: "Premiums",
      imageUrl: "/img/hulu/original4.jpg",
      logos: ["HOUSE OF THE DRAGON", "HBO"],
      isFeatured: false,
    },
  ];

  return (
    <div className="bg-[#111827] min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <header className="text-center mb-10">
          <span className="text-green-400 font-bold text-sm tracking-wider">
            INCLUDED IN ALL PLANS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            All The TV You Love
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Watch full seasons of exclusive streaming series, current-season
            episodes, hit movies, Hulu Originals, kids shows, and more.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <ContentCard key={index} {...card} />
            ))}
          </div>
        </main>

        <footer className="text-right mt-4">
          <p className="text-gray-500 text-xs">
            Premium add-ons available for an additional cost.
          </p>
        </footer>
      </div>
    </div>
  );
}

// Reusable Card Component
function ContentCard({ label, title, imageUrl, logos, isFeatured }) {
  return (
    <div
      className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out ${
        isFeatured ? "ring-3 ring-gray-400" : "ring-4 ring-transparent"
      } hover:ring-gray-400 hover:bg-black/60`}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x800/111827/ffffff?text=Image+Error";
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-between h-full p-5 text-white min-h-[400px] md:min-h-[450px]">
        <div>
          <p
            className={`font-semibold ${
              isFeatured ? "text-green-400" : "text-gray-300"
            }`}
          >
            {label}
          </p>
          <h3 className="text-2xl font-bold mt-1">{title}</h3>
        </div>

        <div className="flex items-center space-x-4 opacity-70">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="text-xs font-semibold tracking-wider uppercase"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
