"use client";
import { ChevronUp, ChevronDown, Hammer, Ellipsis } from "lucide-react";
import { useState } from "react";

// Helper function for conditional class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

// Define your map data
const maps = [
  {
    id: 1,
    title: "Peta Klimatologi",
    lastUpdated: "a month ago",
    description:
      "This map are displaying bla bla bla bla bla blah and keep yapping about it.",
    image: "/images/gislab-main-pics-4.png",
    mobileIcon: "/images/gis-bbws-icon.png",
    bgImage: "/images/gislab-main-pics-4.png",
    category: "Research",
  },
  {
    id: 2,
    title: "Leaflet with Google Sheets",
    lastUpdated: "2 days ago",
    description:
      "This map are displaying bla bla bla bla bla blah and keep yapping about it.",
    image: "/images/gislab-main-pics-3.png",
    mobileIcon: "/images/gis-gsheets-icon.png",
    bgImage: "/images/gislab-main-pics-3.png",
    category: "GIS Laboratory",
  },
  {
    id: 3,
    title: "DPUPR Interactive Maps",
    lastUpdated: "7 months ago",
    description:
      "This map are displaying bla bla bla bla bla blah and keep yapping about it.",
    image: "/images/gislab-main-pics-5.png",
    mobileIcon: "/images/gis-dpupr-icon.png",
    bgImage: "/images/gislab-main-pics-5.png",
    category: "Internship Program",
  },
];

// Map item component
function MapItem({ map }: { map: (typeof maps)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const toggleExpand = () => {
    if (isExpanded) {
      // Start collapsing animation
      setIsCollapsing(true);
      // Wait for animation to finish before fully collapsing
      setTimeout(() => {
        setIsExpanded(false);
        setIsCollapsing(false);
      }, 300); // Match animation duration (0.3s)
    } else {
      // Expand immediately
      setIsExpanded(true);
    }
  };

  return (
    <>
      {/* Mobile Layout - Only visible on small screens */}
      <div
        className={cn(
          "block md:hidden relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all duration-300",
          isExpanded ? "h-auto" : "h-auto"
        )}
        // style={{
        //   backgroundImage: isExpanded ? `url(${map.bgImage})` : "none",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {/* Card content */}
        <div className="flex flex-col">
          {/* Mobile Header */}
          <div
            className={cn(
              "flex items-center w-full p-4 gap-3 cursor-pointer",
              isExpanded && "bg-white text-black"
            )}
            onClick={() => toggleExpand()}
          >
            {/* Image - Always visible */}
            <div className="relative min-w-[60px] w-[60px] h-[60px]">
              <img
                src={map.mobileIcon}
                alt={map.title}
                className="object-cover rounded-md w-full h-full"
              />
            </div>

            {/* Title and Last Updated - Always visible */}
            <div className="flex-1">
              <h3 className="font-bold text-lg">{map.title}</h3>
              <p className="text-sm text-gray-500">
                Last updated {map.lastUpdated}
              </p>
            </div>

            {/* Chevron Icon - Always visible */}
            <div>
              {isExpanded ? (
                <ChevronDown className="h-6 w-6" />
              ) : (
                <Ellipsis className="h-6 w-6" />
              )}
            </div>
          </div>

          {/* Mobile Expanded Content */}
          {(isExpanded || isCollapsing) && (
            <div
              className={`w-full p-4 pt-0 ${
                isCollapsing ? "animate-collapseUp" : "animate-expandDown"
              }`}
            >
              <button className="mb-4 text-white text-sm bg-gradient-to-l from-blue-500 to-blue-700 px-3 py-1 rounded-full shadow-md">
                {map.category}
              </button>
              <p className="mb-4">{map.description}</p>
              <button className="px-3 py-1 border border-gray-400 rounded-md text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white hover:border-transparent transition-colors">
                View Maps ↗
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout - Only visible on medium screens and up */}
      <div className="hidden md:block h-full relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {/* Image */}
          <div className="relative h-2/3 overflow-hidden group-hover:h-0 transition-all duration-300">
            <img
              src={map.image}
              alt={map.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-gradient-to-l from-blue-500 to-blue-700 px-3 py-1 rounded-full shadow-md">
              <p className="text-xs font-medium text-white">{map.category}</p>
            </div>
          </div>

          {/* Map Footer - will expand on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white group-hover:h-full transform transition-all duration-300 ease-in-out">
            <div className="p-4 h-full flex flex-col">
              {/* Header always visible */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{map.title}</h3>
                  <p className="text-sm text-gray-500">
                    Last updated {map.lastUpdated}
                  </p>
                </div>
                <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
              </div>

              {/* Content that appears on hover - slides up */}
              <div className="mt-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex-grow">
                <p className="mb-4 text-sm">{map.description}</p>
                <button className="px-3 py-1 border border-gray-400 rounded-md text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-colors">
                  View Maps ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function MapList() {
  return (
    <div className="flex flex-col h-full overflow-hidden gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-[40vh] gap-8 md:gap-4 max-w-6xl mx-auto w-full">
        {maps.map((map) => (
          <MapItem key={map.id} map={map} />
        ))}
      </div>

      <div className="mt-8 md:mt-4 flex justify-center items-center">
        <div className="flex items-center justify-center gap-4">
          <Hammer className="w-5 h-5 text-black/50 [animation:hammer-punch_1.5s_ease-in-out_infinite]" />
          <span className="text-md font-regular text-black/60">
            more maps coming soon ... stay tuned!
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes expandDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }
        .animate-expandDown {
          animation: expandDown 0.3s ease-out forwards;
        }
        @keyframes collapseUp {
          from {
            max-height: 500px;
            opacity: 1;
          }
          to {
            max-height: 0;
            opacity: 0;
          }
        }
        .animate-collapseUp {
          animation: collapseUp 0.3s ease-in forwards;
        }
        @keyframes hammer-punch {
          0%,
          100% {
            transform: rotate(-15deg);
          }
          50% {
            transform: rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}
