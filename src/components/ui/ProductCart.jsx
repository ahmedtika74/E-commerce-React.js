import {
  addItem,
  reduceQuantity,
  removeItem,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductCart({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-800/40 p-4 text-sm md:text-base">
      <img
        loading="lazy"
        src={data.imageUrl}
        alt={data.title}
        className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
      />
      <div className="flex-1">
        <h3 className="font-medium">{data.title}</h3>
        <p className="font-bold text-indigo-400">{data.price}$</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-4 rounded-full border border-slate-700 bg-slate-900/50 p-1 px-2">
          <button
            onClick={() => dispatch(reduceQuantity(data))}
            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-slate-700 transition-all hover:bg-red-500/20 hover:text-red-500 md:h-8 md:w-8"
          >
            -
          </button>

          <span className="text-center font-bold md:text-lg">
            {data.quantity}
          </span>

          <button
            onClick={() => dispatch(addItem(data))}
            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-slate-700 transition-all hover:bg-green-500/20 hover:text-green-400 md:h-8 md:w-8"
          >
            +
          </button>
        </div>
        <div
          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-slate-700 transition-all hover:bg-red-500/20 hover:text-red-500 md:h-8 md:w-8"
          onClick={() => {
            dispatch(removeItem(data));
            toast.error("Item removed");
          }}
        >
          <Trash />
        </div>
      </div>
    </div>
  );
}
