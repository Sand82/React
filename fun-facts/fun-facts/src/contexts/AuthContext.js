import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth, removeAuth] = useLocalStorage("auth", {});

  const usreLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
    removeAuth("auth");
  };

  return (
    <AuthContext.Provider value={{ user: auth, usreLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
