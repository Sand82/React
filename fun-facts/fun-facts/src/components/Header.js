import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext.js";

const Header = () => {
  const { user, isUserLogin } = useContext(AuthContext);

  console.log(isUserLogin);

  return (
    <header>
      {/* Navigation */}
      <Link id="logo" to="/">
        <img id="logo-img" src="./images/logo.png" alt="" />
      </Link>
      <nav>
        {isUserLogin && <div className="user-email">{user.email}</div>}
        <div>
          <Link to="/fun-facts">Fun Facts</Link>
        </div>
        {isUserLogin ? (
          <div className="user">
            <Link to="/create">Add Fact</Link>
            <Link to="/logout">Logout</Link>
          </div>
        ) : (
          <div className="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
