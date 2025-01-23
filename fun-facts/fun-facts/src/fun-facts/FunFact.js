import { Link } from "react-router-dom";

const FunFact = ({ funFact }) => {
  
  return (
    <div className="fact">
      <img src={funFact.imageUrl} alt="example1" />
      <h3 className="category">{funFact.category}</h3>
      <p className="description">{funFact.description}</p>
      <Link className="details-btn" to={`/fun-facts/detail/${funFact._id}`}>
        More Info
      </Link>
    </div>
  );
};

export default FunFact;
