import ActionButton from "../components/ui/ActionButton";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, fetchSimilar } from "../features/products/productSlice";
import { useEffect } from "react";
import { addItem } from "../features/cart/cartSlice";
import ProductCard from "../components/ui/ProductCard";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const productId = Number(useParams().id);
  const { currentProduct, productStatus, similar, similarStatus } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProduct(productId));
    dispatch(fetchSimilar(productId));
  }, [dispatch, productId]);

  return productStatus === "loading" ? (
    <div className="flex h-[70vh] items-center justify-center">Loading...</div>
  ) : productStatus === "rejected" ? (
    <div>failed to fetch</div>
  ) : (
    <div className="container mx-auto mt-5 px-4 md:mt-10">
      {/* Breadcrumb navigation */}
      <div className="mb-5 flex items-center justify-start gap-1 text-sm md:text-base">
        <Link
          className="text-slate-500 transition-all hover:text-white hover:underline"
          to={"/"}
        >
          Home
        </Link>
        &gt;
        <Link
          className="text-slate-500 transition-all hover:text-white hover:underline"
          to={"/products"}
        >
          Products
        </Link>
        &gt;
        <Link
          className="text-slate-500 uppercase transition-all hover:text-white hover:underline"
          to={`/categories/${currentProduct.category}`}
        >
          {currentProduct.category}
        </Link>
        &gt;
        <p className="line-clamp-1 font-medium text-slate-300">
          {currentProduct.title}
        </p>
      </div>
      {/* Product Data */}
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-slate-800/40 lg:w-1/3">
          <img
            loading="lazy"
            src={currentProduct.imageUrl}
            alt={currentProduct.title}
            className="h-full w-full object-cover"
          />
        </div>
        {/* Details */}
        <div className="flex flex-col lg:w-2/3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold md:text-4xl">
              {currentProduct.title}
            </h2>
            <span className="text-2xl font-bold text-indigo-400">
              {currentProduct.price}$
            </span>
          </div>
          <p className="mt-5 flex-1 text-justify leading-relaxed text-slate-400">
            {currentProduct.description}
          </p>
          <div className="mt-5 w-full self-end md:w-[30%] lg:mt-auto lg:w-[20%]">
            <ActionButton
              name={"Add to cart"}
              onClick={() => {
                dispatch(addItem(currentProduct));
              }}
            />
          </div>
        </div>
      </div>
      {/* Similar Products */}
      <div className="container mx-auto mt-10 p-4 pb-10 md:mt-17">
        <h2 className="mb-2 text-center text-2xl font-bold underline md:mb-5 md:text-4xl">
          Similar Products
        </h2>
        <p className="text-center text-slate-500 md:text-xl">
          Similar products picks for you
        </p>

        {similarStatus === "loading" ? (
          <div className="flex h-[50vh] w-full items-center justify-center">
            Loading...
          </div>
        ) : similarStatus === "rejected" ? (
          <div className="flex h-[50vh] w-full items-center justify-center">
            Failed to load products. Please refresh.
          </div>
        ) : (
          <div className="mt-7 grid grid-cols-2 gap-6 md:mt-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {similar.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
