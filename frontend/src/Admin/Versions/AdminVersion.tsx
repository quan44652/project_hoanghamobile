import React from "react";
import Table from "../../Components/Table/Table";
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
];

const dataCourcer = [
  {
    id: 1,
    key: 1,
    name: "Blue",
  },
];

const AdminVersion = () => {
  return (
    <div>
      <Table dataCourcer={dataCourcer} columns={columns} />
    </div>
  );
};

export default AdminVersion;
