export default function Hero() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-orange-900 font-bold uppercase tracking-wider">
            Reverse Engineering Services
          </p>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mt-4">
            Convert Physical Parts to Production-Ready CAD Models
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            High-accuracy reverse engineering for manufacturing,
            mining, and automotive industries.
          </p>

          <button className="mt-8 bg-teal-700 hover:bg-teal-900 text-white px-6 py-4 rounded-sm font-semibold shadow-lg transition">
            Request a Quote
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div>

          <img
            src="/images/hero-image.jpg"
            alt="Engineering CAD"
            className="w-full h-[450px] object-cover rounded-xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}