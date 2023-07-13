import { useRef, useEffect } from "react";
import styles from "./Slider.module.scss";
import classNames from "classNames/bind";
import Slider from "react-slick";

const cx = classNames.bind(styles);

function ThumbNavigator(props: any) {
  const dotRef = useRef(null);

  useEffect(() => {
    dotRef.current.slickGoTo(props.indexSlider);
  }, [props.indexSlider]);

  const handleDotClick = (id: any) => {
    props.onClickDot(id);
  };

  const settings = {
    autoplay: true,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={cx("wrapper-thumb")}>
      <div className={cx(`${props.type}`)}>
        <Slider {...settings} className={cx("list-thumb")} ref={dotRef}>
          {props.data.map((item: any, index: number) => {
            return (
              <div key={index} className={cx("list-thumb--item")}>
                <div
                  className={cx(
                    "box-thumb",
                    index == props.indexSlider ? "active" : ""
                  )}
                  onClick={() => handleDotClick(index)}
                >
                  {typeof item == "object" ? (
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                    </div>
                  ) : (
                    <div>
                      <img src={item} alt="" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ThumbNavigator;
