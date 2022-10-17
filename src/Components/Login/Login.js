import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <img className="img-fluid signup-logo" src="/images/logo2.png" alt="" />
        <div className="signup-input">
          <input type="email" name="email" ref={emailRef} placeholder="Email" required/>
          <input type="password" name="password" ref={passRef} placeholder="Password" required />
          <input type="submit" className="signup-btn" value="Login" />
          <p className="text-center">Don't have an account? <Link className="mt-0" to="/signup">Sign up</Link> </p>
          <p className="text-center" style={{ color: "red" }}>
            {error?.message}
          </p>
          <p className="text-center" style={{color:'green'}}>{loading && "Signing in..."}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
