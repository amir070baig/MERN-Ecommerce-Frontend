import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import OrderHistory from "./pages/OrderHistory";
import ProductForm from "./pages/admin/ProductForm";
import AdminRoute from "./pages/AdminRoute";

const Home = () => (
  <div className="text-center mt-10">
    <h1 className="text-2xl font-bold">Welcome to MERN Ecommerce 🛒</h1>
    <div className="mt-4 space-x-4">
      <Link to="/register" className="text-blue-600">Register</Link>
      <Link to="/login" className="text-blue-600">Login</Link>
      <Link to="/products">Products</Link>
    </div>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="products" element={<ManageProducts />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
      </Route>

    </Routes>
  );
}
