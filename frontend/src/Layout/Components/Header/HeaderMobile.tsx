import React from "react";
import { BsList } from "react-icons/bs";
import styles from "./Header.module.scss";
import className from "classNames/bind";
import { AiFillCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Search";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const cx = className.bind(styles);
const HeaderMobile = () => {
  return (
    <div className={cx("header-mobile")}>
      <header>
        <div className={cx("menu")}>
          <BsList />
        </div>
        <div className={cx("logo")}>
          <img
            src="https://hoanghamobile.com/Content/web/img/logo-text.png"
            alt=""
          />
        </div>
        <div className={cx("cart")}>
          <AiOutlineShoppingCart />
          <span>1</span>
        </div>
      </header>
      <div className={cx("search-mobile")}>
        <Search />
      </div>

      <div className={cx("modal")}>
        <div className={cx("overlay")}>
          <div className={cx("modal-menu")}>
            <span className={cx("close")}>
              <AiFillCloseCircle />
            </span>
            <div className={cx("account")}>
              <div className={cx("info")}>
                <div className={cx("avata")}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                    alt=""
                  />
                  {/* <span>A</span> */}
                </div>
                <div className={cx("name")}>
                  <h4>Nguyễn Anh Quân</h4>
                  <div className={cx("change-avata")}>
                    <label>
                      Xin chào <strong>Anh Quân</strong>
                    </label>
                    <p>Đăng xuất</p>
                  </div>
                </div>
              </div>
            </div>
            <ul className={cx("modal-menu--list")}>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src="https://www.shutterstock.com/image-vector/product-orientation-enhancement-line-icon-260nw-784340251.jpg"
                    alt=""
                  />
                  <span>Sản phẩm</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
