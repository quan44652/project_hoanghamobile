import { useState } from "react";
import className from "classNames/bind";
import styles from "./Login.module.scss";
import Button from "../../Components/Button/Button";

const cx = className.bind(styles);

const Forget = () => {
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
          <h2>Cấp lại mật khẩu</h2>

          <form action="">
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
            <Button type="primary">Cấp lại mật khẩu</Button>
            <Button to={"/"} type="border">
              Trở về
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
