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
import Table from "../../Components/Table/Table";

const cx = className.bind(styles);

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
    render: (item: any) => <strong>{item?.key}</strong>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Version",
    dataIndex: "version",
    key: "version",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

const dataCourcer = [
  {
    id: 1,
    key: 1,

    name: "Điện thoại di động iPhone 11 (64GB) - Chính hãng VN/A",
    version: "512GB",
    color: "Blue",
    quantity: 2,
    price: 1777777,
    total: 3444444,
  },
];

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
          <Table dataCourcer={dataCourcer} columns={columns} />
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
