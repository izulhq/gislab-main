import { ChevronUp } from "lucide-react";
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
      <main className="flex-1 container mx-auto p-4 border border-gray-200 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full max-w-6xl mx-auto">
          {/* Map 1 */}
          <div className="aspect-[8/7] relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 flex flex-col">
              {/* Image */}
              <div className="relative h-2/3 overflow-hidden">
                <img
                  src="/gislab-main-pics.png"
                  alt="test pic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/30 px-3 py-1 rounded-lg">
                  <p className="text-xs font-medium text-white">
                    GIS Laboratory
                  </p>
                </div>
              </div>
              {/* Map Footer */}
              <div className="h-1/3 bg-white transition-all duration-300 ease-in-out group-hover:h-full group-hover:absolute group-hover:inset-0 overflow-y-auto">
                <div className="p-4 h-full relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">Testing Maps</h3>
                      <p className="text-sm text-gray-500">
                        Last updated 2 days ago
                      </p>
                    </div>
                    <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                  {/* Hover Content */}
                  <div className="hidden group-hover:block mt-4">
                    <p className="mb-4">
                      This map are displaying bla bla bla bla bla blah and keep
                      yapping about it.
                    </p>
                    <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white">
                      View Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map 2 */}
          <div className="aspect-[8/7] relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 flex flex-col">
              {/* Image */}
              <div className="relative h-2/3 overflow-hidden">
                <img
                  src="/gislab-main-pics.png"
                  alt="test pic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/30 px-3 py-1 rounded-lg">
                  <p className="text-xs font-medium text-white">
                    GIS Laboratory
                  </p>
                </div>
              </div>
              {/* Map Footer */}
              <div className="h-1/3 bg-white transition-all duration-300 ease-in-out group-hover:h-full group-hover:absolute group-hover:inset-0 overflow-y-auto">
                <div className="p-4 h-full relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">Testing Maps</h3>
                      <p className="text-sm text-gray-500">
                        Last updated 2 days ago
                      </p>
                    </div>
                    <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                  {/* Hover Content */}
                  <div className="hidden group-hover:block mt-4">
                    <p className="mb-4">
                      This map are displaying bla bla bla bla bla blah and keep
                      yapping about it.
                    </p>
                    <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white">
                      View Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map 3 */}
          <div className="aspect-[8/7] relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 flex flex-col">
              {/* Image */}
              <div className="relative h-2/3 overflow-hidden">
                <img
                  src="/gislab-main-pics.png"
                  alt="test pic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/30 px-3 py-1 rounded-lg">
                  <p className="text-xs font-medium text-white">
                    GIS Laboratory
                  </p>
                </div>
              </div>
              {/* Map Footer */}
              <div className="h-1/3 bg-white transition-all duration-300 ease-in-out group-hover:h-full group-hover:absolute group-hover:inset-0 overflow-y-auto">
                <div className="p-4 h-full relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">Testing Maps</h3>
                      <p className="text-sm text-gray-500">
                        Last updated 2 days ago
                      </p>
                    </div>
                    <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                  {/* Hover Content */}
                  <div className="hidden group-hover:block mt-4">
                    <p className="mb-4">
                      This map are displaying bla bla bla bla bla blah and keep
                      yapping about it.
                    </p>
                    <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white">
                      View Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map 4 */}
          <div className="aspect-[8/7] relative group border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 flex flex-col">
              {/* Image */}
              <div className="relative h-2/3 overflow-hidden">
                <img
                  src="/gislab-main-pics.png"
                  alt="test pic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/30 px-3 py-1 rounded-lg">
                  <p className="text-xs font-medium text-white">
                    GIS Laboratory
                  </p>
                </div>
              </div>
              {/* Map Footer */}
              <div className="h-1/3 bg-white transition-all duration-300 ease-in-out group-hover:h-full group-hover:absolute group-hover:inset-0 overflow-y-auto">
                <div className="p-4 h-full relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">Testing Maps</h3>
                      <p className="text-sm text-gray-500">
                        Last updated 2 days ago
                      </p>
                    </div>
                    <ChevronUp className="w-7 h-7 mt-3 text-black group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                  {/* Hover Content */}
                  <div className="hidden group-hover:block mt-4">
                    <p className="mb-4">
                      This map are displaying bla bla bla bla bla blah and keep
                      yapping about it.
                    </p>
                    <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white">
                      View Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
