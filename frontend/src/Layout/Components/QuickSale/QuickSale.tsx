import styles from "./QuickSale.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);

const QuickSale = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("item-img")}>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/26/hot-1_638206965646688223.png"
            alt=""
          />
        </div>
        <div className={cx("item-img")}>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/26/hot-2_638206965646688223.png"
            alt=""
          />
        </div>
        <div className={cx("item-img")}>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/26/hot-3_638206965646688223.png"
            alt=""
          />
        </div>
        <div className={cx("item-img")}>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/26/hot-4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuickSale;
