import { useState } from "react";

export const useInput = (defaultValue, validationFn) => {
  const [value, setValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const changeHeandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHeandler = (e) => {
    setDidEdit(validationFn(e.target.value));
  };

  return {
    value,
    changeHeandler,
    inputBlurHeandler,
    hasError: didEdit,
  };
};
