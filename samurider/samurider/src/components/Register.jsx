import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as AuthService from "../services/AuthService.js";
import Input from "../components/UI/Input.jsx";
import { useInput } from "../hooks/useInput.js";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualToOtherValue,
} from "../validators/Validation.js";
import * as Constant from "../constants/GlobalConstants.js";

const Register = () => {
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
    (value) =>
      hasMinLength(value, Constant.passwordMinLength) && isNotEmpty(value)
  );

  const {
    value: repeatPasswordValue,
    changeHeandler: repeatPasswordChangeHeandler,
    hasError: repeatPasswordError,
    inputBlurHeandler: repeatPasswordInputBluerHeandler,
  } = useInput(
    "",
    (value) =>
      hasMinLength(value, Constant.passwordMinLength) && isNotEmpty(value)
  );

  const [generalErrors, setGeneralErrors] = useState({
    message: "",
    hasError: false,
  });

  const navigate = useNavigate();

  const registerSubmitHeandler = (e) => {
    e.preventDefault();

    if (emailError || passwordError || repeatPasswordError) {
      return;
    }

    if (
      !isNotEmpty(emailValue) ||
      !isNotEmpty(passwordValue) ||
      !isNotEmpty(repeatPasswordValue)
    ) {
      setGeneralErrors((error) => ({
        message: "All fields are required.",
        hasError: true,
      }));
      return;
    }

    let isValidConfirmation = isEqualToOtherValue(
      passwordValue,
      repeatPasswordValue
    );

    if (!isValidConfirmation) {
      setGeneralErrors((error) => ({
        message: "Password and password confirmation should be equal!",
        hasError: true,
      }));

      return;
    }

    let registerObject = {
      email: emailValue,
      password: passwordValue,
    };

    AuthService.register(registerObject).then((response) => {
      if (response.code) {
        setGeneralErrors((error) => ({
          message: response.message,
          hasError: true,
        }));
        return;
      }

      navigate("/login");
    });
  };

  return (
    <section id="register">
      <div className="form">
        <h2>Register</h2>
        {generalErrors.hasError && (
          <span className="general-error-massage">{generalErrors.message}</span>
        )}
        <form className="register-form" onSubmit={registerSubmitHeandler}>
          <Input
            label={"Email"}
            type="text"
            name="email"
            id="register-email"
            value={emailValue}
            onChange={emailChangeHeandler}
            onBlur={emailInputBluerHeandler}
            error={emailError && "Email address is not valid!"}
          />
          <Input
            label={"Password"}
            type="password"
            name="password"
            id="register-password"
            value={passwordValue}
            onChange={passwordChangeHeandler}
            onBlur={passwordInputBluerHeandler}
            error={
              passwordError &&
              `Password should be more than ${Constant.passwordMinLength} cheracters!`
            }
          />
          <Input
            label={"Password confirmation"}
            type="password"
            name="repeatPassword"
            id="repeat-password"
            value={repeatPasswordValue}
            onChange={repeatPasswordChangeHeandler}
            onBlur={repeatPasswordInputBluerHeandler}
            error={
              repeatPasswordError &&
              "Password should be more than 6 cheracters!"
            }
          />
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
