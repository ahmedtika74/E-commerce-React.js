import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

export default function ActionButton({ name, data, onClick }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      dispatch(addItem(data));
    }
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-auto w-full cursor-pointer rounded-lg border border-indigo-600 bg-indigo-600 p-3 py-2 font-semibold transition hover:bg-indigo-700"
    >
      {name}
    </button>
  );
}
