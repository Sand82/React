import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as MotorService from "../../../services/MotorService.js";
import { AuthContext } from "../../../contexts/AuthContext.jsx"

const MotorDetails = () => {
  const { id } = useParams();
  const [motor, setMotor] = useState({});
  const {user} = useContext(AuthContext)

  useEffect(() => {
    MotorService.getOne(id).then((response) =>
      setMotor((state) => (state = response))
    );
  }, [id]);
 
  return (
    <section id="details">
      <div id="details-wrapper">
        <img
          id="details-img"
          src={motor.imageUrl}
          alt={`motor ${motor.model}`}
        />
        <p id="details-title">{motor.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p className="year">Year: {motor.year}</p>
            <p className="mileage">Mileage: {motor.mileage}.</p>
            <p className="contact">Contact Number: {motor.contact}</p>
            <p id="motorcycle-description">{motor.about}</p>
          </div>
          
          <div id="action-buttons">
          { motor._ownerId === user._id &&
            <>
            <Link to={`/edit/${motor._id}`} id="edit-btn">
              Edit
            </Link>
            <Link to={`/delete/${motor._id}`} id="delete-btn">
              Delete
            </Link>
            </> 
          }           
          </div>          
        </div>
      </div>
    </section>
  );
};

export default MotorDetails;
