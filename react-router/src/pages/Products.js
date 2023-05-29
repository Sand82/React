import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p2",
    title: "Product 3",
  },
];

const ProductsPage = () => {
  return (
    <>
      <div>The Products Page</div>
      <ul>
        {PRODUCTS.map((x) => (
          <li key={x.id}>
            <Link to={`/products/${x.id}`}>{x.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
