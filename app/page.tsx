import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Menu from "@/components/Menu";
import Offers from "@/components/Offers";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import LocationContact from "@/components/LocationContact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Hero />
      <Offers />
      <WhyChooseUs />
      <Menu />
      <Gallery />
      <Reviews />
      <LocationContact />
      <FloatingWhatsApp />
    </main>
  );
}
