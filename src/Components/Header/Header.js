import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  window.addEventListener("scroll", ()=>{
    setScroll(window.scrollY)
  })
  useEffect(()=>{
    setOpen(false);
  },[scroll])
  return (
    <div className="header fixed-top">
      <div className="menu">
        <img className="logo" src="/images/logo2.png" alt="" />
        <button onClick={() => setOpen(!open)} className="bar-button">
          <FontAwesomeIcon  icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
        <div className={`navlink ${open ? "show" : "hide" }`}>
          <Link onClick={()=>setOpen(false)} to="/cart" className="mx-2 header-cart">
            {" "}
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </Link>

          <Link onClick={()=>setOpen(false)} className="nav-login mx-3" to="/">
            Home
          </Link>
          {user ? (
            <Link 
              onClick={handleSignOut}
              className="nav-signup mx-3"
              to="/login"
            >
              Log out
            </Link>
          ) : (
            <Link onClick={()=>setOpen(false)} className="nav-login mx-3" to="/login">
              Login
            </Link>
          )}
          {!user && (
            <Link onClick={()=>setOpen(false)} className="nav-signup mx-3" to="/signup">
              Sign up
            </Link>
          )}
        </div>
    </div>
  );
};

export default Header;
