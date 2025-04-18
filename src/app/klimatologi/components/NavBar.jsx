import React, { useState } from "react";
import Image from "next/image";
import { MapIcon, TableIcon, ChevronUp } from "lucide-react";
import Dropdown from "./Dropdown";

export default function NavBar({ view, setView }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed z-[9999] w-auto min-w-[320px] h-20 md:h-16 -translate-x-1/2 backdrop-blur-lg bg-[#f5f5f5]/40 border-[1px] border-gray-400 rounded-[12px] bottom-4 left-1/2 shadow-xl">
      <div className="h-full px-6 flex flex-col items-center justify-between">
        <div className="flex flex-auto items-center justify-between w-full">
          <div className="flex items-center">
            <Image
              src="/images/logo-text.png"
              alt="Logo"
              width={100}
              height={40}
              className="w-30 h-auto md:w-20 md:h-auto"
            />
          </div>

          <div className="flex items-center gap-2 ml-6">
            <button
              data-tooltip-target="tooltip-map"
              onClick={() => setView("map")}
              className={`p-3 md:p-2 rounded-full shadow-md ${
                view === "map"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700"
                  : "bg-gradient-to-r from-gray-500 to-gray-700 hover:bg-gradient-to-l"
              } hover:bg-gradient-to-br focus:outline-none`}
            >
              <MapIcon
                className={`w-6 h-6 md:w-5 md:h-5 ${
                  view === "map" ? "text-white" : "text-gray-200"
                }`}
              />
            </button>
            <div
              id="tooltip-map"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
            >
              Map View
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <button
              data-tooltip-target="tooltip-table"
              onClick={() => setView("table")}
              className={`p-3 md:p-2 rounded-full shadow-md ${
                view === "table"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700"
                  : "bg-gradient-to-r from-gray-500 to-gray-700 hover:bg-gradient-to-l"
              } hover:bg-gradient-to-br focus:outline-none`}
            >
              <TableIcon
                className={`w-6 h-6 md:w-5 md:h-5 ${
                  view === "table" ? "text-white" : "text-gray-200"
                }`}
              />
            </button>
            <div
              id="tooltip-table"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
            >
              Table View
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`p-3 md:p-2 rounded-full shadow-md ${
                  isDropdownOpen
                    ? "bg-gradient-to-r from-blue-500 to-blue-700"
                    : "bg-gradient-to-r from-gray-500 to-gray-700 hover:bg-gradient-to-l"
                } hover:bg-gradient-to-br focus:outline-none`}
              >
                <ChevronUp
                  className={`w-6 h-6 md:w-5 md:h-5 ${
                    isDropdownOpen ? "text-white" : "text-gray-200"
                  } ${isDropdownOpen ? "rotate-180" : ""} transition-transform`}
                />
              </button>
              <Dropdown isVisible={isDropdownOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
