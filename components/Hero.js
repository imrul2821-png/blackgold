"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    // Hero Text Animation:
    // Hero section-এর সব text নিচ থেকে উঠে এসে
    // ধীরে ধীরে visible হবে।
    gsap.from(".hero-text", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Small Hero Text */}
        <p className="hero-text gold uppercase tracking-[0.4em] text-sm mb-6">
          Creative • Digital • Premium
        </p>

        {/* Main Hero Heading */}
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Building Digital{" "}
          <span className="gold">Experiences</span>
        </h1>

        {/* Hero Description */}
        <p className="hero-text max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-10">
          We create modern, high-performance digital experiences
          for brands, businesses and ambitious creators.
        </p>

        {/* Hero Buttons */}
        <div className="hero-text flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#services"
            className="gsap-button inline-block px-7 py-3 gold-bg text-black font-semibold rounded-full"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="gsap-button inline-block px-7 py-3 border gold-border gold rounded-full"
          >
            Contact Us
          </a>

        </div>
      </div>
    </section>
  );
              }
