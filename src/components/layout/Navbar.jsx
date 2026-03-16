import { ShoppingCartIcon, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchInput from "../ui/SearchInput";

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto flex h-[10vh] items-center justify-between px-4 md:h-16">
        {/* Logo */}
        <h1 className="cursor-pointer text-2xl font-bold tracking-tighter text-white">
          TECH <span className="text-indigo-500">STORE</span>
        </h1>

        {/* NavLinks */}
        <ul
          className={`absolute ${isOpen ? "visible max-h-screen p-5 opacity-100" : "invisible h-0 opacity-0"} visible top-[10vh] left-0 flex w-full flex-col items-start gap-5 overflow-hidden bg-slate-900/80 pl-5 opacity-100 backdrop-blur-md transition-all duration-300 ease-in-out md:static md:flex md:h-fit md:w-fit md:translate-x-0 md:flex-row md:items-center md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          <li>
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/products"}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/categories"}
            >
              Categories
            </NavLink>
          </li>
        </ul>

        {/* Search */}
        <div className="hidden rounded-lg border border-slate-700 bg-slate-800/50 md:flex">
          <SearchInput />
        </div>

        {/* right side */}
        <div className="flex gap-3">
          {/* Cart */}
          <div className="relative">
            <Link to={"/cart"}>
              <ShoppingCartIcon className="h-6 w-6 cursor-pointer text-slate-300 transition-colors hover:text-indigo-400" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                {totalQuantity}
              </span>
            </Link>
          </div>
          {/* Menu */}
          {isOpen ? (
            <X
              className="md:hidden"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <Menu
              className="md:hidden"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
