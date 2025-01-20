import React from "react";
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./../routes/ProtectedRoute";

import Home from "./../pages/Home";
import Filter from "./../pages/Filter";
import Contact from "./../pages/Contact";
import Advertise from "./../pages/Advertise";
import AboutUs from "./../pages/AboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/advertise" element={<Advertise />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
