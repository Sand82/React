import { Link } from "react-router-dom";

const MotorSearchDetails = ({motor}) => {
    return (
        <div className="motorcycle">
            <img src={motor.imageUrl} alt="example1" />
            <h3 className="model">{motor.model}</h3>
            <Link className="details-btn" to={`/catalog/details/${motor._id}`}>
              More Info
            </Link>
          </div>
    )
}

export default MotorSearchDetails;