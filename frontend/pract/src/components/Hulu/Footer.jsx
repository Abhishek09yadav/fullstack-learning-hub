import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Data for the footer links, structured for easy mapping.
const footerSections = [
  {
    title: "BROWSE",
    links: [
      "Streaming Library",
      "Live TV",
      "Live News",
      "Live Sports",
      "TV Shows",
      "Movies",
      "Originals",
      "Networks",
      "Kids",
      "FX",
    ],
  },
  {
    title: "HELP",
    links: [
      "Account & Billing",
      "Plans & Pricing",
      "Supported Devices",
      "Accessibility",
    ],
  },
  {
    title: "ABOUT US",
    links: ["Shop Hulu", "Press", "Jobs", "Contact", "Guides | What to Watch"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-gray-700 font-sans">
      <div className="container mx-auto max-w-screen-xl px-6 py-12">
        {/* Top section with navigation links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Browse Section - takes more space */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-black tracking-wider text-sm mb-4">
              BROWSE
            </h3>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-3">
                {footerSections[0].links.slice(0, 5).map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-black transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {footerSections[0].links.slice(5).map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-black transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Help and About Us Sections */}
          {footerSections.slice(1).map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-bold text-black tracking-wider text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-black transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Placeholder for the Disney+ section from the image, can be populated similarly */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-1">
            {/* This column can be used for the Disney+ bundle links if needed */}
          </div>
        </div>

        {/* Separator and Social Icons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Bottom legal links */}
        <div className="mt-8 text-xs text-gray-500">
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            <span>&copy; 2024 Hulu, LLC</span>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              About Ads
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              Subscriber Agreement
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              Do Not Sell or Share My Personal Information
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              TV Parental Guidelines
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
