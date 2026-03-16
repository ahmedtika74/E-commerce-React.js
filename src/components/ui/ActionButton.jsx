import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

export default function ActionButton({ name, data }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addItem(data));
      }}
      className="mt-auto w-full cursor-pointer rounded-lg bg-indigo-600 py-2 font-semibold transition hover:bg-indigo-700"
    >
      {name}
    </button>
  );
}
