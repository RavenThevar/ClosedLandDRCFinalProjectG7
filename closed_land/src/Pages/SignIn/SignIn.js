import React from "react";
import "./SignInStyle.css";
import NFT from "../images/nft.png";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";

const SignIn = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-container">
        <h1 className="title">SIGN IN</h1>
        <div className="container">
          <div className="rectangle1">
            <img className="nft-image" src={NFT} alt="png" />
          </div>
          <div className="rectangle2">
            <div className="buttons">
              <button className="small_signin">SIGN IN</button>
              <button className="small_signup">SIGN UP</button>
            </div>
            <div className="form-username">
              <p className="username">USERNAME</p>
              <input type="text" placeholder="username or email" />
            </div>
            <div className="form-password">
              <p className="username">PASSWORD</p>
              <input type="text" placeholder="enter your password" />
            </div>
            <div className="forgot-login">
              <div className="forgot-password">Forgot Password?</div>
              <div className="login-button-container">
                <button className="login-button"> LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
