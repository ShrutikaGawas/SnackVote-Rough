import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user,setUser] = useState("")

  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLoggedIn(true);
      setUser(loggedInUser);
      navigate("/");
    } else navigate("/Login");
  },[]);

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("user");
  };
  
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, logout,setUser,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
