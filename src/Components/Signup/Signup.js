import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const nameRef = useRef("");
  const confirmRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [passError,setPassError] = useState("")
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPass = confirmRef.current.value;
    if(loading){
        return
    }
    if(password!==confirmPass){
        setPassError("Password doesn't match")
    }
  
    if(user){
        navigate('/')
    }
    createUserWithEmailAndPassword(email, password)
    
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <img className="img-fluid signup-logo" src="/images/logo2.png" alt="" />
        <div className="signup-input">
          <input type="text" name="text" ref={nameRef} placeholder="Name" required />
          <input type="email" name="email" ref={emailRef} placeholder="Email" required />
          <input
            type="password"
            name="password"
            ref={passRef}
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirm-passeord"
            ref={confirmRef}
            placeholder="Confirm Password"
            required
          />
          <input type="submit" className="signup-btn" value="Sign up" />
          <p className="text-center">Already have an account? <Link className="mt-0" to="/login">Login</Link> </p>
          {
            error?<p className="text-center mt-1 " style={{color:"red"}}>{error?.message}</p> :  <p className="text-center mt-1" style={{color:"red"}}>{passError}</p>
          }
        </div>
      </form>
    </div>
  );
};

export default Signup;
