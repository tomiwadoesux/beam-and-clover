import Navbar from "@/app/components/Navbar";
import Logistics from "@/app/components/Logistics";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Logistics & Supply Chain Solutions | Beam & Clover",
  description:
    "End-to-end logistics consulting, fleet optimization, and supply chain management solutions. Streamline your transportation operations with data-driven insights and real-time tracking systems.",
  alternates: {
    canonical: "https://beamandclover.com/Logistics",
  },
  openGraph: {
    title: "Logistics & Supply Chain Solutions | Beam & Clover",
    description:
      "End-to-end logistics consulting, fleet optimization, and supply chain management solutions.",
    url: "https://beamandclover.com/Logistics",
  },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <Logistics />
      <Footer />
    </div>
  );
}
