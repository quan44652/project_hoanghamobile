import styles from "./styles.module.scss";
import className from "classNames/bind";
import TopNavigation from "../../Layout/Components/TopNavigation/TopNavigation";
import SideBar from "../../Layout/Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiUserCircle, BiUser, BiHistory } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineImport } from "react-icons/ai";

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
    name: "Thông tin tài khoản",
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

const Account = () => {
  return (
    <div>
      <TopNavigation />
      <div className={cx("wrapper")}>
        <SideBar menu={menu} />
        <div className={cx("content")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Account;
