import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const setLocalStorageValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  };

  const removeLocalStorageValue = (key) => {
    localStorage.removeItem(key);
  }

  return [value, setLocalStorageValue, removeLocalStorageValue];
};
