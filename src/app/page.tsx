import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Seo from "@/components/sections/Seo";
import SelectedWork from "@/components/sections/SelectedWork";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Work />
        <Seo />
        <SelectedWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
