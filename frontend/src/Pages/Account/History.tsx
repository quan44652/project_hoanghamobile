import React from "react";
import styles from "./styles.module.scss";
import className from "classNames/bind";
import Table from "../../Components/Table/Table";

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
    render: (item: any) => <strong>{item?.key}</strong>,
  },
  {
    title: "Order Date",
    dataIndex: "order_date",
    key: "order_date",
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
      <Table dataCourcer={dataCourcer} columns={columns} />
    </div>
  );
};

export default History;
