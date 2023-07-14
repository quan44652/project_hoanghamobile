import React, { useState } from "react";
import className from "classNames/bind";
import styles from "../style.module.scss";
import Button from "../../Components/Button/Button";
import Select from "react-select";

const cx = className.bind(styles);

const EditProduct = () => {
  const [errer, setError] = useState(false);

  const options = [
    {
      value: "option1",
      label:
        "Bảng Trello là cách hoàn hảo để kết nối và cộng tác làm việc bất kể bạn đang ở đâu. Từ việc tạo bảng cho đến thêm thành viên mới để",
    },
    {
      value: "option2",
      label:
        "Bảng Trello là cách hoàn hảo để kết nối và cộng tác làm việc bất kể bạn đang ở đâu. Từ việc tạo bảng cho đến thêm thành viên mới để",
    },
    {
      value: "option3",
      label:
        "Bảng Trello là cách hoàn hảo để kết nối và cộng tác làm việc bất kể bạn đang ở đâu. Từ việc tạo bảng cho đến thêm thành viên mới để",
    },
  ];

  return (
    <div>
      <div className={cx("form")}>
        <h2>Thêm sản phẩm</h2>
        <form action="">
          <div className={cx("form-control")}>
            <label htmlFor="">Sticker</label>
            <input
              onBlur={() => setError(!errer)}
              className={cx(errer && "error")}
              type="text"
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
          <div className={cx("form-control")}>
            <label htmlFor="">Price New</label>
            <input
              onBlur={() => setError(!errer)}
              className={cx(errer && "error")}
              type="text"
            />
            <p>{errer && "Trường này không được để trống"}</p>
          </div>
          <div className={cx("form-control")}>
            <label htmlFor="">Price Old</label>
            <input
              onBlur={() => setError(!errer)}
              className={cx(errer && "error")}
              type="text"
            />
            <p>{errer && "Trường này không được để trống"}</p>
          </div>
          <div className={cx("form-control")}>
            <label htmlFor="">Version</label>
            <Select
              className={cx("select2")}
              classNamePrefix={cx("select2")}
              options={options}
              isSearchable={true}
              placeholder={"Chọn phiên bản"}
            />
            <p>{errer && "Trường này không được để trống"}</p>
          </div>
          <div className={cx("form-control")}>
            <label htmlFor="">Color</label>
            <Select
              className={cx("select2")}
              classNamePrefix={cx("select2")}
              options={options}
              isSearchable={true}
              placeholder={"Chọn màu"}
            />
            <p>{errer && "Trường này không được để trống"}</p>
          </div>
          <div className={cx("form-control")}>
            <label htmlFor="">Promotion</label>
            <Select
              className={cx("select2")}
              isMulti={true}
              options={options}
              isSearchable={true}
              placeholder={"Chọn khuyến mãi"}
            />
            <p>{errer && "Trường này không được để trống"}</p>
          </div>

          <div className={cx("button-group")}>
            <Button type="primary">Đăng ký</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
