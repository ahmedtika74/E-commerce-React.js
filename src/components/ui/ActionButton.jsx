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
      onClick={handleClick}
      className="mt-auto w-full cursor-pointer rounded-lg bg-indigo-600 py-2 font-semibold transition hover:bg-indigo-700"
    >
      {name}
    </button>
  );
}
