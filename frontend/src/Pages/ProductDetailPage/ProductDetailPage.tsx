import style from "./ProductDetailPage.module.scss";
import className from "classNames/bind";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import Header from "../../Layout/Components/Header/Header";
import Navbar from "../../Layout/Components/Navbar/Navbar";
import Footer from "../../Layout/Components/Footer/Footer";
import Carousel from "../../Layout/Components/Slider/Slider";
import Button from "../../Components/Button/Button";
import { useGetProductQuery } from "../../slice/product";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAddToCartMutation } from "../../slice/cart";
import { toast } from "react-toastify";

const img_list = [
  "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/03/09/image-removebg-preview-2.png",
  "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-12.png",
];

const cx = className.bind(style);
const ProductDetailPage = () => {
  const [user, setUser] = useState<any>({});

  const [addToCart] = useAddToCartMutation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as any));
  }, []);
  const { id } = useParams();
  const { data: product }: any = useGetProductQuery(id);

  const handleAddtoCart = () => {
    const newItem = {
      userId: user.user._id,
      productId: product._id,
      quantity: 1,
    };
    addToCart(newItem).then(({ data }: any) => toast.success(data.message));
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className={cx("wrapper")}>
        <div className={cx("product-images")}>
          <Carousel data={img_list} type="product-image" />
        </div>
        <div className={cx("product-info")}>
          <h2 className={cx("name")}>{product?.name}</h2>
          <div className={cx("price")}>
            <h4>{product?.priceNew.toLocaleString()} ₫ </h4>
            {product?.priceOld && (
              <span>
                <del>{product.priceOld.toLocaleString()}</del> ₫ |Gía đã bao gồm
                VAT
              </span>
            )}
          </div>
          <Button type="medium" icon={<FaShippingFast />}>
            Miễn phí vận chuyển toàn quốc
          </Button>
          <div className={cx("select-option")}>
            <h6>Lựa chọn phiên bản</h6>
            <div className={cx("select-box")}>
              <div className={cx("item")}>
                <input type="radio" name="sersion" />
                <span>128GB</span>
              </div>
              <div className={cx("item")}>
                <input type="radio" name="sersion" />
                <span>256GB</span>
              </div>
              <div className={cx("item")}>
                <input type="radio" name="sersion" />
                <span>512GB</span>
              </div>
            </div>
            <h6>Lựa chọn màu</h6>
            <div className={cx("select-box")}>
              <div className={cx("item")}>
                <input type="radio" name="sersion" />
                <span>Green</span>
              </div>
              <div className={cx("item")}>
                <input type="radio" name="sersion" />
                <span>Bule</span>
              </div>
              <div className={cx("item")}>
                <input type="radio" name="sersion" />
                <span>Red</span>
              </div>
            </div>
          </div>
          <div className={cx("promotion")}>
            <h4>Khuyến mãi</h4>
            <div>
              <span>km 1</span>
              <p>GIẢM THÊM 200.000đ khi thanh toán qua VNPAY-QR.</p>
            </div>
            <div>
              <span>km 2</span>
              <p>
                Ưu đãi mua combo 3 món củ sạc + dán màn hình + ốp lưng Mophie
                Zagg chỉ 985.000đ
              </p>
            </div>
            <div>
              <span>km 3</span>
              <p>
                Mua kèm Ốp lưng Clear Case with Magsafe giá chỉ còn 590.000đ
              </p>
            </div>
            <div>
              <span>km 4</span>
              <p>
                Ưu đãi mua Combo 4 món Củ sạc innostyle 30w + Dán MH, Camera +
                Ốp lưng iP14
              </p>
            </div>
          </div>
          <span onClick={() => handleAddtoCart()}>
            {" "}
            <Button type="lager" icon={<AiOutlineShoppingCart />}>
              Thêm giỏ hàng
            </Button>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
