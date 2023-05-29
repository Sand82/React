import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to="/products">Back</Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
