import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/san-pham" element={<ProductListPage />} />
        <Route path="/san-pham/1" element={<ProductDetailPage />} />
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
        <Route path="/admin" element={<AdminProduct />}></Route>
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
