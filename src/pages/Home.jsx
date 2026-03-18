import ActionButton from "../components/ui/ActionButton";
import ProductCard from "../components/ui/ProductCard";
import HeroStats from "../components/ui/HeroStats";
import FeatureCard from "../components/ui/FeatureCard";
import { useDispatch, useSelector } from "react-redux";
import { Truck, ShieldCheck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchFeatured } from "../features/products/productSlice";

export default function Home() {
  const { featured } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatured());
  }, [dispatch]);
  const latestModels = featured.premiumProducts.slice(0, 4);
  return (
    <div>
      {/* Hero */}
      <div className="relative z-0 container mx-auto mt-5 grid min-h-[80vh] grid-cols-1 items-center justify-center border-b border-b-slate-500/50 bg-slate-950 p-4 md:mt-10 lg:grid-cols-2">
        {/* Background Effects */}
        <div className="absolute -z-1 h-screen w-screen">
          <div className="absolute top-0 left-0 h-80 w-80 -translate-x-[50%] -translate-y-[50%] animate-pulse bg-indigo-600/20 blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-[50%] animate-pulse bg-purple-600/20 blur-[120px]"></div>
          <div className="absolute top-0 right-0 h-80 w-80 -translate-x-[50%] -translate-y-[50%] animate-pulse bg-cyan-500/10 blur-[120px]"></div>
        </div>
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-5xl">
            REDEFINE YOUR
            <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text pl-2 text-3xl font-black text-transparent md:pl-3 md:text-6xl">
              STYLE
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-center text-slate-400 md:mt-7 md:text-lg">
            Explore our curated collection of premium essentials designed for
            the modern individual.
          </p>
          <div className="mt-5 flex w-full items-center justify-center gap-3 md:mt-7 md:w-1/2">
            <Link to="/products" className="w-full">
              <ActionButton name="Shop Now" />
            </Link>
            <Link
              to="/categories"
              className="mt-auto w-full cursor-pointer rounded-lg border border-indigo-600 p-3 py-2 text-center font-semibold transition hover:bg-indigo-700"
            >
              Browse Categories
            </Link>
          </div>
          {/* Stats */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:mt-24">
            <HeroStats number="10K+" label="Premium Products" />
            <div className="hidden h-8 w-px bg-slate-800 md:block"></div>
            <HeroStats number="50K+" label="Happy Customers" />
            <div className="hidden h-8 w-px bg-slate-800 md:block"></div>
            <HeroStats isRate="★" number="4.9" label="Global Rating" />
          </div>
        </div>
        {/* Right Side */}
        <div className="relative mt-20 flex items-center justify-center lg:h-150">
          <div className="animate-float relative z-10 w-[80%] max-w-100">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/40 p-2 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070"
                alt="Featured Product"
                className="h-full w-full rounded-3xl object-cover"
              />
              <div className="absolute -right-3 bottom-6 rounded-xl border border-white/10 bg-slate-900/90 p-2 pr-5 backdrop-blur-xl md:bottom-6 md:p-4">
                <p className="text-[8px] font-bold tracking-widest text-indigo-400 uppercase md:text-[10px]">
                  Limited Edition
                </p>
                <p className="text-[10px] font-bold text-white md:text-sm">
                  Urban Stealth One
                </p>
                <p className="mt-0.5 text-[9px] text-slate-400 md:mt-1 md:text-xs">
                  $199.00
                </p>
              </div>
            </div>
            <div className="mx-auto mt-10 h-4 w-1/2 rounded-[100%] bg-indigo-500/10 blur-xl"></div>
          </div>
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
          {latestModels.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
      {/* Why Us */}
      <div className="container mx-auto mt-10 p-4 pb-10 md:mt-17">
        <h2 className="mb-2 text-center text-2xl font-bold underline md:mb-5 md:text-4xl">
          Why Choose Us?
        </h2>
        <div className="pt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <FeatureCard
                icon={<Truck size={32} />}
                title="Fast Global Shipping"
                description="Free delivery on all orders over $150. Tracked and secured worldwide."
              />
              <FeatureCard
                icon={<ShieldCheck size={32} />}
                title="Secure Payment"
                description="Your transactions are protected by industry-leading encryption technology."
              />
              <FeatureCard
                icon={<Award size={32} />}
                title="Premium Quality"
                description="We use only the finest sustainable materials for our curated collections."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
