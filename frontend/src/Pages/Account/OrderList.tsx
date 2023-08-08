import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import className from "classNames/bind";
import Table from "../../Components/Table/Table";
import { useGetCheckoutByUserQuery } from "../../slice/checkout";

const cx = className.bind(styles);

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
    render: (item: any) => <strong>{item?.key}</strong>,
  },
  {
    title: "Status",
    dataIndex: "order_date",
    key: "order_date",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
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

const YourOrderList = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as any));
  }, []);

  const { data: checkout }: any = useGetCheckoutByUserQuery(user?.user?._id);

  if (!checkout) {
    return;
  }

  console.log(checkout);

  const dataCourcer = [];

  if (!dataCourcer) {
    return;
  }

  return (
    <div className={cx("container")}>
      <h2>Đơn hàng của bạn</h2>
      <Table dataCourcer={dataCourcer} columns={columns} />
    </div>
  );
};

export default YourOrderList;
