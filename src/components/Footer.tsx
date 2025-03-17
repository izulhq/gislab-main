import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex gap-[16px] flex-wrap items-center justify-center py-4">
      <p className="text-sm font-bold text-black/50">
        part of{" "}
        <a
          className="hover:text-black"
          href="https://ijul.my.id"
          target="_blank"
        >
          ijul cooking lab
        </a>
      </p>
      <div className="h-3 w-px bg-black/60"></div>
      <span className="text-sm text-gray-500">built with</span>
      <a
        className="flex items-center gap-1 opacity-60 hover:text-black hover:opacity-100"
        href="https://vercel.com/frameworks/nextjs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/favicon.ico"
          alt="Next js vercel logo"
          width={12}
          height={12}
        />
        <span className="text-sm">next.js + vercel</span>
      </a>
      <a
        className="flex items-center gap-1 opacity-60 hover:text-black hover:opacity-100"
        href="https://react-leaflet.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/footer-leaflet.svg"
          alt="react leaflet"
          width={12}
          height={12}
        />
        <span className="text-sm">react leaflet</span>
      </a>
      <a
        className="flex items-center gap-1 opacity-60 hover:text-black hover:opacity-100"
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/footer-osm.svg"
          alt="osm"
          width={12}
          height={12}
        />
        <span className="text-sm">openstreetmap</span>
      </a>
    </div>
  );
}
