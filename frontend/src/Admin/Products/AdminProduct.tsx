import React from "react";
import Table from "../../Components/Table/Table";
import Button from "../../Components/Button/Button";
import styles from "../style.module.scss";
import className from "classNames/bind";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useGetProductsQuery } from "../../slice/product";

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
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (item: any) => (
      <img style={{ width: 60 }} src={item.image} alt="" />
    ),
  },
  {
    title: "Price New",
    dataIndex: "priceNew",
    key: "priceNew",
  },
  {
    title: "Price Old",
    dataIndex: "priceOld",
    key: "priceOld",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Option",
    dataIndex: "option",
    key: "option",
    render: () => {
      return (
        <div className={cx("option")}>
          <span>
            <Button type="danger" icon={<AiOutlineDelete />}></Button>
          </span>
          <span>
            <Button type="success" icon={<AiOutlineEdit />}></Button>
          </span>
        </div>
      );
    },
  },
];

const AdminProduct = () => {
  const { data: products }: any = useGetProductsQuery();
  if (!products) {
    return;
  }

  const dataCourcer = products.map((item: any, index: number) => ({
    id: item._id,
    key: index,
    name: item.name,
    priceNew: item.priceNew,
    priceOld: item.priceOld,
    category: item.categoryId.name,
    image: item.image,
  }));

  console.log(dataCourcer);

  return (
    <div>
      <h2>Quản sản phẩm</h2>
      <Table columns={columns} dataCourcer={dataCourcer} />
    </div>
  );
};

export default AdminProduct;
