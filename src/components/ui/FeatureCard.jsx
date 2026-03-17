export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900">
      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/10"></div>
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}
