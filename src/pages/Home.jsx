import ActionButton from "../components/ui/ActionButton";
import ProductCard from "../components/ui/ProductCard";
import { useSelector } from "react-redux";
import { Truck, ShieldCheck, Award } from "lucide-react";

export default function Home() {
  const { items } = useSelector((state) => state.products);
  const featuredItems = items.slice(60, 64);
  return (
    <div>
      {/* Hero */}
      <div className="relative z-0 container mx-auto mt-5 flex min-h-[80vh] flex-col items-center justify-center border-b border-b-slate-500/50 bg-slate-950 p-4 md:mt-10">
        <div className="absolute top-1/2 left-1/2 -z-1 h-72 w-72 -translate-x-[50%] -translate-y-[50%] bg-indigo-600/20 blur-[120px]"></div>
        <h2 className="text-3xl font-black tracking-tighter md:text-6xl">
          REDEFINE YOUR
          <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text pl-2 text-transparent md:pl-3">
            STYLE
          </span>
        </h2>
        <p className="mt-3 max-w-xl text-center text-slate-400 md:mt-5 md:text-lg">
          Explore our curated collection of premium essentials designed for the
          modern individual.
        </p>
        <div className="mt-3 md:mt-5">
          <ActionButton name="Shop the Collection" />
        </div>
      </div>
      {/* Featured Categories */}
      <div className="container mx-auto mt-10 border-b border-b-slate-500/50 p-4 pb-20 md:mt-17">
        <h2 className="mb-2 text-center text-2xl font-bold underline md:mb-5 md:text-4xl">
          Featured Products
        </h2>
        <p className="text-center text-slate-500 md:text-xl">
          Our top picks for the season
        </p>
        <div className="mt-7 grid grid-cols-2 gap-6 md:mt-20 md:grid-cols-3 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
      {/* Why Us */}
      <div className="container mx-auto mt-10 border-b border-b-slate-500/50 p-4 pb-20 md:mt-17">
        <h2 className="mb-2 text-center text-2xl font-bold underline md:mb-5 md:text-4xl">
          Why Choose Us?
        </h2>
        <div className="pt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900">
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/10"></div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                  <Truck size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
                  Fast Global Shipping
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Free delivery on all orders over $150. Tracked and secured
                  worldwide.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900">
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/10"></div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
                  Secure Payment
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Your transactions are protected by industry-leading encryption
                  technology.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900">
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/10"></div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                  <Award size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
                  Premium Quality
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  We use only the finest sustainable materials for our curated
                  collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
