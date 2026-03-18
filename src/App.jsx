import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryDetailes from "./pages/CategoryDetails";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="mb-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/:categoryName"
          element={<CategoryDetailes />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
