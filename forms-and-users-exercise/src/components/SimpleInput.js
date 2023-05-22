import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouche, setEnteredEmailTouche] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlureHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouche;

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouche(true);
  };

  const formSubmitionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
  };

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlureHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email Address</label>
        <input
          type="email"
          id="age"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Invalid Email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
