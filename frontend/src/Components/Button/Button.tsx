import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);

interface Iprops {
  icon?: React.ReactNode;
  type: string;
  children?: React.ReactNode;
  _onClick?: () => void;
  to?: string;
}

const Button = ({ icon, type, children, _onClick, to }: Iprops) => {
  let Comp: any = "button";
  if (to) {
    Comp = Link;
  }
  return (
    <div className={cx("wrapper")}>
      <Comp to={to} onClick={_onClick} className={cx(`btn`, type)}>
        {" "}
        {icon && <i className={cx("icon")}>{icon}</i>}{" "}
        {children && <span> {children}</span>}
      </Comp>
    </div>
  );
};

export default Button;
