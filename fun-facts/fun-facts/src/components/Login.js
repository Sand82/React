import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as AuthValidator from "../validators/AuthValidator.js";
import * as AuthService from "../services/AuthService.js";
import { AuthContext } from "../contexts/AuthContext.js";

const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });
  const [requestError, setRequestError] = useState({
    message: "",
    hasError: false,
  });
  const { usreLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSubmitHeandler = (e) => {
    e.preventDefault();

    AuthService.login(loginUser).then((response) => {
      console.log(response);

      if (response.code) {
        setRequestError((error) => ({
          message: response.message,
          hasError: true,
        }));
        console.log(requestError);
        return;
      }
      usreLogin({ response });
      navigate("/");
    });
  };

  const loginChangeHeandler = (e) => {
    setLoginUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const loginErrors = (e) => {
    let currField = e.target.name;

    let isFieldNotValid = AuthValidator.loginValidator(
      currField,
      e.target.value
    );

    setError((error) => ({
      ...error,
      [currField]: isFieldNotValid,
    }));
  };

  let isNotValid = false;

  if (Object.values(error).some((error) => error)) {
    isNotValid = true;
  }

  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>
        <form className="login-form" onSubmit={loginSubmitHeandler}>
          {requestError.hasError && (
            <span className="server-error-massage">{requestError.message}</span>
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
          <button disabled={isNotValid} type="submit">
            login
          </button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
