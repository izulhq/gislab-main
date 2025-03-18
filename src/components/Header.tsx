import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center py-6 md:gap-4">
      <div className="flex items-center gap-6 mb-2">
        <Image
          className=""
          src="/images/logo.png"
          alt="Next.js logo"
          width={60}
          height={60}
          priority
        />
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          ijul&apos;s gis laboratory
        </h1>
      </div>

      <div className="max-w text-center">
        <span className="text-sm md:text-[16px] font-regular text-black/60">
          welcome to my gis laboratory! where i experiment with various mapping
          technologies and tools
          <br></br>
          feel free to explore the maps and projects that i have created!
        </span>
      </div>
    </div>
  );
}
