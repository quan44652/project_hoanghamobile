import React from "react";
import styles from "./ProductList.module.scss";
import classNames from "classNames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ProductList = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1 className={cx("title")}>ĐIỆN THOẠI NỔI BẬT</h1>
        <div className={cx("product-list")}>
          <div className={cx("product-item")}>
            <Tippy
              interactive={true}
              offset={[0, -220]}
              trigger="mouseenter"
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <Link to={"/san-pham"} className={cx("wrapper-promote")}>
                    <ul className={cx("promote")}>
                      <li>
                        <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                        toán qua VNPAY
                      </li>
                      <li>
                        <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                        500.000đ, duyệt nhanh chỉ 30s
                      </li>
                      <li>
                        <span>km</span> Thanh toán qua Moca tặng ngay đế sạc trị
                        giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) -
                        Số lượng có hạn
                      </li>
                    </ul>
                  </Link>
                </div>
              )}
            >
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img
                    src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                    alt=""
                  />
                </div>
                <div className={cx("img")}>
                  <img
                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/26/l19-0.png"
                    alt=""
                  />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={"/san-pham/1"}>
                    Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                    Chính hãng
                  </Link>
                  <span>
                    {" "}
                    <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                  </span>
                </div>
                <p className={cx("note")}>
                  <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                  <strong>và 5 km khác</strong>
                </p>
              </div>
            </Tippy>
          </div>
          <div className={cx("product-item")}>
            <Tippy
              interactive={true}
              offset={[0, -220]}
              trigger="mouseenter"
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <Link to={"/"} className={cx("wrapper-promote")}>
                    <ul className={cx("promote")}>
                      <li>
                        <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                        toán qua VNPAY
                      </li>
                      <li>
                        <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                        500.000đ, duyệt nhanh chỉ 30s
                      </li>
                      <li>
                        <span>km</span> Thanh toán qua Moca tặng ngay đế sạc trị
                        giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) -
                        Số lượng có hạn
                      </li>
                    </ul>
                  </Link>
                </div>
              )}
            >
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img
                    src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                    alt=""
                  />
                </div>
                <div className={cx("img")}>
                  <img
                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/26/l19-0.png"
                    alt=""
                  />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={"/san-pham/1"}>
                    Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                    Chính hãng
                  </Link>
                  <span>
                    {" "}
                    <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                  </span>
                </div>
                <p className={cx("note")}>
                  <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                  <strong>và 5 km khác</strong>
                </p>
              </div>
            </Tippy>
          </div>
          <div className={cx("product-item")}>
            <Tippy
              interactive={true}
              offset={[0, -220]}
              trigger="mouseenter"
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <Link to={"/"} className={cx("wrapper-promote")}>
                    <ul className={cx("promote")}>
                      <li>
                        <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                        toán qua VNPAY
                      </li>
                      <li>
                        <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                        500.000đ, duyệt nhanh chỉ 30s
                      </li>
                      <li>
                        <span>km</span> Thanh toán qua Moca tặng ngay đế sạc trị
                        giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) -
                        Số lượng có hạn
                      </li>
                    </ul>
                  </Link>
                </div>
              )}
            >
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img
                    src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                    alt=""
                  />
                </div>
                <div className={cx("img")}>
                  <img
                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/26/l19-0.png"
                    alt=""
                  />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={"/san-pham/1"}>
                    Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                    Chính hãng
                  </Link>
                  <span>
                    {" "}
                    <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                  </span>
                </div>
                <p className={cx("note")}>
                  <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                  <strong>và 5 km khác</strong>
                </p>
              </div>
            </Tippy>
          </div>
          <div className={cx("product-item")}>
            <Tippy
              interactive={true}
              offset={[0, -220]}
              trigger="mouseenter"
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <Link to={"/"} className={cx("wrapper-promote")}>
                    <ul className={cx("promote")}>
                      <li>
                        <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                        toán qua VNPAY
                      </li>
                      <li>
                        <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                        500.000đ, duyệt nhanh chỉ 30s
                      </li>
                      <li>
                        <span>km</span> Thanh toán qua Moca tặng ngay đế sạc trị
                        giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) -
                        Số lượng có hạn
                      </li>
                    </ul>
                  </Link>
                </div>
              )}
            >
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img
                    src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                    alt=""
                  />
                </div>
                <div className={cx("img")}>
                  <img
                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/26/l19-0.png"
                    alt=""
                  />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={"/san-pham/1"}>
                    Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                    Chính hãng
                  </Link>
                  <span>
                    {" "}
                    <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                  </span>
                </div>
                <p className={cx("note")}>
                  <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                  <strong>và 5 km khác</strong>
                </p>
              </div>
            </Tippy>
          </div>

          <div className={cx("product-item")}>
            <Tippy
              interactive={true}
              offset={[0, -220]}
              trigger="mouseenter"
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <Link to={"/"} className={cx("wrapper-promote")}>
                    <ul className={cx("promote")}>
                      <li>
                        <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                        toán qua VNPAY
                      </li>
                      <li>
                        <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                        500.000đ, duyệt nhanh chỉ 30s
                      </li>
                      <li>
                        <span>km</span> Thanh toán qua Moca tặng ngay đế sạc trị
                        giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) -
                        Số lượng có hạn
                      </li>
                    </ul>
                  </Link>
                </div>
              )}
            >
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img
                    src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                    alt=""
                  />
                </div>
                <div className={cx("img")}>
                  <img
                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/26/l19-0.png"
                    alt=""
                  />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={"/san-pham/1"}>
                    Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                    Chính hãng
                  </Link>
                  <span>
                    {" "}
                    <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                  </span>
                </div>
                <p className={cx("note")}>
                  <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                  <strong>và 5 km khác</strong>
                </p>
              </div>
            </Tippy>
          </div>
          <div className={cx("product-item")}>
            <Tippy
              interactive={true}
              offset={[0, -220]}
              trigger="mouseenter"
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <Link to={"/"} className={cx("wrapper-promote")}>
                    <ul className={cx("promote")}>
                      <li>
                        <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                        toán qua VNPAY
                      </li>
                      <li>
                        <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                        500.000đ, duyệt nhanh chỉ 30s
                      </li>
                      <li>
                        <span>km</span> Thanh toán qua Moca tặng ngay đế sạc trị
                        giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) -
                        Số lượng có hạn
                      </li>
                    </ul>
                  </Link>
                </div>
              )}
            >
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img
                    src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                    alt=""
                  />
                </div>
                <div className={cx("img")}>
                  <img
                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/26/l19-0.png"
                    alt=""
                  />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={"/san-pham/1"}>
                    Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                    Chính hãng
                  </Link>
                  <span>
                    {" "}
                    <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                  </span>
                </div>
                <p className={cx("note")}>
                  <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                  <strong>và 5 km khác</strong>
                </p>
              </div>
            </Tippy>
          </div>
          <div className={cx("product-item")}>
            <Tippy
              interactive={true}
              offset={[0, -220]}
              trigger="mouseenter"
              render={(attrs) => (
                <div className="box" tabIndex={-1} {...attrs}>
                  <Link to={"/"} className={cx("wrapper-promote")}>
                    <ul className={cx("promote")}>
                      <li>
                        <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc thanh
                        toán qua VNPAY
                      </li>
                      <li>
                        <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                        500.000đ, duyệt nhanh chỉ 30s
                      </li>
                      <li>
                        <span>km</span> Thanh toán qua Moca tặng ngay đế sạc trị
                        giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) -
                        Số lượng có hạn
                      </li>
                    </ul>
                  </Link>
                </div>
              )}
            >
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img
                    src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                    alt=""
                  />
                </div>
                <div className={cx("img")}>
                  <img
                    src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/26/l19-0.png"
                    alt=""
                  />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={"/san-pham/1"}>
                    Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                    Chính hãng
                  </Link>
                  <span>
                    {" "}
                    <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                  </span>
                </div>
                <p className={cx("note")}>
                  <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                  <strong>và 5 km khác</strong>
                </p>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
