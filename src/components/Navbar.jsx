import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <nav className="menu">
    //   <img className="nav-logo" src={Logo} alt="Logo" />
    //   <NavLink className="nav-link" to="/" end>
    //     Home
    //   </NavLink>
    //   <NavLink className="nav-link" to="/Menu">
    //     Menu
    //   </NavLink>
    //   <NavLink className="nav-link" to="/Status">
    //     Status
    //   </NavLink>
    //   <NavLink className="nav-link" to="/">
    //    <Button
    //       style={{ backgroundColor: "#80CC28", borderColor: "#80CC28" }}
    //       type="primary"
    //       size="medium"
    //     >
    //       Sign In
    //     </Button>
    //   </NavLink>
    // </nav>
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
          <NavLink className="nav-link" to="/Menu" >
            <li>Menu</li>
          </NavLink>
          <NavLink className="nav-link" to="/Status" >
            <li>Status</li>
          </NavLink>
        </ul>

        <ul>
          <NavLink className="nav-link">
            
              <Button
              type="primary"
              size="medium"
              className="Login-Button"
            >
              Sign In
             
            </Button>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
