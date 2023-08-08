import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./Components/GlobalStyles/GlobalStyles.scss";
import HomePage from "./Pages/Home/Home";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Order from "./Pages/Order/Order";
import Account from "./Pages/Account/Account";
import YourOrderList from "./Pages/Account/OrderList";
import History from "./Pages/Account/History";
import Info from "./Pages/Account/Info";
import Wishlist from "./Pages/Account/Wishlist";

import { BiSolidUpArrow } from "react-icons/bi";
import Button from "./Components/Button/Button";
import Login from "./Pages/Auth/Login";
import Regester from "./Pages/Auth/Regester";
import Forget from "./Pages/Auth/Forget";
import Dashboard from "./Pages/Account/Dashboard";
import AdminProduct from "./Admin/Products/AdminProduct";
import AdminDashboard from "./Admin/AdminDashboard";
import AddProduct from "./Admin/Products/AddProduct";
import TopNavigation from "./Layout/Components/TopNavigation/TopNavigation";
import EditCategory from "./Admin/Category/EditCategory";
import AdminCategory from "./Admin/Category/AdminCategory";
import AddCategory from "./Admin/Category/AddCategory";
import AddPromotion from "./Admin/Promotions/AddPromotion";
import EditPromotion from "./Admin/Promotions/EditPromotion";
import AdminColor from "./Admin/Colors/AdminColor";
import AddColor from "./Admin/Colors/AddColor";
import EditColor from "./Admin/Colors/EditColor";
import AdminOrders from "./Admin/Orders/AdminOrders";
import AdminUsers from "./Admin/User/AdminUsers";
import AdminVersion from "./Admin/Versions/AdminVersion";
import AddVersion from "./Admin/Versions/AddVersion";
import EditVersion from "./Admin/Versions/EditVersion";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScrollY);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Account />}>
          <Route path="order" element={<YourOrderList />} />
          <Route path="history" element={<History />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="info" element={<Info />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="products" element={<AdminProduct />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditCategory />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/edit/:id" element={<EditCategory />} />
          <Route path="promotions" element={<AdminCategory />} />
          <Route path="promotions/add" element={<AddPromotion />} />
          <Route path="promotions/edit/:id" element={<EditPromotion />} />
          <Route path="colors" element={<AdminColor />} />
          <Route path="colors/add" element={<AddColor />} />
          <Route path="colors/edit/:id" element={<EditColor />} />
          <Route path="versions" element={<AdminVersion />} />
          <Route path="versions/add" element={<AddVersion />} />
          <Route path="versions/edit/:id" element={<EditVersion />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>

      {isVisible && (
        <Button
          _onClick={handleClick}
          type="backtotop"
          icon={<BiSolidUpArrow />}
        />
      )}
    </div>
  );
}

export default App;
