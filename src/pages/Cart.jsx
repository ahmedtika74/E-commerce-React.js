import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";
import ProductCart from "../components/ui/ProductCart";
import ActionButton from "../components/ui/ActionButton";

export default function Cart() {
  const { items: cartProducts, totalAmount } = useSelector(
    (state) => state.cart,
  );

  return cartProducts.length === 0 ? (
    <div className="flex h-[90vh] flex-col items-center justify-center">
      <ShoppingCartIcon className="mb-4 h-25 w-25 animate-pulse" />
      <h2 className="text-2xl font-bold text-white">Your cart is empty</h2>
      <p className="my-4 text-slate-500">
        Looks like you haven't added anything yet.
      </p>
      <Link
        to="/products"
        className="rounded-lg bg-indigo-600 px-6 py-2 font-bold transition hover:bg-indigo-700"
      >
        Go Shopping
      </Link>
    </div>
  ) : (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart Products */}
        <div className="flex-1 space-y-4">
          {cartProducts.map((product) => (
            <ProductCart key={product.id} data={product} />
          ))}
        </div>

        {/* Cart Summary */}
        <div className="h-fit w-full rounded-xl border border-slate-700 bg-slate-800/60 p-6 lg:w-80">
          <h2 className="mb-4 text-xl font-bold">Summary</h2>
          <div className="space-y-2 border-b border-slate-700 pb-4">
            {/* Subtotal */}
            <div className="flex justify-between">
              <span className="text-slate-400">Subtotal</span>
              <span>{totalAmount.toFixed(2)}$</span>
            </div>
            {/* Shipping */}
            <div className="flex justify-between">
              <span className="text-slate-400">Shipping</span>
              <span>10.00$</span>
            </div>
            {/* Tax */}
            <div className="flex justify-between">
              <span className="text-slate-400">Tax (5%)</span>
              <span>{(totalAmount * 0.05).toFixed(2)}$</span>
            </div>
          </div>
          {/* Total */}
          <div className="mt-4 mb-6 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-indigo-400">
              {(totalAmount + 10 + totalAmount * 0.05).toFixed(2)}$
            </span>
          </div>

          <ActionButton
            name={"Checkout"}
            onClick={() => {
              alert("Checkout Try!");
            }}
          />
        </div>
      </div>
    </div>
  );
}
