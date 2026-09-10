"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP-এর ScrollTrigger plugin register করা হচ্ছে
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Clean, modern and responsive websites designed to create a strong digital presence.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Fast and scalable web applications using modern development technologies.",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Premium visual identities that help businesses stand out and remain memorable.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Service Card Scroll Animation:
      // User Services section-এ scroll করলে প্রতিটি card
      // নিচ থেকে উঠে এসে fade-in হবে।
      // প্রতিটি card-এর animation-এর মধ্যে সামান্য delay থাকবে।
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",

        // ScrollTrigger:
        // Services section viewport-এর নির্দিষ্ট জায়গায়
        // পৌঁছালে animation শুরু হবে।
        scrollTrigger: {
          trigger: "#services",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

    }, sectionRef);

    // Component বন্ধ হলে GSAP animation এবং ScrollTrigger
    // পরিষ্কার করে দেওয়া হচ্ছে।
    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 px-6 bg-[#080808]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="gold uppercase tracking-widest text-sm mb-4">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.number}
              className="service-card gold-glow border border-white/10 p-8 rounded-2xl bg-black"
            >

              <div className="text-3xl gold mb-6">
                {service.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
