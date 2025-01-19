import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as AuthValidator from "../validators/AuthValidator.js";
import * as AuthService from "../services/AuthService.js";
import { AuthContext } from "../contexts/AuthContext.js";

const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });
  const [requestAndOtherError, setRequestAndOtherError] = useState({
    message: "",
    hasError: false,
  });
  const { usreLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSubmitHeandler = (e) => {
    e.preventDefault();

    if (
      Object.values(error).some((error) => error) ||
      Object.values(loginUser).some((loginField) => loginField.trim() === "")
    ) {
      setRequestAndOtherError((error) => ({
        message: "Required valid email and password!",
        hasError: true,
      }));

      return;
    }

    AuthService.login(loginUser).then((response) => {
      if (response.code) {
        setRequestAndOtherError((error) => ({
          message: response.message,
          hasError: true,
        }));
        return;
      }
      
      usreLogin(response);
      navigate("/");
    });
  };

  const loginChangeHeandler = (e) => {
    setLoginUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const loginErrors = (e) => {
    let currField = e.target.name;

    let isFieldNotValid = AuthValidator.fieldsValidator(
      currField,
      e.target.value
    );

    setError((error) => ({
      ...error,
      [currField]: isFieldNotValid,
    }));
  };

  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>
        <form className="login-form" onSubmit={loginSubmitHeandler}>
          {requestAndOtherError.hasError && (
            <span className="server-error-massage">
              {requestAndOtherError.message}
            </span>
          )}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={loginUser.email}
            onChange={loginChangeHeandler}
            onBlur={loginErrors}
          />
          {error.email && (
            <span className="field-error-message">
              Email address is not valid!
            </span>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={loginUser.password}
            onChange={loginChangeHeandler}
            onBlur={loginErrors}
          />
          {error.password && (
            <span className="field-error-message">
              Password should be more than 6 cheracters!
            </span>
          )}
          <button type="submit">login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
