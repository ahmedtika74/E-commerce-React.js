import { useSelector } from "react-redux";
import ProductCart from "../components/ui/ProductCart";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.items);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart Products */}
        <div className="flex-1 space-y-4">
          {cartProducts.map((product) => (
            <ProductCart data={product} />
          ))}
        </div>

        {/* Cart Summary */}
        <div className="h-fit w-full rounded-xl border border-slate-700 bg-slate-800/60 p-6 lg:w-80">
          <h2 className="mb-4 text-xl font-bold">Summary</h2>
          <div className="space-y-2 border-b border-slate-700 pb-4">
            <div className="flex justify-between">
              <span className="text-slate-400">Subtotal</span>
              <span>$120</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-indigo-400">$120</span>
          </div>
          <button className="mt-6 w-full cursor-pointer rounded-lg bg-indigo-600 py-3 font-bold transition hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
