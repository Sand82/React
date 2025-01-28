import { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState({});

  useEffect(() => {
    let currUserInfo = localStorage.getItem(key);
    let currValue = currUserInfo ? JSON.parse(currUserInfo) : {};
    setValue(currValue);
  }, [key]);

  const setLocalStorageValue = (newValue) => {
    localStorage.setValue(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorageValue];
};
