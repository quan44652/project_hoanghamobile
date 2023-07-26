import classNames from "classNames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import TopNavigation from "../TopNavigation/TopNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTruckFast,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import Search from "./Search";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <TopNavigation />
      <div className={cx("header")}>
        <div className={cx("container")}>
          <div className={cx("logo")}>
            <Link to={"/"}>
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-text.png  "
                alt=""
              ></img>
            </Link>
          </div>
          <Search />
          <div className={cx("order-tool")}>
            <div className={cx("check-order")}>
              <span className={cx("icon")}>
                <FontAwesomeIcon icon={faTruckFast} />
              </span>
              <span className={cx("text")}>Kiểm tra đơn hàng</span>
            </div>
            <Link to={"/cart"} className={cx("cart")}>
              <span className={cx("icon")}>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span className={cx("cart-total")}>9</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
