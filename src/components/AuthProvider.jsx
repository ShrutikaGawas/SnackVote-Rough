import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [userDetail, setUserDetail] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLoggedIn(true);
      setUser(loggedInUser);
      navigate("/");
    } else navigate("/Login");
  }, []);
  const logout = () => {
    setLoggedIn(false);
    setUser("");
    localStorage.removeItem("user");
    navigate("/login")
  };
  const values = {
    loggedIn,
    setLoggedIn,
    logout,
    user,
    setUser,
    userDetail,
    setUserDetail,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
