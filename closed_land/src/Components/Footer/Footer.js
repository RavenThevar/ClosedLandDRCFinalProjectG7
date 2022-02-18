import React from "react";
import logo from "../../images/logo.png";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Container,
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
            <Button variant="outline-secondary" id="button-addon2">
              Send
            </Button>
          </InputGroup>
        </div>
        <Container>
          <Row>
            <img src={logo} />
            <h1>ClosedLand</h1>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
