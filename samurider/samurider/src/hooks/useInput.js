import { useState } from "react";

export const useInput = (defaultValue, validationFn) => {
  const [value, setValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const changeHeandler = (e) => {
    setValue(e.target.value);
    setDidEdit(true);
  };

  let isNotValidValue = validationFn(value);

  const inputBlurHeandler = (e) => {
    setDidEdit(false);
  };

  return {
    value,
    changeHeandler,
    inputBlurHeandler,
    hasError: didEdit && !isNotValidValue,
  };
};
