import Navbar from "./components/navbar-temp";
import Hero from "./components/hero";
import Body from "./components/body";
import ServicesCarousel from "./components/services-carousell";
import WhyUs from "./components/why-uss";
import Globally from "./components/globally";
import VehicleAdmin from "./components/vehicle-adminn";
import Logistics from "./components/logistics";
import Footer from "./components/footer";
import StayInformed from "./components/stay-informedd";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Body />
      <ServicesCarousel />
      <WhyUs />
      <StayInformed/>
      {/* <Globally/> */}
      {/* <VehicleAdmin/> */}
      {/* <Logistics/> */}
      <Footer/>

    </main>
  );
}
