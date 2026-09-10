export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-[#d4af37] uppercase tracking-[0.4em] text-sm mb-6">
          Creative • Digital • Premium
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Building Digital{" "}
          <span className="text-[#d4af37]">Experiences</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          We create modern, high-performance digital experiences
          for brands, businesses and ambitious creators.
        </p>

        <a
          href="#services"
          className="inline-block px-7 py-3 bg-[#d4af37] text-black font-semibold rounded-full"
        >
          Explore Services
        </a>
      </div>
    </main>
  );
}
