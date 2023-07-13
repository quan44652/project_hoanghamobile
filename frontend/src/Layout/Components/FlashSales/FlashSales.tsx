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

const FlashSales = () => {
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
    slidesToShow: 5,
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
        <div className={cx("timer")}>
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
        </div>
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
          <div>
            <div className={cx("wrapper-product")}>
              <div className={cx("sticker")}>
                <img
                  src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                  alt=""
                />
              </div>
              <div className={cx("img")}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/07/27/image-removebg-preview-4_637945394047578938.png"
                  alt=""
                />
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
                <Link to={"/"}>
                  Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                  Chính hãng
                </Link>
                <span>
                  {" "}
                  <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                </span>
              </div>
              {/* <p className={cx("note")}>
                <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                <strong>và 5 km khác</strong>
              </p> */}
            </div>
          </div>
          <div>
            <div className={cx("wrapper-product")}>
              <div className={cx("sticker")}>
                <img
                  src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                  alt=""
                />
              </div>
              <div className={cx("img")}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/10/thumb.png"
                  alt=""
                />
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
                <Link to={"/"}>
                  Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                  Chính hãng
                </Link>
                <span>
                  {" "}
                  <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                </span>
              </div>
              {/* <p className={cx("note")}>
                <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                <strong>và 5 km khác</strong>
              </p> */}
            </div>
          </div>
          <div>
            <div className={cx("wrapper-product")}>
              <div className={cx("sticker")}>
                <img
                  src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                  alt=""
                />
              </div>
              <div className={cx("img")}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/07/27/image-removebg-preview-4_637945394047578938.png"
                  alt=""
                />
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
                <Link to={"/"}>
                  Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                  Chính hãng
                </Link>
                <span>
                  {" "}
                  <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                </span>
              </div>
              {/* <p className={cx("note")}>
                <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                <strong>và 5 km khác</strong>
              </p> */}
            </div>
          </div>
          <div>
            <div className={cx("wrapper-product")}>
              <div className={cx("sticker")}>
                <img
                  src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                  alt=""
                />
              </div>
              <div className={cx("img")}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/10/thumb.png"
                  alt=""
                />
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
                <Link to={"/"}>
                  Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                  Chính hãng
                </Link>
                <span>
                  {" "}
                  <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                </span>
              </div>
              {/* <p className={cx("note")}>
                <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                <strong>và 5 km khác</strong>
              </p> */}
            </div>
          </div>
          <div>
            <div className={cx("wrapper-product")}>
              <div className={cx("sticker")}>
                <img
                  src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                  alt=""
                />
              </div>
              <div className={cx("img")}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/07/27/image-removebg-preview-4_637945394047578938.png"
                  alt=""
                />
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
                <Link to={"/"}>
                  Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                  Chính hãng
                </Link>
                <span>
                  {" "}
                  <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                </span>
              </div>
              {/* <p className={cx("note")}>
                <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                <strong>và 5 km khác</strong>
              </p> */}
            </div>
          </div>
          <div>
            <div className={cx("wrapper-product")}>
              <div className={cx("sticker")}>
                <img
                  src="https://hoanghamobile.com/Content/web/sticker/hot.png"
                  alt=""
                />
              </div>
              <div className={cx("img")}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/10/thumb.png"
                  alt=""
                />
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
                <Link to={"/"}>
                  Redmi 10 5G (4GB/64GB) - Chính hãng edmi 10 5G (4GB/64GB) -
                  Chính hãng
                </Link>
                <span>
                  {" "}
                  <strong>2999000 ₫</strong> <del> 4,790,000 ₫</del>
                </span>
              </div>
              {/* <p className={cx("note")}>
                <span>km</span> Ưu đãi đến 300.000đ khi mở Ví hoặc ...{" "}
                <strong>và 5 km khác</strong>
              </p> */}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FlashSales;
