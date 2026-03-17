import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-black tracking-tighter text-white">
              TECH<span className="text-indigo-500"> STORE</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Crafting the future of modern fashion & technology with a focus on
              sustainable materials and timeless aesthetics.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-indigo-500 hover:text-white">
                <Facebook size={20} />
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-indigo-500 hover:text-white">
                <Instagram size={20} />
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-indigo-500 hover:text-white">
                <Twitter size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-500 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-slate-500 transition-colors hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-sm text-slate-500 transition-colors hover:text-white"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              Stay in the loop
            </h4>
            <p className="mt-2 text-[11px] text-slate-500">
              Get 15% off your first order by joining our newsletter.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs text-white transition-all placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
              />
              <button
                onClick={() => {
                  setEmail("");
                  alert("Subscribed Successfully!");
                }}
                className="w-full rounded-lg bg-indigo-600 py-2 text-xs font-bold text-white transition-all hover:bg-indigo-500 active:scale-95"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 md:flex-row">
          <p className="text-[10px] tracking-[0.3em] text-slate-600 uppercase">
            © 2026 Tech Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-[10px] tracking-widest text-slate-600 uppercase hover:text-slate-400"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-[10px] tracking-widest text-slate-600 uppercase hover:text-slate-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
