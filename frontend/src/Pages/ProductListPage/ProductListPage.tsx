import React from "react";
import Footer from "../../Layout/Components/Footer/Footer";
import Navbar from "../../Layout/Components/Navbar/Navbar";
import TopNavigation from "../../Layout/Components/TopNavigation/TopNavigation";
import Header from "../../Layout/Components/Header/Header";
import ProductList from "../../Layout/Components/ProductList/ProductList";

const ProductListPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
};

export default ProductListPage;
