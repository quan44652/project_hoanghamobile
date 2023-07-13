import React from "react";
import styles from "./styles.module.scss";
import className from "classNames/bind";

const cx = className.bind(styles);
const Info = () => {
  return (
    <div className={cx('container')}>
      <h2>Thông tin sản phẩm </h2>
    </div>
  );
};

export default Info;
