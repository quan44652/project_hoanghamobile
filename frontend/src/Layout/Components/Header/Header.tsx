import React from "react";
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

import Tippy from "@tippyjs/react/headless";

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
          <Tippy
            placement={"bottom"}
            interactive
            // visible
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex={-1} {...attrs}>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <div className={cx("search-item")}>
                  <div className={cx("avata")}>
                    <img
                      src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("info")}>
                    <h4>
                      Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A
                    </h4>
                    <span>21,890,000 ₫</span>
                  </div>
                </div>
                <p className={cx("search-name")}>
                  Hiển thị kết quả tìm kiếm cho <strong>quan</strong>
                </p>
              </div>
            )}
          >
            <div className={cx("search-box")}>
              <form action="" className={cx("search-form")}>
                <input type="text" placeholder="Hôm nay bạn cần tìm gì?" />
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
          </Tippy>
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
