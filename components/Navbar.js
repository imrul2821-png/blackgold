"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    // Button Hover Animation:
    // Mouse button-এর উপর গেলে button সামান্য বড় হবে।
    const buttons = document.querySelectorAll(".gsap-button");

    const handlers = [];

    buttons.forEach((button) => {
      const enter = () => {
        gsap.to(button, {
          scale: 1.06,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);

      handlers.push({ button, enter, leave });
    });

    return () => {
      handlers.forEach(({ button, enter, leave }) => {
        button.removeEventListener("mouseenter", enter);
        button.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#home" className="text-xl font-bold tracking-widest">
          BLACK<span className="gold">GOLD</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a
            href="#home"
            className="hover:text-[#d4af37] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-[#d4af37] transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-[#d4af37] transition"
          >
            Services
          </a>

          <a
            href="#contact"
            className="hover:text-[#d4af37] transition"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="gsap-button hidden md:inline-block px-5 py-2 border gold-border gold text-sm rounded-full"
        >
          Let's Talk
        </a>

      </nav>
    </header>
  );
}
