import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Filter from "./../pages/Filter";
import Contact from "./../pages/Contact";
import Advertise from "./../pages/Advertise";
import AboutUs from "./../pages/AboutUs";
import NotFound from "./../pages/NotFound";
import ProductDetail from "./../pages/ProductDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/advertise" element={<Advertise />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
