import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Login() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="container-main d-flex align-items-center justify-content-center vh-100">
      <div className={`container-form ${isSignUp ? "right-panel-active" : ""}`}>
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form>
            <h2>Create Account</h2>
            <div className="social-container ">
              <a href="#"><i className="fab fa-facebook-f  btn "></i></a>
              <a href="#"><i className="fab fa-google-plus-g btn  "></i></a>
              <a href="#"><i className="fab fa-linkedin-in btn  "></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn btn-light w-100 mt-3" style={{backgroundColor:"#8dafea", color:"##162c52"}}>Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form>
            <h2 >Sign in</h2>
            <div className="social-container ">
              <a href="#"><i className="fab fa-facebook-f btn"></i></a>
              <a href="#"><i className="fab fa-google-plus-g btn"></i></a>
              <a href="#"><i className="fab fa-linkedin-in btn"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="text-muted">Forgot your password?</a>
            <button className="btn btn-light w-100 mt-3" style={{backgroundColor:"#8dafea", color:"#162c52"}}>Sign In</button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2>Welcome Back!</h2>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost btn btn-outline-light " style={{ color:"#162c52"}} onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2>Hello, Friend!</h2>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost btn btn-outline-light" style={{ color:"#162c52"}} onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
