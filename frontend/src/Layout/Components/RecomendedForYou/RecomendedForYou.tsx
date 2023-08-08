import Slider from "react-slick";
import { useRef } from "react";
import styles from "./RecomendedForYou.module.scss";
import classNames from "classNames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const RecomendedForYou = ({ products }: any) => {
  const sliderRef = useRef(null);

  const handlerPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handlerNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    arrows: false,
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
      <h2 className={cx("title")}>Có thể bạn sẽ thích</h2>
      <div className={cx("slider")}>
        <button onClick={() => handlerPrev()} className={cx("btn", "btn-left")}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => handlerNext()}
          className={cx("btn", "btn-right")}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <Slider {...settings} ref={sliderRef}>
          {products?.map((item: any) => (
            <div key={item._id} className={cx("product-list")}>
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

export default RecomendedForYou;
