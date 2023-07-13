import { useState, useEffect } from "react";
import className from "classNames/bind";
import styles from "./Home.module.scss";
import Header from "../../Layout/Components/Header/Header";
import Navbar from "../../Layout/Components/Navbar/Navbar";
import Carousel from "../../Layout/Components/Slider/Slider";
import QuickSale from "../../Layout/Components/QuickSale/QuickSale";
import ProductList from "../../Layout/Components/ProductList/ProductList";
import FlashSales from "../../Layout/Components/FlashSales/FlashSales";
import Banner from "../../Layout/Components/Banner/Banner";
import RecomendedForYou from "../../Layout/Components/RecomendedForYou/RecomendedForYou";
import Footer from "../../Layout/Components/Footer/Footer";

const cx = className.bind(styles);

const data = [
  {
    id: 1,
    image:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/04/web-s23-series-01.jpg",
    title: "Thu cũ đổi mới VN/A 1",
    content: "Giá cực tốt",
  },
  {
    id: 2,
    image:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/03/s20-fe-1200x382.png",
    title: "Thu cũ đổi mới VN/A 2",
    content: "Giá cực tốt",
  },
  {
    id: 3,
    image:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/04/1200x375_638240599828092088.jpg",
    title: "Thu cũ đổi mới VN/A 3",
    content: "Giá cực tốt",
  },
  {
    id: 8,
    image:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/02/web-tuan-le-laptop-van-phong-01.jpg",
    title: "Thu cũ đổi mới VN/A 4",
    content: "Giá cực tốt",
  },
  {
    id: 12,
    image:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/06/19/web-jbl.png",
    title: "Thu cũ đổi mới VN/A 5",
    content: "Giá cực tốtt",
  },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className={cx("wrapper-slider")}>
        <Carousel type={"banner-silder"} data={data} />
      </div>
      <QuickSale></QuickSale>
      <FlashSales></FlashSales>
      <Banner url="https://cdn.hoanghamobile.com/i/home/Uploads/2023/06/05/tab-a8-1200x200.png"></Banner>
      <RecomendedForYou></RecomendedForYou>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
