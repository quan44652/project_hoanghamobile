import React from "react";
import styles from "./styles.module.scss";
import className from "classNames/bind";
import Table from "../../Components/Table/Table";

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
    render: (item: any) => item?.key,
  },
  {
    title: "Order Date",
    dataIndex: "order_date",
    key: "order_date",
    render: (item: any) => <>{item?.order_date}</>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (item: any) => item?.name,
  },
  {
    title: "Version",
    dataIndex: "version",
    key: "version",
    render: (item: any) => item?.version,
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    render: (item: any) => item?.color,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (item: any) => item?.quantity,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (item: any) => item?.price,
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (item: any) => item?.total,
  },
];

const dataCourcer = [
  {
    id: 1,
    order_date: "2/2/2022",
    name: "Điện thoại di động iPhone 11 (64GB) - Chính hãng VN/A",
    version: "512GB",
    color: "Blue",
    quantity: 2,
    price: 1777777,
    total: 3444444,
  },
];

const cx = className.bind(styles);
const History = () => {
  return (
    <div className={cx("container")}>
      <h2>Lịch sử đặt hàng của bạn</h2>
      {/* <table border={1} className="">
        <thead>
          <th>#</th>
          <th>Ngày đặt</th>
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
            <td>Đang chờ xét duyệt</td>
            <td className={cx("name")}>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Đang chờ xét duyệt</td>
            <td className={cx("name")}>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Đang chờ xét duyệt</td>

            <td className={cx("name")}>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Đang chờ xét duyệt</td>
            <td className={cx("name")}>
              KM Giảm thêm 200.000đ cho tất các sản phẩm màn hình khi mua kèm
              laptop, MacBook, máy tính bảng và điện thoại.
            </td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table> */}

      <Table dataCourcer={dataCourcer} columns={columns} />
    </div>
  );
};

export default History;
