import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

// Pages
import Home from "../pages/Home";
import Filter from "../pages/Filter";
import Contact from "../pages/Contact";
import Advertise from "../pages/Advertise";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import Directory from "../pages/Directory";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivacyPolicy from "../pages/PrivacyPolicies";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Routes with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/filter"
          element={
            <MainLayout>
              <Filter />
            </MainLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/advertise"
          element={
            <MainLayout>
              <Advertise />
            </MainLayout>
          }
        />
        <Route
          path="/directory"
          element={
            <MainLayout>
              <Directory />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />

        {/* Routes with AuthLayout */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* 404 Not Found Route */}
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}
