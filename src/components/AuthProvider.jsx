import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false); //login status
  const [user, setUser] = useState(); //bearer token for headers
  const [userDetail, setUserDetail] = useState({}); //current user details

  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("user");
  useEffect(() => {
    console.log(loggedInUser);
    if (loggedInUser) {
      setLoggedIn(true);
      setUser(loggedInUser);
      if (userDetail.length > 0) {
        return;
      }
      axios({
        method: "get",
        url: "https://localhost:7018/api/User/getme",
        headers: { Authorization: "bearer " + loggedInUser },
      }).then((res) => {
        if (res) {
          setUserDetail(res.data);
          return;
        }
        setLoggedIn(false);
        setUser();
        navigate("/Login");
      });
    } else navigate("/Login");
  }, []);

  const logout = () => {
    setLoggedIn(false);
    setUser("");
    setUserDetail({
      hasVoted: "",
      userName: "",
      userRole: "",
    });
    localStorage.removeItem("user");
    navigate("/login");
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
