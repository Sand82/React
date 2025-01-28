import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as MotorService from "../../../services/MotorService.js";

const MotorDetails = () => {
  const { id } = useParams();
  const [motor, setMotor] = useState({});

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
          {/*Edit and Delete are only for creator*/}
          <div id="action-buttons">
            <Link to="" id="edit-btn">
              Edit
            </Link>
            <Link to="" id="delete-btn">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorDetails;
