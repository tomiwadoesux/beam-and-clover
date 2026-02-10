import Footer from "../components/footer";
import Navbar from "../components/navbar-temp";
import VehicleAdmin from "../components/vehicle-adminn";

export const metadata = {
  title: "Vehicle Administration Solutions | Beam & Clover",
  description:
    "Advanced vehicle license management, government fleet administration, and automated compliance verification systems. Trusted by Nigerian government agencies for digital vehicle documentation.",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <VehicleAdmin/>
      <Footer/>
    </div>
  );
}
