import { useEffect, useState } from "react";

import * as MotorService from "../../services/MotorService.js";
import MotorCard from "./motor-card/MotorCard.js";

const Catalog = () => {
  const [motors, setMotors] = useState([]);

  useEffect(() => {
    MotorService.getAll().then((response) =>
      setMotors((state) => (state = response))
    );
  }, []);

  let motorsInfo;

  if (motors.length > 0) {
    motorsInfo = (
      <>
        <h2>Available Motorcycles</h2>
        <section id="dashboard">
          {motors.map((motor) => (
            <MotorCard key={motor._id} motorInfo={motor} />
          ))}
        </section>
      </>
    );
  } else {
    motorsInfo = (
      <h2 className="no-avaliable">No avaliable motorcycles yet.</h2>
    );
  }  

  return motorsInfo;
};

export default Catalog;
