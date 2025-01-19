import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth, removeValue, isUserAuthenticate] = useLocalStorage(
    "auth",
    {}
  );

  const usreLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    removeValue("auth");
  };

  const isUserLogin = isUserAuthenticate("auth");

  return (
    <AuthContext.Provider
      value={{ user: auth, usreLogin, userLogout, isUserLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
