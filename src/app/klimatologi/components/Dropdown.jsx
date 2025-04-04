export default function Dropdown({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div
      className="absolute bottom-full object-center right-0 mb-8 min-w-[270px] backdrop-blur-lg bg-[#f5f5f5]/90 border-[1px] border-gray-400 rounded-[12px] shadow-lg overflow-hidden z-50"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="" role="none">
        <div>
          <a className="block px-6 py-2 text-xs text-center text-white bg-gradient-to-r from-blue-500/90 to-blue-700/90 hover:bg-gradient-to-l">
            Current : Klimatologi
          </a>
        </div>
        <a
          href="#"
          className="block px-6 py-2 text-sm text-black hover:bg-white transition-colors"
          role="menuitem"
        >
          Peta Klimatologi
        </a>
        <a
          href="/gsheets"
          className="block px-6 py-2 text-sm text-black hover:bg-white transition-colors"
          role="menuitem"
        >
          Google Sheets Interactive Map
        </a>
        <a
          href="#"
          className="block px-6 py-2 text-sm text-black hover:bg-white transition-colors"
          role="menuitem"
        >
          Our Adventure Map
        </a>
        <a
          href="#"
          className="block px-6 py-2 text-sm text-black hover:bg-white transition-colors"
          role="menuitem"
        >
          Coming Soon ...
        </a>
      </div>
      <div className="border-t border-black-400" role="none">
        <div className="grid grid-cols-2">
          <a
            href="https://leafletjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-xs text-center text-gray-600 hover:bg-white transition-colors"
            role="menuitem"
          >
            Leaflet Maps
          </a>
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-xs text-center text-gray-600 hover:bg-white transition-colors"
            role="menuitem"
          >
            OpenStreetMap
          </a>
        </div>
      </div>
    </div>
  );
}
