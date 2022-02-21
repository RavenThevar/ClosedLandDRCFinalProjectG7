import React from "react";
import "./SignInStyle.css";
import NFT from "../images/nft.png";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";

const SignIn = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="main-container">
        <h1 className="title">SIGN IN</h1>
        <div className="container">
          <Container className="rectangle1">
            <img className="nft-image" src={NFT} alt="png" />
          </Container>
          <Container className="rectangle2">
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
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
