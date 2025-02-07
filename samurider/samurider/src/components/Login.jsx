import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as AuthService from "../services/AuthService.js";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Input from "./UI/Input.jsx";
import { useInput } from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from "../validators/Validation.js";

const passwordMinLength = 6;

const Login = () => {
  const {
    value: emailValue,
    changeHeandler: emailChangeHeandler,
    hasError: emailError,
    inputBlurHeandler: emailInputBluerHeandler,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    changeHeandler: passwordChangeHeandler,
    hasError: passwordError,
    inputBlurHeandler: passwordInputBluerHeandler,
  } = useInput(
    "",
    (value) => hasMinLength(value, passwordMinLength) && isNotEmpty(value)
  );

  const [requestError, setRequestError] = useState({
    message: "",
    hasError: false,
  });

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSubmitHeandler = (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    let loginCredential = {
      email: emailValue,
      password: passwordValue,
    };

    AuthService.login(loginCredential).then((response) => {
      console.log(response);
      if (response.code) {
        setRequestError((error) => ({
          message: response.message,
          hasError: true,
        }));
        return;
      }

      userLogin(response);
      navigate("/");
    });
  };

  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>
        <form className="login-form" onSubmit={loginSubmitHeandler}>
          {requestError.hasError && (
            <span className="server-error-massage">{requestError.message}</span>
          )}
          <Input
            label="Email"
            type="text"
            name="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHeandler}
            onBlur={emailInputBluerHeandler}
            error={emailError && "Email address is not valid!"}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHeandler}
            onBlur={passwordInputBluerHeandler}
            error={
              passwordError &&
              `Password shoud be more than ${passwordMinLength} symbols!`
            }
          />
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
