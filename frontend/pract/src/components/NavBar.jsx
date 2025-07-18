"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Home, User, Code, Mail, FolderClosed } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: FolderClosed },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const handleClick = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray backdrop-blur-md border-b bg-gray-300 border-white/20 ">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Image
          className="cursor-pointer bg-gray-100 p-1 rounded-md w-20"
          onClick={() => router.push("/")}
          width={100}
          height={100}
          src="/logo/logo.svg"
          alt="Logo"
        />
        <div className="hidden md:flex space-x-6">
          {navLinks.map((value, index) => (
            <button
              key={index}
              className="text-black hover:text-customColor  cursor-pointer transition duration-300 flex items-center gap-1"
              onClick={() => handleClick(value.path)}
            >
              {value.name}
            </button>
          ))}
        </div>
        {/* hamburger for mobile screen  */}
        <div className="md:hidden">
          <button
            className="text-black cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* mobile menu */}

      <div
        className={`fixed top-13 left-0 h-screen w-xl rounded-md  bg-gray-800  max-w-[200px] backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-screen rounded-md shadow-md overflow-y-auto flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 p-3 ">
            {navLinks.map((value, index) => (
              <button
                className="text-white hover:text-customColor flex items-center gap-2"
                key={index}
                onClick={() => handleClick(value.path)}
              >
                <value.icon size={18} />
                {value.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
