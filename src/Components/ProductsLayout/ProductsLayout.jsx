import React from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer/Footer";
import ProductsMainSection from "../ProductsMainSection/ProductsMainSection";

export function ProductsLayout() {
  return (
    <>
      <CustomNavbar />
      <ProductsMainSection />
      <Footer />
    </>
  );
}
