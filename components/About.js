export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="gold uppercase tracking-widest text-sm mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple ideas.{" "}
            <span className="gold">Powerful results.</span>
          </h2>
        </div>

        <div className="text-gray-400 leading-8">
          <p>
            We focus on clean design, modern technology and
            meaningful digital experiences. Every project is built
            with performance, usability and scalability in mind.
          </p>
        </div>

      </div>
    </section>
  );
}
