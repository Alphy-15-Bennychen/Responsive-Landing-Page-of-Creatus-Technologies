export default function Process() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="max-w-3xl">

          <h2 className="text-4xl font-bold text-slate-900">
            Our 3-Step Reverse Engineering Process
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We follow a precise and efficient workflow to transform
            physical components into accurate CAD-ready digital models.
          </p>

        </div>

        {/* PROCESS CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* STEP 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center text-2xl font-bold">
              1
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Precision 3D Scanning
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Capture high-accuracy geometry and dimensional data
              using advanced industrial scanning technology.
            </p>

          </div>

          {/* STEP 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center text-2xl font-bold">
              2
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Point Cloud Processing
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Clean and optimize scan data to prepare precise
              surfaces and geometry for CAD workflows.
            </p>

          </div>

          {/* STEP 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center text-2xl font-bold">
              3
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Parametric Modeling
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Deliver editable production-ready CAD models
              compatible with manufacturing workflows.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}