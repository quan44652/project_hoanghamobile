import { useState } from "react";
import className from "classNames/bind";
import styles from "../style.module.scss";
import Button from "../../Components/Button/Button";

const cx = className.bind(styles);

const AddCategory = () => {
  const [errer, setError] = useState(false);

  return (
    <div>
      <div className={cx("form")}>
        <h2>Thêm sản phẩm</h2>
        <form action="">
          <div className={cx("form-control")}>
            <label htmlFor="">Icon</label>
            <input
              onBlur={() => setError(!errer)}
              className={cx(errer && "error")}
              type="file"
            />
            <p>{errer && "Trường này không được để trống"}</p>
          </div>
          <div className={cx("form-control")}>
            <label htmlFor="">Name</label>
            <input
              onBlur={() => setError(!errer)}
              className={cx(errer && "error")}
              type="text"
            />
            <p>{errer && "Trường này không được để trống"}</p>
          </div>

          <div className={cx("button-group")}>
            <Button type="primary">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
