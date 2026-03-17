import { Link } from "react-router-dom";
import ActionButton from "../components/ui/ActionButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="bg-linear-to-br from-indigo-500 to-purple-700 bg-clip-text text-9xl font-black tracking-tighter text-transparent">
        404
      </h1>

      <div className="mt-4">
        <h2 className="text-2xl font-bold text-white md:text-4xl">
          Lost in Space?
        </h2>
        <p className="mt-2 text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <Link
        to="/"
        className="mt-8 rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
      >
        Back to Home
      </Link>

      <div className="absolute -z-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-[120px]"></div>
    </div>
  );
}
