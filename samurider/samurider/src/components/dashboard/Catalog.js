import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <>
      <h2>Available Motorcycles</h2>
      <section id="dashboard">
        {/* Display a div with information about every post (if any)*/}
        <div className="motorcycle">
          <img src="./images/Honda Hornet.png" alt="example1" />
          <h3 className="model">Honda Hornet</h3>
          <p className="year">Year: 2006</p>
          <p className="mileage">Mileage: 45000 km.</p>
          <p className="contact">Contact Number: 0881234567</p>
          <Link className="details-btn" to="#">
            More Info
          </Link>
        </div>
        <div className="motorcycle">
          <img src="./images/Kawasaki er6n.png" alt="example1" />
          <h3 className="model">Kawasaki er6n</h3>
          <p className="year">Year: 2016</p>
          <p className="mileage">Mileage: 10000 km.</p>
          <p className="contact">Contact Number: 0884567123</p>
          <Link className="details-btn" to="#">
            More Info
          </Link>
        </div>
        <div className="motorcycle">
          <img src="./images/Yamaha mt 07.png" alt="example1" />
          <h3 className="model">Yamaha mt 07</h3>
          <p className="year">Year: 2017</p>
          <p className="mileage">Mileage: 15000 km.</p>
          <p className="contact">Contact Number: 0886714523</p>
          <Link className="details-btn" to="#">
            More Info
          </Link>
        </div>
      </section>
    </>
  );
};

export default Catalog;
