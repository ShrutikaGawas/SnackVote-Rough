import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Navbar.css";

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <header>
      <figure className="brand">
        <img src={Logo} alt="Logo" />
      </figure>
      <nav className="menu">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="menu-icon">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <NavLink className="nav-link" to="/" end>
            <li>Home</li>
          </NavLink>
          <NavLink className="nav-link" to="/Menu">
            <li>Menu</li>
          </NavLink>
          <NavLink className="nav-link" to="/Status">
            <li>Status</li>
          </NavLink>
        </ul>

        <ul>
          {/* <NavLink className="nav-link" to="/Login">
            <Button
              style={{ backgroundColor: "#80CC28", borderColor: "#80CC28" }}
              type="primary"
              size="medium"
              className="Login-Button"
            >
              Sign In
            </Button>
          </NavLink> */}
          {!auth.user ? (
            <NavLink className="nav-link" to="/Login">
              <Button
                style={{ backgroundColor: "#80CC28", borderColor: "#80CC28" }}
                className="Login-Button"
              >
                Login
              </Button>
            </NavLink>
          ) : (
            <Button
              style={{ backgroundColor: "#80CC28", borderColor: "#80CC28" }}
              className="Login-Button"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
