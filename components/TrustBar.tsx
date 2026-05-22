export default function TrustBar() {
  return (
    <section className="bg-white py-5 border-y">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-slate-500 font-semibold uppercase tracking-wider mb-8">
          Compatible With Industry Standard CAD Tools
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">

          <img
            src="/logos/solidworks.svg"
            alt="SolidWorks"
            className="h-10 opacity-70 hover:opacity-100 transition"
          />

          <img
            src="/logos/autodesk.svg"
            alt="Autodesk"
            className="h-10 opacity-70 hover:opacity-100 transition"
          />

          <img
            src="/logos/inventor.svg"
            alt="Inventor"
            className="h-10 opacity-70 hover:opacity-100 transition"
          />
          <img
            src="/logos/step.svg"
            alt="Inventor"
            className="h-10 opacity-70 hover:opacity-100 transition"
          />          <img
            src="/logos/iges.svg"
            alt="Inventor"
            className="h-10 opacity-70 hover:opacity-100 transition"
          />
        </div>

      </div>

    </section>
  );
}