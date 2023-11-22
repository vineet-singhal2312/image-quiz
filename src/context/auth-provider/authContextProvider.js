import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {
    name,
    email
  } = JSON.parse(localStorage?.getItem("userDetails")) || {
    name: null,
    email: null
  };

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);

  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
