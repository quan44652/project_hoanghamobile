import classNames from "classNames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../slice/category";

const cx = classNames.bind(styles);

const Navbar = () => {
  const { data } = useGetCategoriesQuery();
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("container")}>
        {data?.map((item: any) => (
          <li key={item._id}>
            <Link className={cx("navbar-link")} to={`/category/${item._id}`}>
              <span className={cx("navbar-name")}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
