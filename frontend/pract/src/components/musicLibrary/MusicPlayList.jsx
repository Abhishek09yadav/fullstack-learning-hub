import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
const MusicPlayList = () => {
  const songsData = [
    {
      title: "Smooth Criminal",
      artist: "Michael Jackson",
      imageUrl:
        "https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Michael-Jackson.png",
      colors: {
        bg: "bg-amber-200",
        text: "text-amber-900",
        artistText: "text-amber-800",
        gradient: "before:to-amber-600",
      },
    },
    {
      title: "Ice Cream",
      artist: "Selena Gomez",
      imageUrl:
        "https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Selena-Gomez.png",
      colors: {
        bg: "bg-orange-200",
        text: "text-orange-900",
        artistText: "text-orange-800",
        gradient: "before:to-orange-600",
      },
    },
    {
      title: "Love yourself",
      artist: "Justin Bieber",
      imageUrl:
        "https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Justin-Bieber.png",
      colors: {
        bg: "bg-rose-200",
        text: "text-rose-900",
        artistText: "text-rose-800",
        gradient: "before:to-rose-600",
      },
    },
    {
      title: "7 Rings",
      artist: "Ariana Grande",
      imageUrl:
        "https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Ariana-Grande.png",
      colors: {
        bg: "bg-fuchsia-200",
        text: "text-fuchsia-900",
        artistText: "text-fuchsia-800",
        gradient: "before:to-fuchsia-600",
      },
    },
    {
      title: "Diamond",
      artist: "Rihanna",
      imageUrl:
        "https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Rihanna.png",
      colors: {
        bg: "bg-blue-200",
        text: "text-blue-900",
        artistText: "text-blue-800",
        gradient: "before:to-blue-600",
      },
    },
  ];

  return (
    <div className="container bg-amber-50 min-h-screen">
      <div className="mx-auto bg-white px-6 py-16 sm:w-8/12 lg:w-6/12 xl:w-4/12">
        <div className="text-center bg-gradient-to-r from ">
          <h1 className="text-3xl">Your Library</h1>
          <p className="mt-2 text-gray-600">
            Listen to your favorite music today !
          </p>
        </div>
        <div className="mt-4">
          {songsData.map((song, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6  ${
                  index % 2 !== 0 ? "-mr-6 pr-6" : ""
                }`}
              >
                <div
                  className={`group relative h-20 flex cursor-pointer justify-between rounded-xl ${song.colors.bg} before:absolute before:h-full before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent ${song.colors.gradient} before:opacity-0 before:transition before:duration-500 hover:before:opacity-100 `}
                >
                  {" "}
                  <div className="relative my-auto ml-4" >
                    {" "}
                    <h4 className={`text-lg font-semibold  ${song.colors.text}`}>
                      {song.title}
                    </h4>
                    <span className="transition duration-300 group-hover:invisible "></span>
                    <div className=" "></div>
                  </div>
                  <Image
                    src={song.imageUrl}
                    alt={song.title}
                    width={96}
                    height={96}
                    className="absolute h-full right-0 group-hover:scale-150 transition-transform duration-500 rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayList;
