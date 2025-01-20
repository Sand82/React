import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as AuthService from "../services/AuthService.js";
import { AuthContext } from "../contexts/AuthContext.js";

const Logout = () => {
  const { user, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  AuthService.logout(user.accessToken);
  userLogout();

  navigate("/");

  return <></>;
};

export default Logout;
