import { Search } from "lucide-react";

export default function SearchInput({ search, setSearch, setCurrentPage }) {
  function handleSearch(e) {
    setCurrentPage(1);
    setSearch(e.target.value);
  }

  return (
    <div className="flex items-center">
      <Search className="pl-3 text-slate-500" />
      <input
        value={search}
        onChange={handleSearch}
        type="search"
        className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-[12px]"
        placeholder="Search products ..."
      />
    </div>
  );
}
