import React, { useRef } from "react";
import styles from "./FlashSales.module.scss";
import classNames from "classNames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const cx = classNames.bind(styles);

const FlashSales = ({ products }: any) => {
  const sliderRef = useRef(null);

  const handlerPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handlerNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 5 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slickPrev: false,
    slickNext: false,
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>
          F<FontAwesomeIcon icon={faBolt} />
          ASH SALES ONLINE
        </h1>
        <ul className={cx("tabs")}>
          <li>
            <Link className={cx("active")} to={"/"}>
              Điện thoại/ taplet
            </Link>
          </li>
          <li>
            <Link to={"/"}>Laptop/Màn hình/Tivi</Link>
          </li>
          <li>
            <Link to={"/"}>Đồng hồ/Phụ kiện/Khác</Link>
          </li>
        </ul>
        {/* <div className={cx("timer")}>
          <h1>
            <span>1</span>
            <span>1</span>
          </h1>
          <h6>:</h6>
          <h1>
            <span>1</span>
            <span>1</span>
          </h1>
          <h6>:</h6>
          <h1>
            <span>1</span>
            <span>1</span>
          </h1>
        </div> */}
      </div>
      <div className={cx("slider")}>
        <button onClick={() => handlerPrev()} className={cx("btn", "btn-left")}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button
          onClick={() => handlerNext()}
          className={cx("btn", "btn-right")}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
        <Slider {...settings} ref={sliderRef}>
          {products?.map((item: any) => (
            <div key={item._id}>
              <div className={cx("wrapper-product")}>
                <div className={cx("sticker")}>
                  <img src={item.sticker} alt="" />
                </div>
                <div className={cx("img")}>
                  <img src={item.image} alt="" />
                </div>
                <span className={cx("sales")}>
                  {" "}
                  <FontAwesomeIcon
                    className={cx("flash-icon")}
                    icon={faBolt}
                  />{" "}
                  Giảm 1,800,000 ₫
                </span>
                <div className={cx("info")}>
                  <Link to={`/products/${item._id}`}>{item.name}</Link>
                  <span>
                    {" "}
                    <strong>{item.priceNew.toLocaleString()} ₫</strong>{" "}
                    {item.priceOld && (
                      <del> {item.priceOld.toLocaleString()} ₫</del>
                    )}
                  </span>
                </div>
                {/* <p className={cx("note")}>
               <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
               <strong>và 5 km khác</strong>
             </p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FlashSales;
