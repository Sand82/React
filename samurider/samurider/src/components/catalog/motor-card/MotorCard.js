import { Link } from "react-router-dom";

const MotorCard = ({ motorInfo }) => {
  return (
    <div className="motorcycle">
      <img src={motorInfo.imageUrl} alt="example1" />
      <h3 className={motorInfo.model}>Honda Hornet</h3>
      <p className={motorInfo.year}>Year: 2006</p>
      <p className={motorInfo.mileage}>Mileage: 45000 km.</p>
      <p className={motorInfo.contact}>Contact Number: 0881234567</p>
      <Link className="details-btn" to={`/catalog/detail/${motorInfo._id}`}>
        More Info
      </Link>
    </div>
  );
};

export default MotorCard;
