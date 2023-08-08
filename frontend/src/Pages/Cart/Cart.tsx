import React, { useEffect, useState } from "react";
import className from "classNames/bind";
import styles from "./Cart.module.scss";
import TopNavigation from "../../Layout/Components/TopNavigation/TopNavigation";

import {
  AiOutlineLeft,
  AiOutlineCheckCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import HeaderMobile from "../../Layout/Components/Header/HeaderMobile";
import {
  useGetCartByUserQuery,
  useRemoveToCartMutation,
} from "../../slice/cart";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useCreateCheckoutMutation } from "../../slice/checkout";

const cx = className.bind(styles);

const schema = yup.object({
  name: yup.string().required(),
  phone: yup.number().required(),
  address: yup.string().required(),
});

const Cart = () => {
  const [user, setUser] = useState<any>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [createCheckout] = useCreateCheckoutMutation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as any));
  }, []);

  const { data: carts } = useGetCartByUserQuery(user?.user?._id);

  const [removeCart] = useRemoveToCartMutation();

  const handleremove = () => {
    removeCart(carts._id).then((response) => console.log(response));
  };

  const onSubmit = (data: any) => {
    const newCart = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      total: carts.quantity * carts.productId.priceNew,
      productId: carts.productId._id,
    };
    console.log(newCart);

    createCheckout(newCart).then(({ data }: any) => {
      if (data.message) {
        toast.success(data.message);
        navigate("/");
      }
    });
  };

  return (
    <div>
      {window.innerWidth > 769 ? <TopNavigation /> : <HeaderMobile />}

      <div className={cx("wrapper")}>
        <Link to={"/"} className={cx("back")}>
          <AiOutlineLeft />
          <span> Quay lại</span>
        </Link>

        {!carts?.productId && (
          <div className={cx("no-item")}>
            <span className={cx("cart-icon")}>
              <AiOutlineCheckCircle />
            </span>
            <h6>Giỏ hàng </h6>
            <div>
              <img
                src="https://hoanghamobile.com/Content/web/content-icon/no-item.png"
                alt=""
              />
            </div>
            <h6>Hiện chưa có sản phẩm nào trong giỏ hàng</h6>
          </div>
        )}
        {carts?.productId && (
          <div className={cx("cart-layout")}>
            <div className={cx("cart-info")}>
              <p className={cx("cart-icon")}>
                <AiOutlineCheckCircle />
              </p>
              <div className={cx("cart-box")}>
                <div className={cx("cart-item")}>
                  <span onClick={() => handleremove()} className={cx("close")}>
                    <AiFillMinusCircle />
                  </span>
                  <div className={cx("product-info")}>
                    <div className={cx("product-img")}>
                      <img
                        src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png"
                        alt=""
                      />
                    </div>
                    <h4>{carts?.productId.name}</h4>
                    <span className={cx("product-price")}>
                      {carts?.productId.priceNew.toLocaleString()} ₫{" "}
                      {carts?.productId.priceOld && (
                        <del>
                          {carts?.productId.priceOld.toLocaleString()} ₫
                        </del>
                      )}
                    </span>
                    <div className={cx("product-quantity")}>
                      <label>Số lượng </label>
                      <div>
                        <button>-</button>
                        <span>{carts?.quantity}</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                  <div className={cx("promotion")}>
                    <div>
                      <span>km 1</span>
                      <p>GIẢM THÊM 200.000đ khi thanh toán qua VNPAY-QR.</p>
                    </div>
                    <div>
                      <span>km 2</span>
                      <p>
                        Ưu đãi mua combo 3 món củ sạc + dán màn hình + ốp lưng
                        Mophie Zagg chỉ 985.000đ
                      </p>
                    </div>
                    <div>
                      <span>km 3</span>
                      <p>
                        Mua kèm Ốp lưng Clear Case with Magsafe giá chỉ còn
                        590.000đ
                      </p>
                    </div>
                    <div>
                      <span>km 4</span>
                      <p>
                        Ưu đãi mua Combo 4 món Củ sạc innostyle 30w + Dán MH,
                        Camera + Ốp lưng iP14
                      </p>
                    </div>
                  </div>
                </div>

                <div className={cx("cart-item", "cart-total")}>
                  <p>
                    Tổng giá trị:{" "}
                    {(
                      carts?.productId.priceNew * carts?.quantity
                    ).toLocaleString()}{" "}
                    ₫
                  </p>
                  <p>Giảm giá: -00 ₫</p>
                  <p>
                    Tổng thanh toán:{" "}
                    <span>
                      {(
                        carts?.productId.priceNew * carts?.quantity
                      ).toLocaleString()}{" "}
                      ₫
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className={cx("cart-form")}>
              <h2>Thông tin đặt hàng</h2>
              <p className={cx("note")}>
                Bạn cần nhập đầy đủ các trường thông tin có dấu *
              </p>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className={cx("form-control")}>
                  <input
                    {...register("name")}
                    className={errors.name && cx("error")}
                    defaultValue={user?.user.name}
                    type="text"
                    placeholder="Họ và tên *"
                  />
                  <p>{errors.name?.message}</p>
                </div>
                <div className={cx("form-control")}>
                  <input
                    defaultValue={user?.user.phone}
                    {...register("phone")}
                    type="text"
                    placeholder="Số điện thoại *"
                    className={errors.phone && cx("error")}
                  />
                  <p>{errors.phone?.message}</p>
                </div>
                <div className={cx("form-control")}>
                  <input
                    defaultValue={user?.user.address}
                    {...register("address")}
                    type="text"
                    placeholder="Địa chỉ nhận hàng *"
                    className={errors.address && cx("error")}
                  />
                  <p>{errors.address?.message}</p>
                </div>

                <div className={cx("button")}>
                  <Button type="primary">Xác nhận đặt hàng</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
