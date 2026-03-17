export default function HeroStats({ isRate, number, label }) {
  return (
    <div className="group flex flex-col items-center gap-1">
      <div className="flex items-center gap-2">
        <span className="text-sm text-yellow-500 md:text-lg">
          {isRate || ""}
        </span>
        <span className="text-2xl font-black text-white transition-transform group-hover:scale-110 md:text-3xl">
          {number}
        </span>
      </div>
      <span className="text-[10px] font-medium tracking-[0.3em] text-slate-500 uppercase">
        {label}
      </span>
    </div>
  );
}
