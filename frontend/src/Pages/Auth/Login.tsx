import { useState } from "react";
import className from "classNames/bind";
import styles from "./Login.module.scss";
import Button from "../../Components/Button/Button";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

const Login = () => {
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
          <h2>Đăng nhập</h2>
          <div className={cx("external")}>
            <Button type="btn-facebook" icon={<AiFillFacebook />}>
              Đăng nhập bằng Facebook
            </Button>
            <Button type="btn-google" icon={<AiFillGoogleCircle />}>
              Đăng nhập bằng Google
            </Button>
          </div>
          <div className={cx("split")}>
            <p>Hoặc</p>
          </div>

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
          </form>

          <div className={cx("button-group")}>
            <Button type="primary">Đăng nhập</Button>
            <Button to={"/regester"} type="border">
              Đăng ký
            </Button>
          </div>
          <div className={cx("footer")}>
            <Link className={cx("back")} to={"/"}>
              <span>
                <AiOutlineArrowLeft />
              </span>
              Trở về
            </Link>
            <Link to={"/forget"}>Quên mật khẩu ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
