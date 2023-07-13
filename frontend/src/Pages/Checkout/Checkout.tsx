import React from "react";
import styles from "./Checkout.module.scss";
import className from "classNames/bind";
import TopNavigation from "../../Layout/Components/TopNavigation/TopNavigation";
import { Link } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineLeft,
  AiOutlineCheck,
} from "react-icons/ai";
import Button from "../../Components/Button/Button";

const cx = className.bind(styles);

const Order = () => {
  return (
    <div>
      <TopNavigation />
      <div className={cx("wrapper")}>
        <Link to={"/"} className={cx("back")}>
          <AiOutlineLeft />
          <span> Quay lại</span>
        </Link>

        <div className={cx("check")}>
          <span className={cx("cart-icon")}>
            <AiOutlineCheckCircle />
          </span>
          <h6>Vui lòng kiểm tra lại thông tin đặt hàng dưới đây</h6>
        </div>

        <div className={cx("order-info")}>
          <h2>1. Thông tin người đặt hàng</h2>
          <div className={cx("order-info--layout")}>
            <div>
              <p>
                <label>Họ tên</label>
                <span> Nguyễn Anh Quân</span>
              </p>
              <p>
                <label>Điện thoại</label>
                <span> 0975433070</span>
              </p>
              <p>
                <label>Email</label>
                <span>quan44652@gmail.com</span>
              </p>
            </div>
            <p>
              <label>Địa chỉ</label>
              <span> quan44652@gmail.com</span>
            </p>
            <p>
              <label>Ghi chú</label>
              <span> quan44652@gmail.com</span>
            </p>
          </div>
        </div>

        <div className={cx("order-info")}>
          <h2>2. Danh sách sản phẩm đặt hàng</h2>
          <table border={1} className="">
            <thead>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Phiên bản</th>
              <th>Màu sắc</th>
              <th>SL</th>
              <th>Giá tiền</th>
              <th>Tổng(SLxG)</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className={cx("name")}>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>1</td>
                <td className={cx("name")}>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>1</td>
                <td className={cx("name")}>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>1</td>
                <td className={cx("name")}>
                  KM Giảm thêm 200.000đ cho tất các sản phẩm màn hình khi mua
                  kèm laptop, MacBook, máy tính bảng và điện thoại.
                </td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
          <div className={cx("total")}>
            <p>Tổng tiền: 22,280,000 ₫</p>
            <p>Giảm giá: -00 ₫</p>
            <p>
              Tổng tiền thanh toán: <span>22,280,000 ₫</span>
            </p>
          </div>
        </div>
        <Link to={"/order"}>
          {" "}
          <Button type="primary" icon={<AiOutlineCheck />}>
            Xác nhận đặt hàng
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
