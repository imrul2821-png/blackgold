"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  useEffect(() => {
    // Button Hover Animation:
    // Contact button-এর উপর mouse নিলে button
    // সামান্য বড় হবে এবং mouse সরালে আবার আগের
    // size-এ ফিরে যাবে।
    const button = document.querySelector(".contact-button");

    if (!button) return;

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

    return () => {
      button.removeEventListener("mouseenter", enter);
      button.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="gold uppercase tracking-widest text-sm mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Let's Build Something{" "}
          <span className="gold">Great.</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Have a project in mind? Let's turn your idea into
          a modern digital experience.
        </p>

        <a
          href="mailto:imrul2821@gmail.com"
          className="contact-button inline-block px-8 py-4 gold-bg text-black font-bold rounded-full"
        >
          Get In Touch
        </a>

      </div>
    </section>
  );
            }
