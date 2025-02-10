import { Link } from "react-router-dom";

const MotorCard = ({ motorInfo }) => {
  return (
    <div className="motorcycle">
      <img src={motorInfo.imageUrl} alt="example1" />
          <h3 className="model">{motorInfo.model}</h3>
          <p className="year">Year: {motorInfo.year}</p>
          <p className="mileage">Mileage: {motorInfo.mileage} km.</p>
          <p className="contact">Contact Number: {motorInfo.contact}</p>
          <a className="details-btn" href="#"></a>      
      <Link className="details-btn" to={`/catalog/details/${motorInfo._id}`}>
        More Info
      </Link>
    </div>
  );
};

export default MotorCard;
