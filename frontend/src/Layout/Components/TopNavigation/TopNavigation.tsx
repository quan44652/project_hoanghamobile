import React, { useState } from "react";
import styles from "./TopNavigation.module.scss";
import classNames from "classNames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { AiOutlineHeart, AiOutlineImport, AiOutlineUser } from "react-icons/ai";
import { BiHistory, BiUserCircle } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const cx = classNames.bind(styles);

const TopNavigation = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("navbar")}>
        <li>
          {" "}
          <Link className={cx("navbar_link")} to={"/"}>
            Bản mobile{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={cx("navbar_link")} to={"/"}>
            Giới thiệu{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={cx("navbar_link")} to={"/"}>
            Sản phẩm đã xem{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={cx("navbar_link")} to={"/"}>
            Trung tâm bảo hành{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={cx("navbar_link")} to={"/"}>
            Hệ thống 126 siêu thị{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={cx("navbar_link")} to={"/"}>
            Tuyển dụng{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={cx("navbar_link")} to={"/"}>
            Tra cứu đơn hàng{" "}
          </Link>
        </li>
        {!isLogin && (
          <li>
            {" "}
            <Link className={cx("navbar_link")} to={"/login"}>
              Đăng nhập
            </Link>
          </li>
        )}

        {isLogin && (
          <li>
            <Tippy
              placement={"bottom"}
              interactive
              trigger="mouseenter"
              render={(attrs) => (
                <div {...attrs}>
                  <ul className={cx("subnav")}>
                    <li>
                      <Link to={"/account/dashboard"}>
                        <span>
                          <MdDashboard />
                        </span>
                        Bảng điều khiển
                      </Link>
                    </li>
                    <li>
                      <Link to={"/account/info"}>
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
                </div>
              )}
            >
              <button className={cx("navbar_link")}>
                {" "}
                <span>
                  <AiOutlineUser />
                </span>{" "}
                Nguyễn Anh Quân{" "}
              </button>
            </Tippy>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TopNavigation;
