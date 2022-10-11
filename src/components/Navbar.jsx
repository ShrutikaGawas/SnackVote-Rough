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
  console.log("navbar : ", auth);
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
          {auth && auth.userDetail.userRole=="User"&&(
          <>
          <NavLink className="nav-link" to="/" end>
            <li>Home</li>
          </NavLink>
          <NavLink className="nav-link" to="/Menu">
            <li>Menu</li>
          </NavLink>
          <NavLink className="nav-link" to="/Status">
            <li>Status</li>
          </NavLink>
          </>
          )}
         {auth && auth.userDetail.userRole=="Admin" &&(
          <>
          <NavLink className="nav-link" to="/Admin">
            <li>Admin</li>
          </NavLink>
          <NavLink className="nav-link" to="/Poll">
            <li>Polls</li>
          </NavLink>
          </>)}
          </ul>
          {/* Admin Section */}
          
        

        <ul>
          {auth &&!auth.loggedIn && (
            <NavLink className="nav-link" to="/Login">
              <Button
                style={{ backgroundColor: "#80CC28", borderColor: "#80CC28" }}
                className="Login-Button"
              >
                Login
              </Button>
            </NavLink>
          )}
          {auth && auth.loggedIn && (
            <Button
              style={{ backgroundColor: "#80CC28", borderColor: "#80CC28" }}
              className="Login-Button"
              onClick={auth.logout}
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
