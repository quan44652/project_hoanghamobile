import styles from "./Table.module.scss";
import className from "classNames/bind";

const cx = className.bind(styles);

const Table = ({ columns, dataCourcer }: any) => {
  const renderHeader = columns.map((column: any) => (
    <th key={column.key}>{column.title}</th>
  ));

  const renderRow = dataCourcer.map((item: any) => {
    const renderCell = columns.map((column: any) => (
      <td>{item[column.dataIndex]}</td>
    ));

    return <tr>{renderCell}</tr>;
  });
  return (
    <table border={1} className={cx("wrapper")}>
      <thead>{renderHeader}</thead>
      <tbody>{renderRow}</tbody>
    </table>
  );
};

export default Table;
