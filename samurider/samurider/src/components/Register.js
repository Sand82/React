import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as AuthValidator from "../validators/AuthValidator.js";
import * as StateValidator from "../validators/StateValidator.js";
import * as AuthService from "../services/AuthService.js";

const Register = () => {
  const [registerCredential, setRegisterCredential] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({
    email: false,
    password: false,
    repeatPassword: false,
  });

  const [requestAndOtherError, setRequestAndOtherError] = useState({
    message: "",
    hasError: false,
  });

  const navigate = useNavigate();

  const registerSubmitHeandler = (e) => {
    e.preventDefault();

    if (StateValidator.validateState(error, registerCredential)) {
      setRequestAndOtherError((error) => ({
        message: "Required valid email and password!",
        hasError: true,
      }));

      return;
    }

    let isNotValidConfirmation = AuthValidator.passwordConfirmation(
      registerCredential.password,
      registerCredential.repeatPassword
    );

    if (isNotValidConfirmation) {
      setRequestAndOtherError((error) => ({
        message: "Password and password confirmation should be equal!",
        hasError: true,
      }));

      return;
    }

    let registerObject = {
      email: registerCredential.email,
      password: registerCredential.password,
    };

    AuthService.register(registerObject).then((response) => {
      if (response.code) {
        setRequestAndOtherError((error) => ({
          message: response.message,
          hasError: true,
        }));
        return;
      }

      navigate("/login");
    });
  };

  const registerChangeHeandler = (e) => {
    setRegisterCredential((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const registerError = (e) => {
    let currField = e.target.name;

    let isFieldNotValid = AuthValidator.credentialErrors(
      currField,
      e.target.value
    );

    setError((error) => ({
      ...error,
      [currField]: isFieldNotValid,
    }));
  };

  return (
    <section id="register">
      <div className="form">
        <h2>Register</h2>
        {requestAndOtherError.hasError && (
          <span className="server-error-massage">
            {requestAndOtherError.message}
          </span>
        )}
        <form className="register-form" onSubmit={registerSubmitHeandler}>
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
            value={registerCredential.email}
            onChange={registerChangeHeandler}
            onBlur={registerError}
          />
          {error.email && (
            <span className="field-error-message">
              Email address is not valid!
            </span>
          )}
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
            value={registerCredential.password}
            onChange={registerChangeHeandler}
            onBlur={registerError}
          />
          {error.password && (
            <span className="field-error-message">
              Password should be more than 6 cheracters!
            </span>
          )}
          <input
            type="password"
            name="repeatPassword"
            id="repeat-password"
            placeholder="repeat password"
            value={registerCredential.repeatPassword}
            onChange={registerChangeHeandler}
            onBlur={registerError}
          />
          {error.repeatPassword && (
            <span className="field-error-message">
              Password should be more than 6 cheracters!
            </span>
          )}
          <button type="submit">register</button>
          <p className="message">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
