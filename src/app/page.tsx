import { ChevronUp, MapPinned } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen max-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="flex gap-8 items-center">
        <Image
          className=""
          src="/logo.png"
          alt="Next.js logo"
          width={80}
          height={80}
          priority
        />
        <h1 className="text-5xl font-bold text-center">
          ijul&apos;s GIS Laboratory
        </h1>
      </div>

      {/* Main */}
      <main className="flex-1 container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full max-w-6xl mx-auto">
          {/* Map 1 */}
          <div className="aspect-[8/7] relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
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
                    <p className="mb-4">
                      This map are displaying bla bla bla bla bla blah and keep
                      yapping about it.
                    </p>
                    <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-colors">
                      View Maps ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map 2 - Apply the same pattern to all maps */}
          <div className="aspect-[8/7] relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 flex flex-col">
              {/* Image */}
              <div className="relative h-2/3 overflow-hidden group-hover:h-0 transition-all duration-300">
                <img
                  src="/images/gislab-main-pics-3.png"
                  alt="test pic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-l from-blue-500 to-blue-700 px-3 py-1 rounded-full shadow-md">
                  <p className="text-xs font-medium text-white">
                    GIS Laboratory
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
                    <p className="mb-4">
                      This map are displaying bla bla bla bla bla blah and keep
                      yapping about it.
                    </p>
                    <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-colors">
                      View Maps ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map 3 - Same pattern */}
          <div className="aspect-[8/7] relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
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
                    <p className="mb-4">
                      This map are displaying bla bla bla bla bla blah and keep
                      yapping about it.
                    </p>
                    <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-colors">
                      View Maps ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center justify-center border border-gray-200 bg-white rounded-lg shadow-md">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              ... more maps coming soon ...
            </button>
          </div>
          <div className="flex items-center justify-center border border-gray-200 bg-white rounded-lg shadow-md">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              Copyright © 2025 ijul&apos;s GIS Laboratory
            </button>
          </div>
          <div className="flex items-center justify-center border border-gray-200 bg-white rounded-lg shadow-md">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              ... stay tuned for upcoming projects ...
            </button>
          </div> */}
        </div>

        <div className="md:col-span-3 flex justify-center mt-4">
          <button className="w-full py-3 text-black">
            <div className="flex items-center justify-center gap-6">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
              </div>
              <span className="text-base font-regular text-gray-600">
                more maps coming soon ... stay tuned for upcoming projects !
              </span>
            </div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 text-gray-600"
          rel="noopener noreferrer"
        >
          This website is built with
        </a>
        <a
          className="flex items-center gap-2 opacity-60 hover:text-black hover:opacity-100"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/favicon.ico"
            alt="Next js vercel logo"
            width={16}
            height={16}
          />
          Next.js + Vercel
        </a>
        <a
          className="flex items-center gap-2 opacity-60 hover:text-black hover:opacity-100"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/footer-leaflet.svg"
            alt="react leaflet"
            width={16}
            height={16}
          />
          React Leaflet
        </a>
        <a
          className="flex items-center gap-2 opacity-60 hover:text-black hover:opacity-100"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/footer-osm.svg"
            alt="osm"
            width={16}
            height={16}
          />
          OpenStreetMap
        </a>
      </footer>
    </div>
  );
}
