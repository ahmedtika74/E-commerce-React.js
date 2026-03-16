import { useSelector } from "react-redux";
import { useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import SearchInput from "../components/ui/SearchInput";

export default function Products() {
  const { items, status, error } = useSelector((state) => state.products);

  // State for filter
  const [searchQ, setSearchQ] = useState("");
  // function for Search
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQ.toLocaleLowerCase()),
  );

  // Pagination needs
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const maxVisibleButtons = 3;
  let startButton = Math.max(
    1,
    currentPage - Math.floor(maxVisibleButtons / 2),
  );
  let endButton = Math.min(totalPages, startButton + maxVisibleButtons - 1);
  if (endButton - startButton + 1 < maxVisibleButtons) {
    startButton = Math.max(1, endButton - maxVisibleButtons + 1);
  }
  const buttonNumbers = [];
  for (let i = startButton; i <= endButton; i++) {
    buttonNumbers.push(i);
  }
  const products = currentItems.map((product) => {
    return <ProductCard key={product.id} data={product} />;
  });
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return status === "loading" ? (
    // Trying to fetch data from API
    <div className="flex h-screen items-center justify-center">Loading...</div>
  ) : status === "rejected" ? (
    // Failed to fetch data from API
    <div className="flex h-screen items-center justify-center">{error}</div>
  ) : (
    // Display the data from API
    <>
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-3">
        <h2 className="text-2xl font-bold md:text-4xl">Our Products</h2>
        {/* Search */}
        <div className="my-2 w-3/4 rounded-lg border border-slate-700 bg-slate-800/50 md:my-5 md:w-1/2">
          <SearchInput
            search={searchQ}
            setSearch={setSearchQ}
            setCurrentPage={setCurrentPage}
          />
        </div>
        {/* Products */}
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.length ? (
            products
          ) : (
            <p className="col-span-full text-center text-slate-400">
              No products found
            </p>
          )}
        </div>
      </div>
      {/* Pagination Buttons */}
      <div className="mt-8 flex justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
          className="rounded-lg bg-slate-800 px-4 py-2 disabled:opacity-50"
        >
          &lt;
        </button>
        {buttonNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              paginate(number);
            }}
            className={`rounded-lg border px-4 py-2 transition-all ${
              currentPage === number
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
          className="rounded-lg bg-slate-800 px-4 py-2 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </>
  );
}
