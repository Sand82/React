import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "The first book i ever wrote.",
  },
  {
    id: "p2",
    title: "My Second Book.",
    price: 5,
    description: "The second book i ever wrote.",
  },
  {
    id: "p3",
    title: "React Advanced",
    price: 10.99,
    description: "React for advansed programers.",
  },
  {
    id: "p4",
    title: "C# For Programers",
    price: 12.99,
    description: "C# for programers. Eazy way to start programing.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((x) => (
          <ProductItem
            key={x.id}
            id={x.id}
            title={x.title}
            price={x.price}
            descripton={x.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
