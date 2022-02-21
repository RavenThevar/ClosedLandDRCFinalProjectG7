import React from "react";
import "./SignInStyle.css";
import NFT from "../images/nft.png";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Form,
} from "react-bootstrap";
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
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>USERNAME</Form.Label>
                <Form.Control placeholder="Username" />
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="forgot-password">Forgot Password?</div>
              <div className="login-button-container">
                <button className="login-button"> LOGIN</button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
