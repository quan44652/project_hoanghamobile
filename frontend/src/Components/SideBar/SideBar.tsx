import React from "react";
import styles from "./SideBar.module.scss";
import className from "classNames/bind";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiUserCircle, BiUser, BiHistory } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineImport } from "react-icons/ai";

const cx = className.bind(styles);
const SideBar = () => {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Link to={"/"} className={cx("logo")}>
          <img
            src="https://hoanghamobile.com/Content/web/img/logo-text.png"
            alt=""
          />
        </Link>
        <div className={cx("info")}>
          <div className={cx("avata")}>
            {/* <img src="" alt="" /> */}
            <span>A</span>
          </div>

          <div className={cx("name")}>
            <h4>Nguyễn Anh Quân</h4>
            <div className={cx("change-avata")}>
              <label htmlFor="file-upload">
                <span>
                  <BiUser />
                </span>{" "}
                Thay đổi ảnh đại diện
              </label>
              <input id="file-upload" type="file" />
            </div>
          </div>
        </div>
      </header>
      <nav>
        <ul className={cx("menu")}>
          <li>
            <Link to={"/account/dashboard"}>
              <span>
                <MdDashboard />
              </span>
              Bảng điều khiển
            </Link>
          </li>
          <li>
            <Link to={"/account/info"} className={cx("active")}>
              <span>
                <BiUserCircle />
              </span>
              Thông tin tài khoản
            </Link>
          </li>
          <li>
            <Link to={"/account/order"}>
              <span>
                <FaBoxOpen />
              </span>
              Đơn hàng của bạn
            </Link>
          </li>
          <li>
            <Link to={"/account/history"}>
              <span>
                <BiHistory />
              </span>
              Lịch sử đặt hàng
            </Link>
          </li>
          <li>
            <Link to={"/account/wishlist"}>
              <span>
                <AiOutlineHeart />
              </span>
              Sản phẩm yêu thích
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <AiOutlineImport />
              </span>
              Đăng xuất
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
