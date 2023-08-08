import classNames from "classNames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useGetProductsQuery } from "../../../slice/product";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearValue] = useState<string>("");
  const [productSerach, setProductSearch] = useState<any>([]);
  const { data: products }: any = useGetProductsQuery("");

  const handleGetValue = (e: any) => {
    setSearValue(e.target.value);

    if (products) {
      const newProducts = products.filter((item: any) =>
        item.name
          .toLowerCase()
          .includes(searchValue === "" ? null : searchValue.toLowerCase())
      );
      setProductSearch(newProducts);
      console.log(searchValue);
    }
  };
  return (
    <Tippy
      placement={"bottom"}
      interactive
      visible
      render={(attrs) => (
        <div>
          {productSerach.length > 0 && (
            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
              {productSerach.map((item: any) => (
                <a
                  href={`/products/${item._id}`}
                  key={item._id}
                  className={cx("search-item")}
                >
                  <div className={cx("avata")}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={cx("info")}>
                    <h4>{item.name}</h4>
                    <span>{item.priceNew} ₫</span>
                  </div>
                </a>
              ))}

              <p className={cx("search-name")}>
                Hiển thị kết quả tìm kiếm cho <strong>{searchValue}</strong>
              </p>
            </div>
          )}
        </div>
      )}
    >
      <div className={cx("search-box")}>
        <form action="" className={cx("search-form")}>
          <input
            onChange={(e) => handleGetValue(e)}
            type="text"
            placeholder="Hôm nay bạn cần tìm gì?"
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </Tippy>
  );
};

export default Search;
