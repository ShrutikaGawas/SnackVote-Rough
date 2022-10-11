import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.loggedIn) {
    return <Navigate to="/Login" />;
  }
  return children;
};

export default RequireAuth;
