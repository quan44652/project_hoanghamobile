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
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faLaptop} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faLaptop} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faLaptop} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
        <li>
          <Link className={cx("navbar-link")} to={"/"}>
            <span className={cx("navbar-icon")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            <span className={cx("navbar-name")}>Điện thoại</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
