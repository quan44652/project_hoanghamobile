import styles from "./Table.module.scss";
import className from "classNames/bind";

const cx = className.bind(styles);

const Table = ({ columns, dataCourcer }: any) => {
  const renderHeader = columns.map((column: any, index: number) => (
    <th key={index}>{column.title}</th>
  ));

  const renderRow = dataCourcer.map((item: any) => {
    const renderCell = columns.map((column: any, index: number) => (
      <td style={{ maxWidth: 250 }} key={index}>
        {column.render ? column.render(item) : item[column.dataIndex]}
      </td>
    ));

    return <tr key={item.key}>{renderCell}</tr>;
  });
  return (
    <table border={1} className={cx("wrapper")}>
      <thead>
        <tr>{renderHeader}</tr>
      </thead>
      <tbody>{renderRow}</tbody>
    </table>
  );
};

export default Table;
