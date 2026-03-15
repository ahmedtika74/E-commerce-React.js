import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex items-center">
      <Search className="pl-3 text-slate-500" />
      <input
        type="search"
        className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-[12px]"
        placeholder="Search products ..."
      />
    </div>
  );
}
