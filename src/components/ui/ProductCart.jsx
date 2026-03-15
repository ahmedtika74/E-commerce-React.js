export default function ProductCart({ data }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/40 p-4">
      <img src="URL" className="h-20 w-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="font-medium">Product Name</h3>
        <p className="font-bold text-indigo-400">$30</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="cursor-pointer rounded bg-slate-700 px-2">-</button>
        <span>1</span>
        <button className="cursor-pointer rounded bg-slate-700 px-2">+</button>
      </div>
    </div>
  );
}
