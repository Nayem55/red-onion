import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
  }
  return (
    <div className="header fixed-top">
      <img className="logo" src="/images/logo2.png" alt="" />
      <div>
        <FontAwesomeIcon className="mx-2 cart" icon={faCartPlus} ></FontAwesomeIcon>
        <Link className="nav-login mx-3" to="/">Home</Link>
        {
          user? <Link onClick={handleSignOut} className="nav-signup mx-3" to="/login">Log out</Link> : 
          <Link className="nav-login mx-3" to="/login">Login</Link>
        }
        {
          !user &&<Link className="nav-signup mx-3" to="/signup">Sign up</Link>

        }
      </div>
    </div>
  );
};

export default Header;
