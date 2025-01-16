import { useState } from "react";

import * as AuthValidator from "../validators/AuthValidator.js";

const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });

  const loginSubmitHeandler = (e) => {
    e.preventDefault();
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

  const isValid = false;

  if (Object.values(error).some((error) => error)) {
    isValid = true;
  }

  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>
        <form className="login-form" onSubmit={loginSubmitHeandler}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={loginUser.email}
            onChange={loginChangeHeandler}
            onBlur={loginErrors}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={loginUser.password}
            onChange={loginChangeHeandler}
            onBlur={loginErrors}
          />
          <button disabled={!isValid} type="submit">
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
