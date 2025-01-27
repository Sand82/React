import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* Navigation */}
      <Link id="logo" to="/">
        <img id="logo-img" src="./images/logo.png" alt="" />
      </Link>
      <nav>
        <div>
          <Link to="/catalog">Motorcycles</Link>
          <Link to="#">Search</Link>
        </div>
        {/* Logged-in users */}
        <div className="user">
          <Link to="#">Add Motorcycle</Link>
          <Link to="#">Logout</Link>
        </div>
        {/* Guest users */}
        <div className="guest">
          <Link to="#">Login</Link>
          <Link to="#">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
