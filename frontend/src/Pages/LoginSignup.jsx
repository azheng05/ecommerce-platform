import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>


    // <div className="loginsignup">
    //   <div className="loginsignup-container">
    //     <h1>Sign Up</h1>
    //     <div className="loginsignup-fields">
    //       <input type="text" placeholder="Your Name"></input>
    //       <input type="email" placeholder="Email Address"></input>
    //       <input type="password" placeholder="Password"></input>
    //     </div>
    //     <button>Continue</button>
    //     <p className="loginsignup-login">
    //       Already have an account? <span>Login Here</span>
    //     </p>
    //     <div className="loginsignup-agree">
    //       <input type="checkbox" name="" id=""/>
    //       <p>By continuing, I agree to the terms of use & privacy policy.</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default LoginSignup;
