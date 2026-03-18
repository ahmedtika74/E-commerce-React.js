import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAPI } from "../features/products/productSlice";
import SearchInput from "../components/ui/SearchInput";
import ProductCard from "../components/ui/ProductCard";
import Pagination from "../components/ui/Pagination";

export default function Products() {
  const { items, listStatus, listError, totalPages } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchAPI({ page, q: searchQuery }));
  }, [dispatch, page, searchQuery]);

  const products = items.map((product) => {
    return <ProductCard key={product.id} data={product} />;
  });

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Our Products
        </h2>
        {/* Search */}
        <div className="my-2 w-3/4 rounded-lg border border-slate-700 bg-slate-800/50 md:my-5 md:w-1/2">
          <SearchInput
            search={searchQuery}
            setSearch={setSearchQuery}
            setCurrentPage={setPage}
          />
        </div>
        {/* Products */}
        {listStatus === "loading" ? (
          // Trying to fetch data from API
          <div className="flex h-[70vh] items-center justify-center">
            Loading...
          </div>
        ) : listStatus === "rejected" ? (
          // Failed to fetch data from API
          <div className="flex h-screen items-center justify-center">
            {listError}
          </div>
        ) : (
          <div className="grid h-fit grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.length ? (
              products
            ) : (
              <p className="col-span-full text-center text-slate-400">
                No products found
              </p>
            )}
          </div>
        )}
      </div>

      {/* Pagination Buttons */}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
}
