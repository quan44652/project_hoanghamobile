import React from "react";
import ProductList from "../../Layout/Components/ProductList/ProductList";
import styles from "./styles.module.scss";
import className from "classNames/bind";

const cx = className.bind(styles);

const Wishlist = () => {
  return (
    <div className={cx("container")}>
      <h2>Sản phẩm yêu thích </h2>
      <ProductList />
    </div>
  );
};

export default Wishlist;
