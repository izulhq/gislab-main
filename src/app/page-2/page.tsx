import Image from "next/image";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen max-h-screen items-center sm:p-20">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-8 items-center">
          <Image
            className=""
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            priority
          />
          <h1 className="text-5xl font-bold text-center">
            ijul&apos;s GIS Laboratory
          </h1>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-gray-300" />

        {/* Footer */}
        <footer className="flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 text-gray-600 hover:text-black"
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
            className="flex items-center gap-2 text-gray-600 hover:text-black"
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
            className="flex items-center gap-2 text-gray-600 hover:text-black"
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
    </div>
  );
}
