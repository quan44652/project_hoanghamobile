import React from "react";
import style from "./Order.module.scss";
import className from "classNames/bind";
import TopNavigation from "../../Layout/Components/TopNavigation/TopNavigation";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineWallet, AiOutlineQrcode } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";

const cx = className.bind(style);

const Order = () => {
  return (
    <div>
      <TopNavigation />
      <div className={cx("wrapper")}>
        <div className={cx("order-top")}>
          <div>
            <img
              src="https://hoanghamobile.com/Content/web/img/payment-success.jpg"
              alt=""
            />
          </div>
          <h4>Hình Thức Thanh Toán</h4>
          <p>
            Cám ơn bạn đã đặt hàng tại Hoàng Hà Mobile. Vui lòng chọn hình thức
            thanh toán
          </p>
        </div>

        <div className={cx("order-body")}>
          <div className={cx("order-info")}>
            <h2>
              <span>
                <FaShippingFast />
              </span>
              Thông tin đặt hàng
            </h2>
            <p>
              Mã đơn hàng: <span>624504XUZMS</span>
            </p>
            <p>
              Tên người nhận hàng: <span>624504XUZMS</span>
            </p>
            <p>
              Số điện thoại: <span>624504XUZMS</span>
            </p>
            <p>
              Địa chỉ nhận hàng: <span>624504XUZMS</span>
            </p>
            <p>
              Tổng tiền: <span>624504XUZMS</span>
            </p>
          </div>
          <div className={cx("order-pay")}>
            <h2>
              {" "}
              <span>
                <AiOutlineWallet />
              </span>
              Chọn hình thức thanh toán
            </h2>
            <p>Đơn hàng chưa được thanh toán</p>
            <div className={cx("payment-type")}>
              <button>
                <span>
                  <BiDollar />
                </span>{" "}
                Thanh toán khi nhận hàng
              </button>
              <button>
                <span>
                  {" "}
                  <AiOutlineQrcode />
                </span>{" "}
                Chuyển khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
