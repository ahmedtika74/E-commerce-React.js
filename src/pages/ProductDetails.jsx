import ActionButton from "../components/ui/ActionButton";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../features/products/productSlice";
import { useEffect } from "react";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const productId = Number(useParams().id);
  const { currentProduct } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return !currentProduct ? (
    <div className="flex h-screen items-center justify-center">Loading...</div>
  ) : (
    <div className="container mx-auto mt-5 px-4 md:mt-10">
      {/* Breadcrumb navigation */}
      <div className="mb-5 flex items-center justify-start gap-1">
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
        <p className="font-medium text-slate-300">{currentProduct.title}</p>
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
            <ActionButton name={"Add to cart"} data={currentProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
