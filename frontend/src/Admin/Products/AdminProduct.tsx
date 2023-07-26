import React from "react";
import Table from "../../Components/Table/Table";
import Button from "../../Components/Button/Button";
import styles from "../style.module.scss";
import className from "classNames/bind";

const cx = className.bind(styles);

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
  {
    title: "Option",
    dataIndex: "option",
    key: "option",
    render: () => {
      return (
        <div className={cx("option")}>
          <Button type="danger">ahihi</Button>
          <Button type="success">ahihi</Button>
        </div>
      );
    },
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

const AdminProduct = () => {
  return (
    <div>
      <h2>Quản sản phẩm</h2>
      <Table columns={columns} dataCourcer={dataCourcer} />
    </div>
  );
};

export default AdminProduct;
