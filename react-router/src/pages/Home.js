import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>My Home Page</div>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
};

export default HomePage;
