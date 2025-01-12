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
          <Link to="/fun-facts">Fun Facts</Link>
        </div>
        {/* Logged-in users */}
        <div className="user">
          <Link to="/create">Add Fact</Link>
          <Link to="#">Logout</Link>
        </div>
        {/* Guest users */}
        <div className="guest">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
