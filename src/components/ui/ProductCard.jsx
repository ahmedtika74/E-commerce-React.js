import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-slate-800/50">
      <Link
        onClick={() => {
          window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
        to={`/products/${data.id}`}
      >
        <div className="relative flex h-full w-full cursor-pointer flex-col overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <img
              loading="lazy"
              src={data.imageUrl}
              alt={data.title}
              className="h-full w-full object-cover transition-all duration-300 hover:scale-110 hover:-rotate-6"
            />
          </div>
          <div className="flex flex-1 flex-col p-3">
            <div className="flex items-center justify-between">
              <p className="line-clamp-1 text-base font-medium">{data.title}</p>
              <span className="absolute top-2 left-2 rounded-full bg-black/50 px-3 font-bold text-white backdrop-blur-md">
                ${data.price}
              </span>
            </div>
            <p className="mt-3 line-clamp-2 text-sm text-slate-400">
              {data.description}
            </p>
          </div>
        </div>
      </Link>
      <div className="mt-auto p-3">
        <ActionButton name={"Add to cart"} data={data} />
      </div>
    </div>
  );
}
