import StatusConsole from "@/components/StatusConsole";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogTicker from "@/components/LogTicker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <StatusConsole />
      <Nav />
      <Hero />
      <LogTicker />
      <About />
      <Skills />
      <Projects />
      <Writing />
      <Footer />
    </main>
  );
}
