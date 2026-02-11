import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Body from "./components/body";
import ServicesCarousel from "./components/services-carousel";
import WhyUs from "./components/why-us";
import Globally from "./components/globally";
import VehicleAdmin from "./components/vehicle-admin";
import Logistics from "./components/logistics";
import Footer from "./components/footer";
import StayInformed from "./components/stay-informed";

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
