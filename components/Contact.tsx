export default function Contact() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          <p className="text-orange-800 font-semibold uppercase tracking-wider">
            Request a Quote
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
            Ready to Start Your Project?
            Get a Rapid Quote Today
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Upload your files or project details and our engineering
            team will provide an accurate Scan-to-CAD solution tailored
            to your workflow.
          </p>

          {/* SOFTWARE TAGS */}
          <div className="flex flex-wrap gap-4 mt-10">

            <span className="bg-slate-100 px-5 py-3 rounded-xl font-medium">
              SOLIDWORKS
            </span>

            <span className="bg-slate-100 px-5 py-3 rounded-xl font-medium">
              AUTODESK 
            </span>

            <span className="bg-slate-100 px-5 py-3 rounded-xl font-medium">
             INVENTOR
            </span>

            <span className="bg-slate-100 px-5 py-3 rounded-xl font-medium">
              STEP
            </span>

            <span className="bg-slate-100 px-5 py-3 rounded-xl font-medium">
              IGES
            </span>

            <span className="bg-slate-100 px-5 py-3 rounded-xl font-medium">
              PARASOLID
            </span>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border">

          <form className="space-y-6">

            {/* NAME */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Name *
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-slate-400 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email *
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-slate-400 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

            </div>

            {/* PHONE */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone *
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-slate-400 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

            </div>

            {/* FILE UPLOAD */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    File Upload
                </label>

                <input
                    type="file"
                    className="w-full border border-slate-400 rounded-xl px-4 py-4 bg-white text-slate-500 text-sm
                            file:mr-1 file:py-0 file:px-0
                            file:border-0 file:bg-transparent
                            file:text-sm file:font-semibold file:text-slate-700
                            before:content-['Choose_File:'] file:text-transparent"
                />
            </div>

            {/* COMMENTS */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Comments
              </label>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full border border-slate-400 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

            </div>

            {/* BUTTON */}
            <button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition text-white py-4 rounded-xl font-semibold shadow-lg">
            Submit Request
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}