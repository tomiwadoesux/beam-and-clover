import Navbar from "@/app/components/navbar";
import Logistics from "@/app/components/logistics";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "Logistics & Supply Chain Solutions | Beam & Clover",
  description:
    "End-to-end logistics consulting, fleet optimization, and supply chain management solutions. Streamline your transportation operations with data-driven insights and real-time tracking systems.",
  alternates: {
    canonical: "https://beamandclover.com/logistics",
  },
  openGraph: {
    title: "Logistics & Supply Chain Solutions | Beam & Clover",
    description:
      "End-to-end logistics consulting, fleet optimization, and supply chain management solutions.",
    url: "https://beamandclover.com/logistics",
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
