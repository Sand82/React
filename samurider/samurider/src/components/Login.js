import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as AuthValidator from "../validators/AuthValidator.js";
import * as StateValidator from "../validators/StateValidator.js";
import * as AuthService from "../services/AuthService.js";
import { AuthContext } from "../contexts/AuthContext.js";

const Login = () => {
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [requestAndOtherError, setRequestAndOtherError] = useState({
    message: "",
    hasError: false,
  });

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSubmitHeandler = (e) => {
    e.preventDefault();

    if (StateValidator.validateState(errors, loginCredential)) {
      setRequestAndOtherError((error) => ({
        message: "Required valid email and password!",
        hasError: true,
      }));

      return;
    }

    AuthService.login(loginCredential).then((response) => {
      console.log(response);
      if (response.code) {
        setRequestAndOtherError((error) => ({
          message: response.message,
          hasError: true,
        }));
        return;
      }

      userLogin(response);
      navigate("/");
    });
  };

  const loginChangeHeandler = (e) => {
    setLoginCredential((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHeandler = (e) => {
    let fiedlName = e.target.name;

    let isFieldNotValid = AuthValidator.credentialErrors(
      fiedlName,
      e.target.value
    );

    setErrors((state) => ({
      ...state,
      [fiedlName]: isFieldNotValid,
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
            value={loginCredential.email}
            onChange={loginChangeHeandler}
            onBlur={errorHeandler}
          />
          {errors.email && (
            <span className="field-error-message">
              Email address is not valid!
            </span>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={loginCredential.password}
            onChange={loginChangeHeandler}
            onBlur={errorHeandler}
          />
          {errors.password && (
            <span className="field-error-message">
              Password should be more than 6 cheracters!
            </span>
          )}
          <button type="submit">login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
