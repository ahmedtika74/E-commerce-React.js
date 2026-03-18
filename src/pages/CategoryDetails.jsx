import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { fetchCategory } from "../features/products/productSlice";
import SearchInput from "../components/ui/SearchInput";
import ProductCard from "../components/ui/ProductCard";
import Pagination from "../components/ui/Pagination";

export default function CategoryDetails() {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { category, categoryStatus } = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  //   fetch data
  useEffect(() => {
    dispatch(fetchCategory(categoryName));
  }, [categoryName, dispatch]);

  //   Search filter
  const filteredCategory = useMemo(() => {
    const data = Array.isArray(category) ? category : [];
    if (!searchQuery) return data;
    return data.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [category, searchQuery]);

  //   Pagination needs
  const itemsPerPage = 10;

  const totalPages = useMemo(
    () => Math.ceil(filteredCategory.length / itemsPerPage),
    [filteredCategory, itemsPerPage],
  );

  const visibleProducts = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredCategory.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCategory, page, itemsPerPage]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-white md:text-5xl">
        {categoryName.toUpperCase()} Products
      </h2>

      {/* Search */}
      <div className="my-2 w-3/4 rounded-lg border border-slate-700 bg-slate-800/50 md:my-5 md:w-1/2">
        <SearchInput
          search={searchQuery}
          setSearch={setSearchQuery}
          setCurrentPage={setPage}
        />
      </div>

      {categoryStatus === "loading" ? (
        <div className="flex h-[70vh] items-center justify-center">
          Loading {categoryName.toUpperCase()}...
        </div>
      ) : (
        <>
          <div className="grid h-fit grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))
            ) : (
              <p className="col-span-full py-20 text-center text-slate-400">
                No products match your search.
              </p>
            )}
          </div>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
}
