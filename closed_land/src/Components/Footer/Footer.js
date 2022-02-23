import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import contactlogo from "../../images/contactus.png";
import twitter from "../../images/twittericon.png";
import discord from "../../images/discordicon.png";
import instagram from "../../images/igicon.png";
import youtube from "../../images/youtubeicon.png";
import email from "../../images/emailicon.png";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  // Container,
} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
            <Button type="submit" id="button-addon2">
              {/* <span
                class=" glyphicon glyphicon-arrow-right"
                aria-hidden="true"
              ></span> */}
              Send
            </Button>
          </InputGroup>
        </div>
        {/* <Container className="footer-container"> */}
        <Row>
          <div className="icon-logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="footer-text">ClosedLand</h1>
          <h5 className="footer-describe">
            NFT platform provider which gives aesthetes and digital art creators
            a one-stop centre to do what they want.
          </h5>
          <Col className="contact-us">
            <h3>
              <img className="contact-logo" src={contactlogo} alt="contact" />
              Contact Us
            </h3>
          </Col>
          <h5 className="footer-contact-number">(+60) 12-3456789</h5>
          <h3 className="footer-socmed">Our Social Media</h3>
          <div className="socmed-icon">
            <img className="twitter" src={twitter} alt="twitter" />
            <img className="discord" src={discord} alt="discord" />
            <img className="instagram" src={instagram} alt="instagram" />
            <img className="youtube" src={youtube} alt="youtube" />
            <img className="email" src={email} alt="email" />
          </div>
        </Row>
        <hr />
        <div className="footer-trademark">
          <p className="footer-copyright">
            {" "}
            &copy;{new Date().getFullYear()} ClosedLand
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
