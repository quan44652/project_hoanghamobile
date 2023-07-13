import React from "react";
import SideBar from "../Layout/Components/SideBar/SideBar";
import { BiHistory, BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineImport } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Outlet } from "react-router-dom";
import className from "classNames/bind";
import styles from "./style.module.scss";

const cx = className.bind(styles);
const menu = [
  {
    id: 1,
    name: "Bảng điều khiển",
    url: "/account/dashboard",
    icon: () => <MdDashboard />,
    active: true,
  },
  {
    id: 2,
    name: "Sản phẩm",
    url: "/account/info",
    icon: () => <BiUser />,
    active: false,
  },
  {
    id: 3,
    name: "Đơn hàng của bạn",
    url: "/account/order",
    icon: () => <FaBoxOpen />,
    active: false,
  },
  {
    id: 4,
    name: "Lịch sử đặt hàng",
    url: "/account/history",
    icon: () => <BiHistory />,
    active: false,
  },
  {
    id: 5,
    name: "Sản phẩm yêu thích",
    url: "/account/wishlist",
    icon: () => <AiOutlineHeart />,
    active: false,
  },
  {
    id: 6,
    name: "Đăng xuất",
    url: "/",
    icon: () => <AiOutlineImport />,
    active: false,
  },
];

const AdminDashboard = () => {
  return (
    <div>
      <SideBar menu={menu} />
      <div className={cx("content")}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
