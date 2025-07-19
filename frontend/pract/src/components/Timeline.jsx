import React from "react";

import { Bell, CheckCircle, AlertTriangle, Star } from "lucide-react";

const timelinedata = [
  {
    title: "Notification Received",
    icon: <Bell size={20} />,
    desc: "You have a new message from the system administrator.",
  },
  {
    title: "Task Completed",
    icon: <CheckCircle size={20} />,
    desc: "Backup process finished successfully at 3:45 PM.",
  },
  {
    title: "Warning Issued",
    icon: <AlertTriangle size={20} />,
    desc: "Disk usage has reached 90%. Please review storage settings.",
  },
  {
    title: "Achievement Unlocked",
    icon: <Star size={20} />,
    desc: "You earned the 'Power User' badge for consistent activity.",
  },
];

const Timeline = () => {
  return (
    <div className="bg-amber-50 h-screen p-4">
      <div className="relative text-gray-900 ml-5 ">
        {/* vertical line of timeline  */}
        <div className="absolute top-0 z-0 bg-amber-500 w-0.5 ml-5 h-full "></div>
        {timelinedata.map((value, index) => {
          return (
            <div key={index} className="mb-10 flex flex-row gap-4 ">
              <div
                className={`  z-10 flex items-center justify-center w-10 h-10 ring-1 rounded-full ring-amber-500 text-amber-600 my-auto gap-4 ${
                  index === 1 ? "animate-pulse bg-amber-100" : "bg-white"
                }`}
              >
                {value.icon}
              </div>
              <div className="bg-white p-4 rounded-md shadow-md max-w-md  ">
                <h3 className="font-semibold ">{value.title}</h3>
                <div className="text-gray-400 flex flex-wrap max-w-xs">
                  {value.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
