import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateProducts from "../pages/CreateProducts";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import ProductEdit from "../pages/ProductEdit";

export default function Navigation() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/create" element={<CreateProducts />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />
      </Routes>
    </>
  );
}
