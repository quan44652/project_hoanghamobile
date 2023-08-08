import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Button from "../../Components/Button/Button";
import Table from "../../Components/Table/Table";
import { useGetCategoriesQuery } from "../../slice/category";
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
    title: "Name",
    dataIndex: "name",
    key: "name",
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
            {" "}
            <Button type="success" icon={<AiOutlineEdit />}></Button>
          </span>
        </div>
      );
    },
  },
];

const AdminCategory = () => {
  const { data: categories } = useGetCategoriesQuery();

  if (!categories) {
    return;
  }

  const dataCourcer = categories?.map((item: any, index: number) => ({
    key: index,
    id: item._id,
    name: item.name,
  }));

  return (
    <div>
      <h2>Quản lý danh mục</h2>
      <Table dataCourcer={dataCourcer} columns={columns} />
    </div>
  );
};

export default AdminCategory;
