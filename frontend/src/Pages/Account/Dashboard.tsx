import React from "react";
import styles from "./styles.module.scss";
import className from "classNames/bind";

const cx = className.bind(styles);
const Dashboard = () => {
  return (
    <div className={cx("container")}>
      <h2>Bảng điều khiển</h2>
    </div>
  );
};

export default Dashboard;
