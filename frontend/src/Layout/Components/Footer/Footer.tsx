import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("content-link")}>
          <h1>Hỗ trợ - Dịch vụ </h1>

          <ul>
            <li>
              <a href="">Mua hàng trả góp</a>
            </li>
            <li>
              <a href="">Hướng dẫn đặt hàng và thanh toán</a>
            </li>
            <li>
              <a href="">Tra cứu đơn hàng</a>
            </li>
            <li>
              <a href="">Chính sách bảo hành</a>
            </li>
            <li>
              <a href="">Phạm vi, điều khoản gói bảo hành mở rộng</a>
            </li>
            <li>
              <a href="">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="">Chính sách giải quyết khiếu nại</a>
            </li>
            <li>
              <a href="">Điều khoản mua bán hàng hóa</a>
            </li>
            <li>
              <a href="">Câu hỏi thường gặp</a>
            </li>
          </ul>
        </div>
        <div className={cx("content-link")}>
          <h1>Thông tin liên hệ</h1>

          <ul>
            <li>
              <a href="">Bán hàng online</a>
            </li>
            <li>
              <a href="">Chăm sóc khách hàng</a>
            </li>
            <li>
              <a href="">Dịch vụ sửa chữa Hoàng Hà Care </a>
            </li>
            <li>
              <a href="">Liên hệ khối văn phòng</a>
            </li>
            <li>
              <a href="">Hợp tác kinh doanh</a>
            </li>
            <li>
              <a href="">Tra cứu bảo hành</a>
            </li>
          </ul>
        </div>
        <div className={cx("content-link")}>
          <h1>Hệ thống 127 siêu thị trên toàn quốc</h1>

          <ul>
            <li>
              <a href="">Danh sách 127 siêu thị trên toàn quốc</a>
            </li>
          </ul>
        </div>
        <div className={cx("content-link")}>
          <h1>Tổng đài</h1>

          <button className={cx("phone")}>1900.2091</button>
        </div>
        <div className={cx("content-link")}>
          <h1>Thanh toán miễn phí</h1>
          <ul className={cx("img-list")}>
            <li>
              <img src="./src/assets/images/pay/logo-atm.png" alt="" />
            </li>
            <li>
              <img src="./src/assets/images/pay/logo-jcb.png" alt="" />
            </li>
            <li>
              <img src="./src/assets/images/pay/logo-master.png" alt="" />
            </li>
            <li>
              <img src="./src//assets/images/pay/logo-samsungpay.png" alt="" />
            </li>
            <li>
              <img src="./src//assets/images/pay//logo-visa.png" alt="" />
            </li>
            <li>
              <img src="./src//assets/images/pay/logo-vnpay.png" alt="" />
            </li>
          </ul>
        </div>
        <div className={cx("content-link")}>
          <h1>Hình thức vận chuyển</h1>
          <ul className={cx("img-list")}>
            <li>
              <img src="./src/assets/images/ship/vnpost.jpg" alt="" />
            </li>
            <li>
              <img src="./src/assets/images/ship//nhattin.jpg" alt="" />
            </li>
          </ul>
          <div>
            <img src="./src/assets/images/ship/logo-bct.png" alt="" />
          </div>
        </div>
      </div>
      <div className={cx("info")}>
        <p>
          © 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:
          0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký thay
          đổi ngày 24/11/2022)
        </p>
        <h4>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</h4>
        <p>
          Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai, Thành
          Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm nội
          dung: Hoàng Ngọc Chiến.
        </p>
      </div>
    </div>
  );
};

export default Footer;
