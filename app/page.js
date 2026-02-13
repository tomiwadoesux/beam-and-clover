import Body from "./components/body";
import Footer from "./components/footer";
import Globally from "./components/globally";
import Hero from "./components/hero";
import Logistics from "./components/logistics";
import Navbar from "./components/navbar";
import ServicesCarousel from "./components/services-carousel";
import StayInformed from "./components/stay-informed";
import VehicleAdmin from "./components/vehicle-admin";
import WhyUs from "./components/why-us";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Body />
      <ServicesCarousel />
      <WhyUs />
      <StayInformed />
      <Globally />
      <VehicleAdmin />
      <Logistics />
      <Footer />
    </main>
  );
}
