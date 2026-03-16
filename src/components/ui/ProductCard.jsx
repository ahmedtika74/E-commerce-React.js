import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

export default function ProductCard({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-slate-800/50">
      <div className="aspect-square overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="h-full w-full object-cover transition-all duration-300 hover:scale-110 hover:-rotate-6"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-center justify-between">
          <p className="line-clamp-1 text-base font-medium">{data.name}</p>
          <span className="absolute top-2 left-2 rounded-full bg-black/50 px-3 font-bold text-white backdrop-blur-md">
            {data.price}$
          </span>
        </div>
        <p className="my-3 line-clamp-2 text-sm text-slate-400">
          {data.description}
        </p>
        <button
          onClick={() => {
            dispatch(addItem(data));
          }}
          className="mt-auto w-full cursor-pointer rounded-lg bg-indigo-600 py-2 font-semibold transition hover:bg-indigo-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
