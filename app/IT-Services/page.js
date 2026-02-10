import Navbar from "@/app/components/navbar-temp";
import IT from "@/app/components/it";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "Enterprise IT & Infrastructure Services | Beam & Clover",
  description:
    "Secure cloud infrastructure, cybersecurity, and enterprise IT integration services. Leading IT consulting firm for digital transformation in government and public sectors in Nigeria.",
};

export default function Page() {

  return (
    <div>
      <Navbar />
      <IT/>
      <Footer/>
    </div>
  );
}