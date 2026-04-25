import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import ServiceShowcase from "@/components/ServiceShowcase";
import WordsBand from "@/components/WordsBand";
import InstallStats from "@/components/InstallStats";
import Installations from "@/components/Installations";
import BeforeAfter from "@/components/BeforeAfter";
import EquipmentMarquee from "@/components/EquipmentMarquee";
import Manifesto from "@/components/Manifesto";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Compliance from "@/components/Compliance";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <ServiceShowcase />
        <WordsBand />
        <InstallStats />
        <Installations />
        <BeforeAfter />
        <EquipmentMarquee />
        <Manifesto />
        <TrustStrip />
        <About />
        <Compliance />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
