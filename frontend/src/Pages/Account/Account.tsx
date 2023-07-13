import styles from "./styles.module.scss";
import className from "classNames/bind";
import TopNavigation from "../../Layout/Components/TopNavigation/TopNavigation";
import SideBar from "../../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const cx = className.bind(styles);

const Account = () => {
  return (
    <div>
      <TopNavigation />
      <div className={cx("wrapper")}>
        <SideBar />
        <div className={cx("content")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Account;
