import Footer from "../../Layout/Components/Footer/Footer";
import Navbar from "../../Layout/Components/Navbar/Navbar";
import Header from "../../Layout/Components/Header/Header";
import ProductList from "../../Layout/Components/ProductList/ProductList";
import { useGetCategoryQuery } from "../../slice/category";
import { useParams } from "react-router-dom";

const ProductListPage = () => {
  const { id } = useParams();
  const { data } = useGetCategoryQuery(id);

  return (
    <div>
      <Header />
      <Navbar />
      <ProductList products={data} />
      <Footer />
    </div>
  );
};

export default ProductListPage;
