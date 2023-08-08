import className from "classNames/bind";
import styles from "./Login.module.scss";
import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignupMutation } from "../../slice/auth";
import { toast } from "react-toastify";

const cx = className.bind(styles);

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  address: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required(),
});

const Regester = () => {
  const [signup] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    signup(data).then(({ data }: any) => {
      toast.success(data.message);
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
          <h2>Đăng ký</h2>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={cx("form-control")}>
              <label htmlFor="">Full name</label>
              <input
                {...register("name")}
                className={errors.name && cx("error")}
                type="text"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className={cx("form-control")}>
              <label htmlFor="">Email</label>
              <input
                {...register("email")}
                className={errors.email && cx("error")}
                type="text"
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className={cx("form-control")}>
              <label htmlFor="">Số điện thoại</label>
              <input
                {...register("phone")}
                className={errors.phone && cx("error")}
                type="text"
              />
              <p>{errors.phone?.message}</p>
            </div>

            <div className={cx("form-control")}>
              <label htmlFor="">Address</label>
              <input
                {...register("address")}
                className={errors.address && cx("error")}
                type="text"
              />
              <p>{errors.address?.message}</p>
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
            <div className={cx("form-control")}>
              <label htmlFor="">Nhập lại mật khẩu</label>
              <input
                {...register("confirmPassword")}
                className={errors.confirmPassword && cx("error")}
                type="text"
              />
              <p>{errors.confirmPassword?.message}</p>
            </div>
            <div className={cx("button-group")}>
              <Button type="primary">Đăng ký</Button>
              <Button to={"/"} type="border">
                Trở về
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Regester;
