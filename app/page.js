import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © 2026 BLACK<span className="gold">GOLD</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
}
