import classNames from "classNames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Search = () => {
  return (
    <Tippy
      placement={"bottom"}
      interactive
      // visible
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex={-1} {...attrs}>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <div className={cx("search-item")}>
            <div className={cx("avata")}>
              <img
                src="https://hoanghamobile.com/productlist/dst/Uploads/2023/03/08/14-yellow.png"
                alt=""
              />
            </div>
            <div className={cx("info")}>
              <h4>Điện thoại di động iPhone 14 (256GB) - Chính hãng VN/A</h4>
              <span>21,890,000 ₫</span>
            </div>
          </div>
          <p className={cx("search-name")}>
            Hiển thị kết quả tìm kiếm cho <strong>quan</strong>
          </p>
        </div>
      )}
    >
      <div className={cx("search-box")}>
        <form action="" className={cx("search-form")}>
          <input type="text" placeholder="Hôm nay bạn cần tìm gì?" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </Tippy>
  );
};

export default Search;
