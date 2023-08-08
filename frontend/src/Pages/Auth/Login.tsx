import { useState } from "react";
import className from "classNames/bind";
import styles from "./Login.module.scss";
import Button from "../../Components/Button/Button";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useSigninMutation } from "../../slice/auth";

const cx = className.bind(styles);

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const [signin] = useSigninMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    signin(data).then(({ data }: any) => {
      if (data.message) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success(data.message);
        navigate("/");
        return;
      }
      toast.error(data.error);
    });
  };

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx("form-control")}>
              <label htmlFor="">Tài khoản</label>
              <input
                {...register("email")}
                className={errors.email && cx("error")}
                type="text"
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className={cx("form-control")}>
              <label htmlFor="">Mật khẩu</label>
              <input
                {...register("password")}
                className={errors.password && cx("error")}
                type="text"
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className={cx("button-group")}>
              <Button type="primary">Đăng nhập</Button>
              <Button to={"/regester"} type="border">
                Đăng ký
              </Button>
            </div>
          </form>

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
