import { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState({});

  useEffect(() => {
    let currUserInfo = localStorage.getItem(key);
    let currValue = currUserInfo ? JSON.parse(currUserInfo) : {};
    setValue(currValue);
  }, []);

  const setLocalStorageValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorageValue];
};
