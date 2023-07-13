import React, { useState } from "react";
import className from "classNames/bind";
import styles from "./Cart.module.scss";
import TopNavigation from "../../Layout/Components/TopNavigation/TopNavigation";

import {
  AiOutlineLeft,
  AiOutlineCheckCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const cx = className.bind(styles);

const Cart = () => {
  const [isItem, setIsItem] = useState(false);
  return (
    <div>
      <TopNavigation />
      <div className={cx("wrapper")}>
        <Link to={"/"} className={cx("back")}>
          <AiOutlineLeft />
          <span> Quay lại</span>
        </Link>

        {isItem && (
          <div className={cx("no-item")}>
            <span className={cx("cart-icon")}>
              <AiOutlineCheckCircle />
            </span>
            <h6>Giỏ hàng </h6>
            <div>
              <img
                src="https://hoanghamobile.com/Content/web/content-icon/no-item.png"
                alt=""
              />
            </div>
            <h6>Hiện chưa có sản phẩm nào trong giỏ hàng</h6>
          </div>
        )}
        <div className={cx("cart-layout")}>
          <div className={cx("cart-info")}>
            <p className={cx("cart-icon")}>
              <AiOutlineCheckCircle />
            </p>
            <div className={cx("cart-box")}>
              <div className={cx("cart-item")}>
                <span className={cx("close")}>
                  <AiFillMinusCircle />
                </span>
                <div className={cx("product-info")}>
                  <div className={cx("product-img")}>
                    <img
                      src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png"
                      alt=""
                    />
                  </div>
                  <h4>iPhone 14 Pro Max (256GB) - Chính hãng VN/A</h4>
                  <span className={cx("product-price")}>
                    29,290,000 ₫ <del>39,290,000 ₫</del>
                  </span>
                  <div className={cx("product-quantity")}>
                    <label>Số lượng </label>
                    <div>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
                <div className={cx("promotion")}>
                  <div>
                    <span>km 1</span>
                    <p>GIẢM THÊM 200.000đ khi thanh toán qua VNPAY-QR.</p>
                  </div>
                  <div>
                    <span>km 2</span>
                    <p>
                      Ưu đãi mua combo 3 món củ sạc + dán màn hình + ốp lưng
                      Mophie Zagg chỉ 985.000đ
                    </p>
                  </div>
                  <div>
                    <span>km 3</span>
                    <p>
                      Mua kèm Ốp lưng Clear Case with Magsafe giá chỉ còn
                      590.000đ
                    </p>
                  </div>
                  <div>
                    <span>km 4</span>
                    <p>
                      Ưu đãi mua Combo 4 món Củ sạc innostyle 30w + Dán MH,
                      Camera + Ốp lưng iP14
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx("cart-item")}>
                <span className={cx("close")}>
                  <AiFillMinusCircle />
                </span>
                <div className={cx("product-info")}>
                  <div className={cx("product-img")}>
                    <img
                      src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png"
                      alt=""
                    />
                  </div>
                  <h4>iPhone 14 Pro Max (256GB) - Chính hãng VN/A</h4>
                  <span className={cx("product-price")}>
                    29,290,000 ₫ <del>39,290,000 ₫</del>
                  </span>
                  <div className={cx("product-quantity")}>
                    <label>Số lượng </label>
                    <div>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
                <div className={cx("promotion")}>
                  <div>
                    <span>km 1</span>
                    <p>GIẢM THÊM 200.000đ khi thanh toán qua VNPAY-QR.</p>
                  </div>
                  <div>
                    <span>km 2</span>
                    <p>
                      Ưu đãi mua combo 3 món củ sạc + dán màn hình + ốp lưng
                      Mophie Zagg chỉ 985.000đ
                    </p>
                  </div>
                  <div>
                    <span>km 3</span>
                    <p>
                      Mua kèm Ốp lưng Clear Case with Magsafe giá chỉ còn
                      590.000đ
                    </p>
                  </div>
                  <div>
                    <span>km 4</span>
                    <p>
                      Ưu đãi mua Combo 4 món Củ sạc innostyle 30w + Dán MH,
                      Camera + Ốp lưng iP14
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx("cart-item", "cart-total")}>
                <p>Tổng giá trị: 75,320,000 ₫</p>
                <p>Giảm giá: -00 ₫</p>
                <p>
                  Tổng thanh toán: <span>75,320,000 ₫</span>
                </p>
              </div>
            </div>
          </div>
          <div className={cx("cart-form")}>
            <h2>Thông tin đặt hàng</h2>
            <p className={cx("note")}>
              Bạn cần nhập đầy đủ các trường thông tin có dấu *
            </p>
            <div className={cx("form-control")}>
              <input
                className={cx("error")}
                type="text"
                placeholder="Họ và tên *"
              />
              <p>Trường này không được để trống</p>
            </div>
            <div className={cx("form-control")}>
              <input type="text" placeholder="Số điện thoại *" />
              <p></p>
            </div>
            <div className={cx("form-control")}>
              <input type="text" placeholder="Email" />
              <p></p>
            </div>
            <div className={cx("form-control")}>
              <input type="text" placeholder="Địa chỉ nhận hàng *" />
              <p>Trường này không được để trống</p>
            </div>

            <div className={cx("button")}>
              <Button to={"/checkout"} type="primary">
                Xác nhận đặt hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
