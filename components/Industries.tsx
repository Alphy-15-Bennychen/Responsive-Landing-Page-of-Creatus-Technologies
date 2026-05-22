export default function Industries() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="max-w-3xl">

          <h2 className="text-4xl font-bold text-slate-900">
            Comprehensive Scan-to-CAD Workflows for Every Industry
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We support industrial sectors with precise reverse engineering
            and CAD conversion workflows tailored to complex environments.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="bg-slate-50 p-8 rounded-3xl border hover:shadow-xl transition">

            <div className="text-4xl">⛏️</div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Mining & Heavy Industry
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Reverse engineer worn or legacy components used in mining
              equipment and industrial machinery.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-slate-50 p-8 rounded-3xl border hover:shadow-xl transition">

            <div className="text-4xl">🚗</div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Automotive & Aerospace
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Generate accurate CAD geometry for automotive restoration,
              prototyping, and aerospace applications.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-slate-50 p-8 rounded-3xl border hover:shadow-xl transition">

            <div className="text-4xl">🏭</div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Manufacturing
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Convert physical parts into production-ready models for
              fabrication, machining, and quality control.
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-slate-50 p-8 rounded-3xl border hover:shadow-xl transition">

            <div className="text-4xl">🏛️</div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Architecture & Heritage
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Preserve historical structures and architectural assets
              using detailed scan-to-CAD workflows.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}