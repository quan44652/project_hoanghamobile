import React from "react";
import styles from "./ProductList.module.scss";
import classNames from "classNames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ProductList = ({ products }: any) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1 className={cx("title")}>ĐIỆN THOẠI NỔI BẬT</h1>
        <div className={cx("product-list")}>
          {products?.map((item: any) => (
            <div key={item._id} className={cx("product-item")}>
              <Tippy
                interactive={true}
                offset={[0, -220]}
                trigger="mouseenter"
                render={(attrs) => (
                  <div className="box" tabIndex={-1} {...attrs}>
                    <Link
                      to={`/products/${item._id}`}
                      className={cx("wrapper-promote")}
                    >
                      <ul className={cx("promote")}>
                        <li>
                          <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc
                          thanh toán qua VNPAY
                        </li>
                        <li>
                          <span>km</span> Trả góp qua Homepaylater giảm thêm tới
                          500.000đ, duyệt nhanh chỉ 30s
                        </li>
                        <li>
                          <span>km</span> Thanh toán qua Moca tặng ngay đế sạc
                          trị giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6
                          Triệu) - Số lượng có hạn
                        </li>
                      </ul>
                    </Link>
                  </div>
                )}
              >
                <div className={cx("wrapper-product")}>
                  <div className={cx("sticker")}>
                    <img src={item.sticker} alt="" />
                  </div>
                  <div className={cx("img")}>
                    <img src={item.image} alt="" />
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
                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                    <span>
                      {" "}
                      <strong>{item.priceNew.toLocaleString()} ₫</strong>{" "}
                      {item.priceOld && (
                        <del> {item.priceOld.toLocaleString()} ₫</del>
                      )}
                    </span>
                  </div>
                  <p className={cx("note")}>
                    <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                    <strong>và 5 km khác</strong>
                  </p>
                </div>
              </Tippy>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
