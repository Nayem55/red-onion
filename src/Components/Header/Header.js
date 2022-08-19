import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div className="header fixed-top">
      <img className="logo" src="/images/logo2.png" alt="" />
      <div>
        <FontAwesomeIcon className="mx-2 cart" icon={faCartPlus} ></FontAwesomeIcon>
        <Link className="nav-login mx-3" to="/login">Login</Link>
        <Link className="nav-signup mx-3" to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Header;
