import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [inTouche, setIsTouche] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && inTouche;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouche(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouche(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
