import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const setLocalStorageValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  const removeValue = (key) => {
    localStorage.removeItem(key);
    setValue({});
  };

  const isUserAuthenticate = (key) => {
    let value = JSON.parse(localStorage.getItem(key));

    if (value) {
      return true;
    }
    return false;
  };

  return [value, setLocalStorageValue, removeValue, isUserAuthenticate];
};
