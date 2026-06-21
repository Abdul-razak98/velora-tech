import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiagonalMarquee from "./components/DiagonalMarquee";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Pricing from "./components/Pricing";
import Trust from "./components/Trust";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <Hero />
      <DiagonalMarquee />
      <Services />
      <HowWeWork />
      <Pricing />
      <Trust />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}