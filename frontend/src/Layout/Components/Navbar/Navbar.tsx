import React from "react";
import classNames from "classNames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Navbar = () => {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("container")}>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className={cx("navbar-icon")}
            ></img>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className={cx("navbar-icon")}
            ></img>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className={cx("navbar-icon")}
            ></img>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className={cx("navbar-icon")}
            ></img>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className={cx("navbar-icon")}
            ></img>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className={cx("navbar-icon")}
            ></img>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <img
              src="https://e7.pngegg.com/pngimages/770/95/png-clipart-hourglass-computer-icons-time-hourglass-angle-rectangle.png"
              className={cx("navbar-icon")}
            ></img>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
