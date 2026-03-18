import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategoryName } from "../features/products/productSlice";
import {
  Cpu,
  Gamepad2,
  MemoryStick,
  CircuitBoard,
  HardDrive,
  Monitor,
  Box,
  Mouse,
  Keyboard,
  Speaker,
  Printer,
  Laptop,
  Headset,
  LayoutGrid,
} from "lucide-react";
export default function Categories() {
  const { categories, categoryNameStatus } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryName());
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getCategoryIcon = (name) => {
    const iconMap = {
      cpu: <Cpu size={40} />,
      gpu: <Gamepad2 size={40} />,
      ram: <MemoryStick size={40} />,
      motherboard: <CircuitBoard size={40} />,
      storage: <HardDrive size={40} />,
      screen: <Monitor size={40} />,
      case: <Box size={40} />,
      mouse: <Mouse size={40} />,
      keyboard: <Keyboard size={40} />,
      speakers: <Speaker size={40} />,
      printers: <Printer size={40} />,
      laptops: <Laptop size={40} />,
      accessories: <Headset size={40} />,
    };

    return iconMap[name] || <LayoutGrid size={40} />;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Browse Categories
        </h2>
        <p className="mt-3 text-slate-400">
          Find exactly what you need from our wide range of products
        </p>
      </div>
      {categoryNameStatus === "loading" ? (
        <div className="flex h-[70vh] items-center justify-center">
          Loading Categories...
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/categories/${category.name}`}
              onClick={scrollToTop}
              className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:bg-slate-700 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <span className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                {getCategoryIcon(category.name)}
              </span>

              <h3 className="text-lg font-bold text-white transition-colors group-hover:text-indigo-400">
                {category.name}
              </h3>

              <span className="mt-2 rounded-full bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-400">
                {category.count} Products
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
