import React from "react";
import SideBar from "../Layout/Components/SideBar/SideBar";
import { BiCategory, BiGitCompare } from "react-icons/bi";
import { AiFillCodeSandboxCircle, AiOutlineImport } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { MdDashboard, MdOutlineSell, MdColorLens } from "react-icons/md";
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
    url: "/admin/products",
    icon: () => <AiFillCodeSandboxCircle />,
    active: false,
  },
  {
    id: 3,
    name: "Danh mục",
    url: "/admin/category",
    icon: () => <BiCategory />,
    active: false,
  },
  // {
  //   id: 4,
  //   name: "Khuyến mãi",
  //   url: "/admin/promotions",
  //   icon: () => <MdOutlineSell />,
  //   active: false,
  // },
  {
    id: 5,
    name: "Đơn hàng",
    url: "/admin/orders",
    icon: () => <FaBoxOpen />,
    active: false,
  },
  // {
  //   id: 6,
  //   name: "Màu sắc",
  //   url: "/admin/colors",
  //   icon: () => <MdColorLens />,
  //   active: false,
  // },
  // {
  //   id: 7,
  //   name: "Phiên bản",
  //   url: "/admin/versions",
  //   icon: () => <BiGitCompare />,
  //   active: false,
  // },

  {
    id: 8,
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
