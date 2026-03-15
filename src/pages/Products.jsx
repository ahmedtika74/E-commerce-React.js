import { useSelector } from "react-redux";
import ProductCard from "../components/ui/ProductCard";
import SearchInput from "../components/ui/SearchInput";

export default function Products() {
  const { items, status } = useSelector((state) => state.products);
  const products = items.map((product) => {
    return <ProductCard key={product.id} data={product} />;
  });
  return status === "loading" ? (
    <div className="flex h-screen items-center justify-center">Loading...</div>
  ) : status === "rejected" ? (
    <div className="flex h-screen items-center justify-center">
      Failed to load products.
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center p-3">
      <h2 className="text-2xl font-bold md:text-4xl">Our Products</h2>
      <div className="my-2 w-3/4 rounded-lg border border-slate-700 bg-slate-800/50 md:my-5 md:w-1/2">
        <SearchInput />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products}
      </div>
    </div>
  );
}
