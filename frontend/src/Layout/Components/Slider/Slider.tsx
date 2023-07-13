import React, { useRef, useState } from "react";
import style from "./Slider.module.scss";
import classNames from "classNames/bind";
import Slider from "react-slick";

import ThumbNavigator from "./ThumbNavigator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Carousel({ type, data }: any) {
  const [indexSlider, setIndexSlider] = useState(0);
  const sliderRef = useRef(null);

  const handlerPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handlerNext = () => {
    sliderRef.current.slickNext();
  };

  const handleClick = (index: number) => {
    sliderRef.current.slickGoTo(index);
  };
  const handleBeforeChange = (oldIndex: any, newIndex: any) => {
    setIndexSlider(newIndex);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: handleBeforeChange,
    appendDots: () => (
      <ThumbNavigator
        data={data}
        onClickDot={handleClick}
        indexSlider={indexSlider}
        type={type}
      />
    ),
  };

  return (
    <div className={cx("container")}>
      <div className={cx(`${type}`)}>
        <button onClick={() => handlerPrev()} className={cx("btn", "btn-left")}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button
          onClick={() => handlerNext()}
          className={cx("btn", "btn-right")}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
        <Slider autoplay {...settings} className={cx("slider")} ref={sliderRef}>
          {data.map((item: any, index: number) => (
            <div key={index} className={cx("slider-item")}>
              {typeof item == "object" ? (
                <img src={item.image} alt=""></img>
              ) : (
                <img src={item} alt=""></img>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
