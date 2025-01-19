import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as AuthValidator from "../validators/AuthValidator.js";
import * as AuthService from "../services/AuthService.js";
import { AuthContext } from "../contexts/AuthContext.js";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
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
  const { usreLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const registerSubmitHeandler = (e) => {
    e.preventDefault();

    if (AuthValidator.stateValidator(error, registerUser)) {
      setRequestAndOtherError((error) => ({
        message: "Required valid email and password!",
        hasError: true,
      }));

      return;
    }    

    let isNotValidConfirmation = AuthValidator.passwordsValidation(
      registerUser.password,
      registerUser.repeatPassword
    );

    if (isNotValidConfirmation) {
      setRequestAndOtherError((error) => ({
        message: "Password and password confirmation should be equal!",
        hasError: true,
      }));

      return;
    }

    let registerObject = {
      email: registerUser.email,
      password: registerUser.password,
    };

    AuthService.register(registerObject).then((response) => {
      if (response.code) {
        setRequestAndOtherError((error) => ({
          message: response.message,
          hasError: true,
        }));
        return;
      }
      usreLogin({ response });
      navigate("/");
    });
  };

  const registerChangeHeandler = (e) => {
    setRegisterUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const registerError = (e) => {
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
    <section id="register">
      <div className="form">
        <h2>Register</h2>
        <form className="register-form" onSubmit={registerSubmitHeandler}>
          {requestAndOtherError.hasError && (
            <span className="server-error-massage">
              {requestAndOtherError.message}
            </span>
          )}
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
            value={registerUser.email}
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
            value={registerUser.password}
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
            value={registerUser.repeatPassword}
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
            Already registered? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
