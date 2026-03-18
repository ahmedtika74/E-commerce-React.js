import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchInput({ search, setSearch, setCurrentPage }) {
  const [displayValue, setDisplayValue] = useState(search);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearch(displayValue);
    }, 500);
    return () => clearTimeout(debounce);
  }, [displayValue, setSearch]);

  return (
    <div className="flex items-center">
      <Search className="pl-3 text-slate-500" />
      <input
        value={displayValue}
        onChange={(e) => {
          setCurrentPage(1);
          setDisplayValue(e.target.value);
        }}
        type="search"
        className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-[12px]"
        placeholder="Search products ..."
      />
    </div>
  );
}
