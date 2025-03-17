import { ChevronUp } from "lucide-react";

export default function MapList() {
  return (
    <div className="flex flex-col h-full overflow-hidden gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[40vh] max-w-6xl mx-auto w-full">
        {/* Map 1 */}
        <div className="h-full relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="absolute inset-0 flex flex-col">
            {/* Image */}
            <div className="relative h-2/3 overflow-hidden group-hover:h-0 transition-all duration-300">
              <img
                src="/images/gislab-main-pics-4.png"
                alt="test pic"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-gradient-to-l from-blue-500 to-blue-700 px-3 py-1 rounded-full shadow-md">
                <p className="text-xs font-medium text-white">Research</p>
              </div>
            </div>

            {/* Map Footer - will expand on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white group-hover:h-full transform transition-all duration-300 ease-in-out">
              <div className="p-4 h-full flex flex-col">
                {/* Header always visible */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">Peta Klimatologi</h3>
                    <p className="text-sm text-gray-500">
                      Last updated 1 months ago
                    </p>
                  </div>
                  <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
                </div>

                {/* Content that appears on hover - slides up */}
                <div className="mt-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex-grow">
                  <p className="mb-4 text-sm">
                    This map are displaying bla bla bla bla bla blah and keep
                    yapping about it.
                  </p>
                  <button className="px-3 py-1 border border-gray-400 rounded-md text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-colors">
                    View Maps ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map 2 - Apply the same pattern to all maps */}
        <div className="h-full relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="absolute inset-0 flex flex-col">
            {/* Image */}
            <div className="relative h-2/3 overflow-hidden group-hover:h-0 transition-all duration-300">
              <img
                src="/images/gislab-main-pics-3.png"
                alt="test pic"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-gradient-to-l from-blue-500 to-blue-700 px-3 py-1 rounded-full shadow-md">
                <p className="text-xs font-medium text-white">GIS Laboratory</p>
              </div>
            </div>

            {/* Map Footer - will expand on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white group-hover:h-full transform transition-all duration-300 ease-in-out">
              <div className="p-4 h-full flex flex-col">
                {/* Header always visible */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">
                      Leaflet with Google Sheets
                    </h3>
                    <p className="text-sm text-gray-500">
                      Last updated 2 days ago
                    </p>
                  </div>
                  <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
                </div>

                {/* Content that appears on hover - slides up */}
                <div className="mt-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex-grow">
                  <p className="mb-4 text-sm">
                    This map are displaying bla bla bla bla bla blah and keep
                    yapping about it.
                  </p>
                  <button className="px-3 py-1 border border-gray-400 rounded-md text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-colors">
                    View Maps ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map 3 - Same pattern */}
        <div className="h-full relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="absolute inset-0 flex flex-col">
            {/* Image */}
            <div className="relative h-2/3 overflow-hidden group-hover:h-0 transition-all duration-300">
              <img
                src="/images/gislab-main-pics-5.png"
                alt="test pic"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-gradient-to-l from-blue-500 to-blue-700 px-3 py-1 rounded-full shadow-md">
                <p className="text-xs font-medium text-white">
                  Internship Program
                </p>
              </div>
            </div>

            {/* Map Footer - will expand on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white group-hover:h-full transform transition-all duration-300 ease-in-out">
              <div className="p-4 h-full flex flex-col">
                {/* Header always visible */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">
                      DPUPR Interactive Maps
                    </h3>
                    <p className="text-sm text-gray-500">
                      Last updated 7 months ago
                    </p>
                  </div>
                  <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
                </div>

                {/* Content that appears on hover - slides up */}
                <div className="mt-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex-grow">
                  <p className="mb-4 text-sm">
                    This map are displaying bla bla bla bla bla blah and keep
                    yapping about it.
                  </p>
                  <button className="px-3 py-1 border border-gray-400 rounded-md text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-colors">
                    View Maps ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[10%] flex justify-center items-center">
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-black/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1.5 h-1.5 bg-black/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1.5 h-1.5 bg-black/50 rounded-full animate-bounce"></span>
          </div>
          <span className="text-md font-regular text-black/60">
            more maps coming soon ... stay tuned!
          </span>
        </div>
      </div>
    </div>
  );
}
