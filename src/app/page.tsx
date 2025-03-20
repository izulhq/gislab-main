import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapList from "@/components/MapList";

export default function Home() {
  return (
    <div className="min-h-screen justify-center md:h-screen flex flex-col gap-8 md:gap-4 overflow-hidden bg-[#f5f5f5] p-4 sm:px-12 sm:py-6">
      <Header />
      <MapList />
      <Footer />
    </div>
  );
}
