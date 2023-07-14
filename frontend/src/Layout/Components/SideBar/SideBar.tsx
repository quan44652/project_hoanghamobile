import { useRef, useEffect, useState } from "react";
import styles from "./SideBar.module.scss";
import className from "classNames/bind";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const cx = className.bind(styles);

const SideBar = ({ menu }: any) => {
  const listRef = useRef(null);
  const [selected, setSelected] = useState(0);

  const handleActive = (index: number) => {
    setSelected(index);
  };
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Link to={"/"} className={cx("logo")}>
          <img
            src="https://hoanghamobile.com/Content/web/img/logo-text.png"
            alt=""
          />
        </Link>
        <div className={cx("info")}>
          <div className={cx("avata")}>
            {/* <img src="" alt="" /> */}
            <span>A</span>
          </div>

          <div className={cx("name")}>
            <h4>Nguyễn Anh Quân</h4>
            <div className={cx("change-avata")}>
              <label htmlFor="file-upload">
                <span>
                  <BiUser />
                </span>{" "}
                Thay đổi ảnh đại diện
              </label>
              <input id="file-upload" type="file" />
            </div>
          </div>
        </div>
      </header>
      <nav>
        <ul ref={listRef} className={cx("menu")}>
          {menu.map((item: any, index: number) => (
            <li key={item.id}>
              <Link
                onClick={() => handleActive(index)}
                to={item.url}
                className={cx(index == selected && "active")}
              >
                <span>{item.icon && item.icon()}</span>
                {item.name}
              </Link>
            </li>
          ))}

          {/* <li>
            <Link to={"/"}>
              <span>
                <AiOutlineImport />
              </span>
              Đăng xuất
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
