import styles from "./Banner.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);
interface Iprops {
  url: string;
}

function Banner(props: Iprops) {
  return (
    <div className={cx("wrapper")}>
      <img src={props.url} alt="" />
    </div>
  );
}

export default Banner;
