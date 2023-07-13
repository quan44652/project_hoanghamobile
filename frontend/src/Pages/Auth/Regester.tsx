import { useState } from "react";
import className from "classNames/bind";
import styles from "./Login.module.scss";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

const Regester = () => {
  const [errer, setError] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("auth-bg")}>
          <img
            src="https://hoanghamobile.com/Content/web/img/login-bg.png"
            alt=""
          />
        </div>
        <div className={cx("auth-form")}>
          <h2>Đăng ký</h2>

          <form action="">
            <div className={cx("form-control")}>
              <label htmlFor="">Tài khoản</label>
              <input
                onBlur={() => setError(!errer)}
                className={cx(errer && "error")}
                type="text"
              />
              <p>{errer && "Trường này không được để trống"}</p>
            </div>
            <div className={cx("form-control")}>
              <label htmlFor="">Mật khẩu</label>
              <input
                onBlur={() => setError(!errer)}
                className={cx(errer && "error")}
                type="text"
              />
              <p>{errer && "Trường này không được để trống"}</p>
            </div>
            <div className={cx("form-control")}>
              <label htmlFor="">Số điện thoại</label>
              <input
                onBlur={() => setError(!errer)}
                className={cx(errer && "error")}
                type="text"
              />
              <p>{errer && "Trường này không được để trống"}</p>
            </div>
            <div className={cx("form-control")}>
              <label htmlFor="">Email</label>
              <input
                onBlur={() => setError(!errer)}
                className={cx(errer && "error")}
                type="text"
              />
              <p>{errer && "Trường này không được để trống"}</p>
            </div>
          </form>

          <div className={cx("button-group")}>
            <Button type="primary">Đăng ký</Button>
            <Button to={"/"} type="border">
              Trở về
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
