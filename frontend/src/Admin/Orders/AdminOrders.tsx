import React from "react";
import Table from "../../Components/Table/Table";
import Button from "../../Components/Button/Button";
import styles from "../style.module.scss";
import className from "classNames/bind";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  useGetCheckoutQuery,
  useStatusCheckoutMutation,
} from "../../slice/checkout";

const cx = className.bind(styles);

const AdminOrders = () => {
  const [statusCheckout] = useStatusCheckoutMutation();

  const handleStatus = (status: any, id: any) => {
    const data = { status: status, id };
    console.log(status);
    statusCheckout(data).then((response) => console.log(123));
  };

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
      title: "Full Name",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Product Name",
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
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Options",
      dataIndex: "option",
      key: "option",
      render: (item: any) => {
        return (
          <div className={cx("option")}>
            <span onClick={() => handleStatus((status = "cancel"), item.id)}>
              <Button type="danger" icon={<AiOutlineDelete />}></Button>
            </span>
            <span onClick={() => handleStatus(item.status, item.id)}>
              {" "}
              <Button type="success" icon={<AiOutlineEdit />}></Button>
            </span>
          </div>
        );
      },
    },
  ];

  const { data: orders } = useGetCheckoutQuery();
  const dataCourcer = orders?.data.map((item: any, index: number) => ({
    key: index,
    id: item._id,
    order_date: item.createdAt,
    full_name: item.name,
    phone: item.phone,
    address: item.address,
    total: item.total,
    name: item.productId?.name,
    price: item.productId?.priceNew,
    quantity: item.total / item.productId?.priceNew,
    status: item.status,
  }));

  if (!dataCourcer) {
    return;
  }

  return (
    <div>
      <h2>Danh sách đơn hàng</h2>
      <Table columns={columns} dataCourcer={dataCourcer} />
    </div>
  );
};

export default AdminOrders;
