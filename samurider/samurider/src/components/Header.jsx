import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext.jsx";
import * as AuthService from "../services/AuthService.js";

const Header = () => {
  const { user, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHeandler = () => {
    AuthService.logout(user.accessToken);
    userLogout();

    navigate("/");
  }; 

  return (
    <header>
      <Link id="logo" to="/">
        <img id="logo-img" src="./images/logo.png" alt="" />
      </Link>
      <nav>
        {user.email && <div className="nav-user-email">{user.email}</div>}
        <div>
          <Link to="/catalog">Motorcycles</Link>
          <Link to="#">Search</Link>
        </div>

        {user.email ? (
          <div className="user">
            <Link to="/create">Add Motorcycle</Link>
            <Link onClick={logoutHeandler} to="/">
              Logout
            </Link>
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
