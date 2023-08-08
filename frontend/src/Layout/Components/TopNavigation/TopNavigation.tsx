import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as any));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    console.log(123);
  };

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

        {!user && (
          <li>
            {" "}
            <Link className={cx("navbar_link")} to={"/login"}>
              Đăng nhập
            </Link>
          </li>
        )}

        {user && (
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
                      <a onClick={() => handleLogout()} href={"/"}>
                        <span>
                          <AiOutlineImport />
                        </span>
                        Đăng xuất
                      </a>
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
                {user.user?.name}
              </button>
            </Tippy>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TopNavigation;
