import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAPI } from "./features/products/productSlice";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  return (
    <div className="mb-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-7xl font-black text-red-500 underline underline-offset-10">
              404 Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
