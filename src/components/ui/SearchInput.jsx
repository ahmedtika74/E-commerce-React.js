import { Search } from "lucide-react";

export default function SearchInput({ search, setSearch }) {
  return (
    <div className="flex items-center">
      <Search className="pl-3 text-slate-500" />
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="search"
        className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-[12px]"
        placeholder="Search products ..."
      />
    </div>
  );
}
