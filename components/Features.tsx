export default function Features() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="max-w-3xl">

          <h2 className="text-4xl font-bold text-slate-900">
            Tailored 3D Solutions for Your Complex Engineering Challenges
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We provide high-accuracy reverse engineering solutions
            for manufacturing, mining, automotive, and industrial workflows.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-4xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
              📁
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Stop Struggling with "Dumb" Files
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Convert STL meshes and scanned geometry into editable,
              production-ready CAD models.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-4xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
              ⚙️
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Eliminate Downtime from Missing Prints
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Recreate precise CAD drawings and models from physical
              components when documentation is unavailable.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-4xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
              ✅
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Zero-Fitment Risk
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Ensure dimensional accuracy and compatibility before
              manufacturing or replacement production begins.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}